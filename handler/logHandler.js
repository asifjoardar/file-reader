const handler = {};

handler.logHandler = (requestProperties) => {
  let time = new Date().toDateString();
  let clientIp = requestProperties.socket.remoteAddress;
  let logMessage =
    time +
    "\t\t" +
    requestProperties.method +
    "\t\t" +
    statusCode +
    "\t\t" +
    clientIp +
    "\t\t" +
    requestProperties.url +
    "\t\t" +
    "\n";
  fs.appendFile("log.txt", logMessage);
};

module.exports = handler;

