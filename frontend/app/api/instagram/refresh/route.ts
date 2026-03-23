import { NextResponse } from "next/server";
import { getValidInstagramToken, refreshInstagramAccessToken } from "@/lib/instagram";

export async function GET() {
  const currentToken = await getValidInstagramToken();
  
  if (!currentToken) {
    return NextResponse.json({ error: "No token found to refresh" }, { status: 400 });
  }

  const newToken = await refreshInstagramAccessToken(currentToken);
  
  if (newToken) {
    return NextResponse.json({ success: true, message: "Instagram token refreshed and saved to Firestore" });
  } else {
    return NextResponse.json({ success: false, message: "Token refresh failed" }, { status: 500 });
  }
}
