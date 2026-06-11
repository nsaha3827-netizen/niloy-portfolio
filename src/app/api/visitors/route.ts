import { NextResponse } from "next/server";

/**
 * Visitor Counter API Route
 *
 * For production, connect this to a persistent store:
 *   - Vercel KV (Redis): https://vercel.com/docs/storage/vercel-kv
 *   - Upstash Redis:     https://upstash.com
 *   - PlanetScale:       https://planetscale.com
 *
 * Example with Vercel KV:
 *   import { kv } from "@vercel/kv";
 *   const count = await kv.incr("portfolio:visitors");
 *   return NextResponse.json({ count });
 */

// In-memory fallback (resets on cold start — replace with KV for production)
let visitorCount = 1420;

export const runtime = "edge";

export async function GET() {
  visitorCount += 1;
  return NextResponse.json(
    { count: visitorCount },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

export async function POST() {
  return NextResponse.json({ count: visitorCount });
}
