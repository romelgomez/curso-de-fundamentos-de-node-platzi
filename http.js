const http = require("http");

const router = (req, res) => {
  console.log("req.url", req.url);

  switch (req.url) {
    case "/hola":
      res.writeHead(201);
      res.write("Hello Word!");
      break;
    default:
      res.writeHead(201);
      res.write("I know this, trust me!");
      break;
  }

  res.end();
};

http.createServer(router).listen(3000);

console.log("listening in the :3000 port");
