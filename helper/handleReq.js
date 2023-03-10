const { dirReadHandler } = require("../handler/dirReadHandler");
const { fileReadHandler } = require("../handler/fileReadHandler");
const { errHandler } = require("../handler/errHandler");
const url = require("url");
const fs = require("fs");

module.exports = {
  handleReq: (req, res) => {
    const host = req.headers.host;
    const parseUrl = url.parse(req.url);
    const method = req.method;
    let dirName = __dirname.split("/");
    dirName =
      dirName.slice(0, dirName.length - 1).join("/") +
      "/data" +
      parseUrl.pathname;

    const requestProperties = {
      host,
      parseUrl,
      method,
      dirName,
    };
    if (method === "GET") {
      fs.stat(requestProperties.dirName, (err, stats) => {
        if (err) {
          errHandler(500, "Internal server error.", res);
        } else {
          if (stats.isFile()) {
            fileReadHandler(requestProperties, res);
          } else if (stats.isDirectory()) {
            dirReadHandler(requestProperties, res);
          }
        }
      });
    } else {
      errHandler(400, method + " method is not supported.", res);
    }
  },
};
