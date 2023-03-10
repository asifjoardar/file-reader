const fs = require("fs");

module.exports = {
    fileReadHandler: (requestProperties, res) => {
        const fileReadStream = fs.createReadStream(requestProperties.dirName, "utf8");
        fileReadStream.pipe(res);
      }
};
