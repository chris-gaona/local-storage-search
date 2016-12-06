var express = require('express');
var path = require('path');
var app = express();
var rootpath = path.normalize(__dirname + '/');

app.use(express.static(rootpath));

var port = process.env.PORT || 3000;

app.listen(port, function(err) {
  if (err) console.error(err);
  console.log('server running');
});
