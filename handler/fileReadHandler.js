const fs = require("fs");

module.exports = {
    fileReadHandler: (requestProperties, res) => {
        logHandler(requestProperties, 200, "reading file.");
        const fileReadStream = fs.createReadStream(requestProperties.dirName, "utf8");
        fileReadStream.pipe(res);
      }
};
