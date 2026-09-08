/**
 * Mints a short-lived Voice Agent session token.
 *
 * The API key lives only here, in the Cloudflare environment. The browser
 * receives a token that is single-use and expires in minutes, so nothing
 * long-lived is ever shipped to the client.
 *
 * Set the secret once:  Cloudflare Pages > Settings > Variables > ASSEMBLYAI_API_KEY
 */

export async function onRequestGet({ env }) {
  const key = env.ASSEMBLYAI_API_KEY;

  if (!key) {
    return json({ error: "ASSEMBLYAI_API_KEY is not set on this deployment." }, 500);
  }

  const url = new URL("https://agents.assemblyai.com/v1/token");
  url.searchParams.set("expires_in_seconds", "300");        // redemption window, 1-600
  url.searchParams.set("max_session_duration_seconds", "600"); // cap a demo session at 10 min

  let upstream;
  try {
    upstream = await fetch(url, {
      // The Voice Agent API is the one AssemblyAI product that wants "Bearer".
      headers: { Authorization: `Bearer ${key}` },
    });
  } catch (e) {
    return json({ error: `Could not reach AssemblyAI: ${e.message}` }, 502);
  }

  if (!upstream.ok) {
    const body = await upstream.text();
    return json({ error: `AssemblyAI returned ${upstream.status}`, detail: body.slice(0, 400) }, 502);
  }

  const data = await upstream.json();
  if (!data.token) {
    return json({ error: "AssemblyAI returned no token." }, 502);
  }

  return json({ token: data.token });
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
}
