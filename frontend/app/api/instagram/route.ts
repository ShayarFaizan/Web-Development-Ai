import { NextResponse } from "next/server";
import { getValidInstagramToken } from "@/lib/instagram";

const CACHE_DURATION = 3600; // 1 ghanta (seconds)

export async function GET() {
  const token = await getValidInstagramToken();

  if (!token) {
    // Fail gracefully with empty data instead of 401 to prevent console/UI crash
    return NextResponse.json({ 
      data: [],
      profile: { username: "by_coder_baba", profile_picture_url: null },
      error: "No token" 
    }, { status: 200 });
  }

  try {
    // Parallel fetch: media posts + profile info (with profile picture)
    const [mediaRes, profileRes] = await Promise.all([
      fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=12&access_token=${token}`,
        { next: { revalidate: CACHE_DURATION } },
      ),
      fetch(
        `https://graph.instagram.com/me?fields=id,username,profile_picture_url&access_token=${token}`,
        { next: { revalidate: CACHE_DURATION } },
      ),
    ]);

    if (!mediaRes.ok) {
      const errorData = await mediaRes.json();
      return NextResponse.json(
        { error: "Instagram API error", details: errorData },
        { status: mediaRes.status },
      );
    }

    const mediaData = await mediaRes.json();
    const profileData = profileRes.ok ? await profileRes.json() : {};

    return NextResponse.json(
      {
        data: mediaData.data,
        profile: {
          username: profileData.username ?? "by_coder_baba",
          profile_picture_url: profileData.profile_picture_url ?? null,
        },
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${CACHE_DURATION}`,
        },
      },
    );
  } catch (err) {
    console.error("Instagram fetch error:", err);
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}
