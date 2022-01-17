const http = require("http");
const rickFile = require("./links.json");

const startServer = (serve) => {
  const hostname = "0.0.0.0";
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  const server = http.createServer((req, res) => {
    if (typeof serve === "undefined" || !serve(req, res)) {
      res.writeHead(200);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("OK");
    }
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
};

startServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(rickFile.data));
  return true;
});
