import { NextResponse } from "next/server";

// This route runs on the server so the GoHighLevel token is never exposed to
// the browser. It receives a sample-chapter request from the Book page, then
// creates/updates the contact in GoHighLevel so that tag-based and "contact
// created" workflows (e.g. emailing the memoir excerpt) can fire automatically.
export const dynamic = "force-dynamic";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";
const SAMPLE_CHAPTER_TAG = "memoir-sample-chapter";

interface SampleChapterRequest {
  name?: string;
  email?: string;
  phone?: string;
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts.shift() ?? "";
  return { firstName, lastName: parts.join(" ") };
}

export async function POST(request: Request) {
  let body: SampleChapterRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    // Surface a clear, non-sensitive message so the integration is easy to
    // finish configuring in the Netlify dashboard.
    console.error(
      "GoHighLevel is not configured: set GHL_API_KEY and GHL_LOCATION_ID environment variables.",
    );
    return NextResponse.json(
      { error: "The request service is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const { firstName, lastName } = splitName(name);

  // Upsert avoids duplicate-contact errors when the same person requests twice
  // and still triggers create/update workflows in GoHighLevel.
  const payload = {
    locationId,
    firstName,
    lastName,
    name,
    email,
    ...(phone ? { phone } : {}),
    source: "Memoir Sample Chapter Request",
    tags: [SAMPLE_CHAPTER_TAG],
  };

  try {
    const ghlResponse = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: GHL_API_VERSION,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!ghlResponse.ok) {
      const detail = await ghlResponse.text();
      console.error(
        `GoHighLevel contact upsert failed (${ghlResponse.status}): ${detail}`,
      );
      return NextResponse.json(
        { error: "We could not submit your request. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("GoHighLevel request error:", error);
    return NextResponse.json(
      { error: "We could not submit your request. Please try again." },
      { status: 502 },
    );
  }
}
