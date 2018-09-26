var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    if (req.url == '/') {
        fs.readFile('./demofile1.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
        return;
    }
  

    if (req.url == '/hello') {
        fs.readFile('demoscript.js', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            });
            res.write(data);
            res.end();
        });

        return;
    }
}).listen(8000);