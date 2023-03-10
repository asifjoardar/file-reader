module.exports = {
  logHandler: (requestProperties, statusCode, msg) => {
    let time = new Date().toDateString();
    let logMessage =
      time +
      "\t\t" +
      requestProperties.method +
      "\t\t" +
      statusCode +
      "\t\t" +
      requestProperties.parseUrl.pathname +
      "\t\t" +
      msg;
    ("\n");
    fs.appendFile("log.txt", logMessage);
  },
};
