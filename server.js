var express = require('express');
var path = require('path');
app = express();
app.use('/static', express.static(__dirname + '/static'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);