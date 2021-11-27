const express = require("express");
const app = express();
//const dotenv = require('dotenv').config();

//Initializing Server/Port Listenings
//app.listen(port, hostname, () => {
//console.log(`Server running at http://${hostname}:${port}/`);
//});

const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require('../app/routes');
//const mongoose = require('./database.js');

app.set('clientPath', path.join(__dirname, '../../', 'client'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);
module.exports = app;