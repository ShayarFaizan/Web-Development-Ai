import { db } from "./firebase";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";

/**
 * PATH: c:\Users\Shayar Faizan\OneDrive\Desktop\Web Development Ai\frontend\lib\instagram.ts
 * 
 * Yeh utility Instagram Long-lived Access Token ko refresh karne ke liye hai.
 * Tokens 60 din tak valid rehte hain. Hum inhe Firestore mein store karte hain
 * taaki automatic refresh persist ho sake.
 */

const INSTAGRAM_CONFIG_PATH = "config/instagram";

/**
 * Is function ko use karke hum automatically refreshed token mangwa sakte hain.
 */
export async function getValidInstagramToken() {
  try {
    const docRef = doc(db, INSTAGRAM_CONFIG_PATH);
    const docSnap = await getDoc(docRef);

    let token = process.env.INSTAGRAM_ACCESS_TOKEN;
    let lastUpdated: number = 0;

    if (docSnap.exists()) {
      const data = docSnap.data();
      token = data.token;
      lastUpdated = (data.updatedAt as Timestamp).toMillis();
    } else if (token) {
      // Agar Firestore mein nahi hai toh pehli baar setup kardo
      await saveTokenToFirestore(token);
      lastUpdated = Date.now();
    }

    // Refresh if token is older than 45 days (limit is 60)
    const fortyFiveDays = 45 * 24 * 60 * 60 * 1000;
    if (token && (Date.now() - lastUpdated > fortyFiveDays)) {
      console.log("Instagram token is older than 45 days. Refreshing...");
      const newToken = await refreshInstagramAccessToken(token);
      if (newToken) return newToken;
    }

    return token;
  } catch (error) {
    console.error("Error in getValidInstagramToken:", error);
    return process.env.INSTAGRAM_ACCESS_TOKEN; // Fallback to env
  }
}

/**
 * Token refresh karne ka core logic
 */
export async function refreshInstagramAccessToken(currentToken: string) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`,
      { cache: "no-store" }
    );
    const data = await response.json();

    if (data.access_token) {
      console.log("Instagram token refreshed successfully!");
      await saveTokenToFirestore(data.access_token);
      return data.access_token;
    } else {
      console.error("Failed to refresh token. API response:", data);
      return null;
    }
  } catch (error) {
    console.error("Error during Instagram token refresh:", error);
    return null;
  }
}

async function saveTokenToFirestore(token: string) {
  const docRef = doc(db, INSTAGRAM_CONFIG_PATH);
  await setDoc(docRef, {
    token: token,
    updatedAt: Timestamp.now(),
  }, { merge: true });
}
