module.exports = {
  errHandler: (statusCode, message, res) => {
    res.writeHead(statusCode, { "Content-Type": "text/text" });
    res.end(message);
  },
};
