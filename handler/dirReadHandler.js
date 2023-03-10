const { errHandler } = require("./errHandler");
const { fileListHandler } = require("./fileListHandler");
const { logHandler } = require("./logHandler");
const fs = require("fs");

module.exports = {
  dirReadHandler: (requestProperties, res) => {
    fs.readdir(requestProperties.dirName, (err, files) => {
      if (err) {
        errHandler(requestProperties, 500, "Internal Server Error");
      } else {
        let listOfFiles;
        if (!files.length) {
          listOfFiles = "there is no file or dir.";
        } else {
          listOfFiles = fileListHandler(requestProperties, files);
        }
        logHandler(requestProperties, 200, "Accessing dir.");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(listOfFiles);
      }
    });
  },
};
