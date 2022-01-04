// the ports number
const http = require('http');
const fs = require('fs');
const port = 3000;

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    // return the webpages
    let path = "./";
    switch(req.url){
      case"/":
         path += "index.html";
         res.statusCode = 200;
         break;
      case "/about":
          path += "about.html";
          res.statusCode = 200;
          break;
      default:
          path += "404.html";
          res.statusCode = 404;
          break;

    
    }

    fs.readFile(path, (err, data) => {
      if(err) {
          console.error(err);
          res.end();
      }else {
          res.end(data);
      }
    });

});

// server running...

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));



