//Cloudd9 IDE to run Node.js needs
//to start server at specified host and port
HOST = "0.0.0.0";
PORT = process.env.C9_PORT;

var sys = require('sys'),
    fs = require('fs'),
    index;
    
fs.readFile('./index.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});

var http = require('http');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(index);
}).listen(PORT, HOST);

console.log('Server running at '+ HOST + ':' + PORT);