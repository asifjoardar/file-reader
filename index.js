const http = require("http");
const { handleReq } = require("./helper/handleReq");

const app = {};

app.config = {
  port: 3000,
};

app.createServer = () => {
  var httpServer = http.createServer(app.handleReq);
  httpServer.listen(app.config.port, () => {
    console.log("Server is running at port 3000...");
  });
};

app.handleReq = handleReq;

app.createServer();
