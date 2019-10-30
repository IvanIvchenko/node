var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var cors = require('cors');
var path = require('path');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'dbexpress'
});

connection.connect();

var create = "CREATE TABLE if not exists user (id INT(4) PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), city VARCHAR(7))";

connection.query(create, function(err, results, fields) {
  if (err) {
    console.log(err.message);
  }
});

app.use(
  cors()
);
///app.use(express.static(path.join(__dirname, '../web/')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../web/index.html'));
});
///dynamic bundle.js compilation
/*
let compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true, publicPath: webpackConfig.output.publicPath, stats:    { colors: true }
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join(__dirname, '../web/')));
*/
app.post('/', urlencodedParser,function(req, res) {
  const fname = req.body.name;
  const femail = req.body.email;
  const fcity = req.body.value;
  connection.query("INSERT INTO user (name, email, city) VALUES (?,?,?)", [fname, femail, fcity], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
  console.log("Name: " + fname + " Email: " + femail + " City: " + fcity );
});

app.listen(3000);

console.log('Server is running at 127.0.0.1:3000')





