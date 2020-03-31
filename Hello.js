var http = require('http');
var fs = require('fs');
var url = require('url');
const port = process.env.port || 3000

http.createServer(function (req,res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	if (filename == './') {filename = './index';}

	filename = filename + ".html";
	console.log(filename);
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'content-type': 'text/html'});
			return res.end ("404 Not found");
		}
    	res.writeHead(200, {'content-type': 'text/html'});
		res.write(data);
		return res.end();
	});

}).listen(port);

console.log("Server listening on port 8090...");




