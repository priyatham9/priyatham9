// Server-side only: the API key never reaches the browser.
const MODEL = process.env.MODEL || "claude-sonnet-5-5";
const SYSTEM = "You are a warm, patient helper for older adults. Use simple words, short paragraphs, and step-by-step instructions. Never use jargon without explaining it. If asked about medical, legal, or money decisions, give helpful general info and suggest checking with a trusted professional. Warn gently about possible scams. Write plain text only: no markdown, no asterisks or # symbols.";

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const { password, messages } = req.body || {};
  if (!process.env.APP_PASSWORD || password !== process.env.APP_PASSWORD)
    return res.status(401).json({ error: "Wrong password" });
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 40)
    return res.status(400).json({ error: "Bad request" });

  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1500,
      system: SYSTEM,
      messages: messages.map(m => ({ role: m.role, content: String(m.content).slice(0, 8000) })),
    }),
  });
  const data = await r.json();
  if (!r.ok) return res.status(502).json({ error: data.error?.message || "Claude error" });
  res.json({ reply: data.content.filter(b => b.type === "text").map(b => b.text).join("\n") });
};
