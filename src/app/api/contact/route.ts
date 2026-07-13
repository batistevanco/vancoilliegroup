import {NextResponse} from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object") return NextResponse.json({error: "Invalid request."}, {status: 400});

  const {name, email, company, message, consent, website} = payload as Record<string, unknown>;
  if (typeof website === "string" && website) return NextResponse.json({ok: true});
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string" || consent !== "on" || !emailPattern.test(email)) {
    return NextResponse.json({error: "Invalid form fields."}, {status: 400});
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) return NextResponse.json({error: "Contact delivery is not configured."}, {status: 503});

  const upstream = await fetch(endpoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name, email, company: typeof company === "string" ? company : "", message, source: "vancoilliegroup.be"}),
    cache: "no-store",
  }).catch(() => null);

  if (!upstream?.ok) return NextResponse.json({error: "Contact delivery failed."}, {status: 502});
  return NextResponse.json({ok: true});
}
