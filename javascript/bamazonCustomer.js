require('dotenv').config();

var mysql = require("mysql");
var inquirer = require("inquirer");

var keys = require("./keys.js")

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: keys.secret,
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    Start();
})