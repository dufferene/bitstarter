var express = require('express');
var app = express.createServer(express.logger());
// var fileTextBuf = new Buffer(8);
// fileTextBuf = fs.readFileSync('index.html');
// var fileText= buf.toString();
app.get('/', function(request, response) {
var fs = require('fs');
var buffer = new Buffer(256);
response.send(buffer.toString('fs.readFileSync("index.html"),'utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
