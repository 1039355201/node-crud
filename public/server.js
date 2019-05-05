const http = require('http')
const fs = require('fs')
function startServer(){
  var onRequest = function (request, response) {

    console.log('Request received'+request.url);
    if (request.url === '/' || request.url === '/home'){
      response.writeHead(200, { 'Content-Type': 'text/html' });
      // 写到一个流当中 输出到一个管道
      fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
    }
   else if (request.url === '/review'){
      response.writeHead(200, { 'Content-Type': 'application/json' });
      var myObj = {
        name: "Daisy",
        job: "IT",
        age: 24
      };
      response.end(JSON.stringify(myObj))
    }else{
      response.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
    }
  };
  var server = http.createServer(onRequest);
  server.listen(3000);
  console.log('listen localhost 3000');
}
module.exports={
  startServer,
}