// Local / Render runner. On Vercel, api/chat.js and public/ are used directly.
const http = require("http"), fs = require("fs"), path = require("path");
const chat = require("./api/chat");
http.createServer((req, res) => {
  res.status = c => (res.statusCode = c, res);
  res.json = o => (res.setHeader("content-type", "application/json"), res.end(JSON.stringify(o)));
  if (req.url === "/api/chat") {
    let b = ""; req.on("data", c => b += c);
    req.on("end", () => { try { req.body = JSON.parse(b); } catch { req.body = {}; }
      chat(req, res).catch(e => res.status(500).json({ error: e.message })); });
    return;
  }
  res.setHeader("content-type", "text/html; charset=utf-8");
  fs.createReadStream(path.join(__dirname, "public/index.html")).pipe(res);
}).listen(process.env.PORT || 3000, () => console.log("Mini Claude on :" + (process.env.PORT || 3000)));
