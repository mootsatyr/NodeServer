var express = require('express');

var server = express();

server.use(function(req, res, next) {
    console.log('Served page: ' + req.url);
    next();
});

server.use(express.static(__dirname + '/public'));

var port = 3000;
server.listen(port, function() {
    console.log('\n Server is listening on port: ' + port + '\n');
});