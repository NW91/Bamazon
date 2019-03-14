require('dotenv').config();

var mysql = require("mysql");
var inquirer = require("inquirer");

var keys = require("./keys.js")

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: keys.secret,
    database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

//shows all the inventory available to purchase to the customer 
function start() {
    var query = 'SELECT * FROM products'
    connection.query(query,
        function (err, res) {
            if (err) throw err;

            console.table(res);
            userPrompt();
        });
};

//Promp functions

function userPrompt() {
    inquirer.prompt([
        {
            name: 'id',
            type: 'input',
            message: 'What is the ID number of the item you would like to buy today?'
        },
        {
            name: 'numUnits',
            type: 'input',
            message: 'How many units of this item would you like to purchase today?'
        }

    ])
};