var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

resolve = require('path').resolve

app.get('/', function(req, res){
    res.sendFile(resolve('../web/form.html'));
});

app.post('/', urlencodedParser,function(req, res) {
    console.log(req.body);
});

app.listen(3000);

console.log('Server is running at 127.0.0.1:3000')
