const fs = require("fs");
module.exports = {
  logHandler: (requestProperties, statusCode, msg) => {
    const time = new Date().toDateString();
    const logMessage =
      time +
      "\t\t" +
      requestProperties.method +
      "\t\t" +
      statusCode +
      "\t\t" +
      requestProperties.parseUrl.pathname +
      "\t\t" +
      msg +
      "\n";
    fs.appendFile("log.txt", logMessage, (err) => {
      if (err) errHandler(requestProperties, 500, "Internal Server Error");
    });
  },
};
