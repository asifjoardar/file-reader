const fs = require("fs");

module.exports = {
  fileListHandler: (requestProperties, files) => {
    let listOfFiles = `<!doctype html>
      <html>
      <head>
        <link rel="icon" href="data:," />
      </head>
      <body>`;
    if (requestProperties.parseUrl.pathname === "/")
      requestProperties.parseUrl.pathname = "";
    files.forEach((file) => {
      listOfFiles += `<ul><a href="http://${requestProperties.host}${requestProperties.parseUrl.pathname}/${file}">${file}</a></ul>`;
    });
    listOfFiles += `</body>
      </html>`;
    return listOfFiles;
  },
};
