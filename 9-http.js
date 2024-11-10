const http = require("http");

const server = http.createServer((req, res) => {
  //   res.write("Welcome to Home Page");
  //   res.end();
  if (req.url === "/") {
    res.end("Welcome to Home Page");
  } else if (req.url === "/about") {
    res.end("Welcome to About Page");
  } else {
    res.end("<h1>Oops</h1>");
  }
});

server.listen(5001);
