const { logHandler } = require("./logHandler");

module.exports = {
  errHandler: (requestProperties, statusCode, message, res) => {
    logHandler(requestProperties, statusCode, message);
    res.writeHead(statusCode, { "Content-Type": "text/text" });
    res.end(message);
  },
};
