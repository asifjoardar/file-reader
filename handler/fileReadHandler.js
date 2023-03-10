const fs = require("fs");
const { logHandler } = require("./logHandler");

module.exports = {
  fileReadHandler: (requestProperties, res) => {
    logHandler(requestProperties, 200, "reading file.");
    fs.access(requestProperties.dirName, fs.constants.R_OK, (err) => {
      if (err) {
        errHandler(requestProperties, 500, "Internal Server Error");
      } else {
        const fileReadStream = fs.createReadStream(
          requestProperties.dirName,
          "utf8"
        );
        fileReadStream.pipe(res);
      }
    });
  },
};
