"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import {
  onAuthStateChanged,
  signInWithCredential,
  GoogleAuthProvider,
  User as FirebaseUser,
} from "firebase/auth";

export default function GoogleOneTap() {
  const [user, setUser] = useState<FirebaseUser | null | undefined>(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    // 0. Wait untill user authentication state is fetched 
    if (user === undefined) return;

    // 1. Agar user login hai, toh wapas jao
    if (user !== null) return;

    // 2. Mobile walo ko nahi dikhana
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    
    if (!clientId || clientId === "your_google_cloud_oauth_client_id_here") {
      console.warn(
        "Zaruri Notice: Google One Tap login ko kaam karne ke liye 'NEXT_PUBLIC_GOOGLE_CLIENT_ID' valid daalna zaruri hai .env.local mein!"
      );
      return; 
    }

    let timeoutId: NodeJS.Timeout;

    const initializeAndPrompt = () => {
      if (!(window as any).google?.accounts?.id) {
        console.error("Google Accounts SDK failed to load");
        return;
      }

      (window as any).google.accounts.id.initialize({
        client_id: clientId,
        callback: (response: any) => {
          const credential = GoogleAuthProvider.credential(response.credential);
          signInWithCredential(auth, credential)
            .then(() => {
              console.log("Successfully auto signed-in via Google One Tap");
            })
            .catch((error) => {
              console.error("Google One Tap Sign-In Failed:", error);
            });
        },
        cancel_on_tap_outside: false,
      });
      
      // 2 Second (2000 ms) delay website load hone ke baad prompt aane ke liye
      timeoutId = setTimeout(() => {
        (window as any).google.accounts.id.prompt((notification: any) => {
          if (notification.isNotDisplayed()) {
            console.warn("One Tap is not displayed. Reason:", notification.getNotDisplayedReason());
            console.info("Tip: Agar reason 'opt_out_or_no_session' ya 'suppressed_by_user' hai, toh aapne pehle popup close kiya hoga. Incognito mode mein check karein ya apne browser ke cookies clear karein.");
          } else if (notification.isSkippedMoment()) {
            console.log("One Tap skipped:", notification.getSkippedReason());
          } else if (notification.isDismissedMoment()) {
            console.log("One Tap dismissed:", notification.getDismissedReason());
          }
        });
      }, 2000); // 2 second delay
    };

    const scriptId = "google-gsi-client";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement;

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.id = scriptId;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        initializeAndPrompt();
      };
      
      document.body.appendChild(script);
    } else {
      // Script is already in DOM, but maybe not fully loaded (window.google missing)
      if ((window as any).google?.accounts?.id) {
        initializeAndPrompt();
      } else {
        // Wait for it to load
        existingScript.onload = () => {
          initializeAndPrompt();
        };
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [user]);

  return null;
}
