var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var cors = require('cors');
var path = require('path');
webpack = require('webpack'),
webpackConfig = require('../webpack.config.js'),

app.use(
  cors()
);
app.use(express.static(path.join(__dirname, '../web/')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../web/index.html'));
});

let compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true, publicPath: webpackConfig.output.publicPath, stats:    { colors: true }
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join(__dirname, '../web/')));

app.post('/', urlencodedParser,function(req, res) {
  const fname = req.body.name;
  const femail = req.body.email;
  const fcity = req.body.value;
  console.log("Name: " + fname + " Email: " + femail + " City: " + fcity );
});

app.listen(3000);

console.log('Server is running at 127.0.0.1:3000')



