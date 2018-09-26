var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  if (req.url == '/hello'){

  fs.readFile('demofile1.html',function(err, data){
    res.writeHead(200,{'content-Type' :  'text/html'});
    res.write(JSON.stringify(data));
    res.end();
    console.log(data);
  });
  return;
}
}).listen(8000);

  
  