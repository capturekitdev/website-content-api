// Content API – Node.js example (Node 18+, ES module)
// Usage: CAPTUREKIT_API_KEY=your-key node content.mjs

const headers = { "x-api-key": process.env.CAPTUREKIT_API_KEY, "Content-Type": "application/json" };

const params = new URLSearchParams({
  "url": "https://github.com/seaweedfs/seaweedfs",
  "include_markdown": "true",
});
const response = await fetch(`https://api.capturekit.dev/v1/content?${params}`, { headers });
if (!response.ok) {
  console.error(`HTTP ${response.status}: ${await response.text()}`);
  process.exit(1);
}

console.log(JSON.stringify(await response.json(), null, 2));
