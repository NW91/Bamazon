require('dotenv').config();

var mysql = require("mysql");
var inquirer = require("inquirer");

var keys = require("./keys.js")

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.secret,
    database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
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
            name: 'productID',
            type: 'input',
            message: 'What is the ID number of the item you would like to buy today?'
        },
        {
            name: 'numUnits',
            type: 'input',
            message: 'How many units of this item would you like to purchase today?'
        }

    ])
    .then(function(answer) {
        searchProducts(answer.productID, answer.numUnits);
    });
}

function searchProducts(id, quantity) {
    var query = 'SELECT * FROM products';
    connection.query(query,
        function (err, res) {
            if (err) throw err;
            var productID = parseInt(id);
            var numUnits = parseInt(quantity);
            var chosenItems;
            for (var i = 0; i < res.length; i++) {
                if (res[i].item_id === productID) {
                    chosenItems = res[i];
                }
            }
            //If there isn't enough quantity it will tell them to start over
            if (chosenItems.stock_quantity < numUnits) {
                console.log("Sorry, but we don't have enough of these in stock!")
                userPrompt();
            } else {
                submittingOrder(chosenItems, numUnits);
            }
        });
};

function submittingOrder(chosenItems, numUnits) {
    let newStock = chosenItems.stock_quantity - numUnits;
    let totalPrice = chosenItems.price * numUnits;
    var query = 'UPDATE products SET ? WHERE ?'
    connection.query(query, [{
            stock_quantity: newStock
        },
        {
            item_id: chosenItems.item_id
        }
    ], function (err) {
        if (err) throw err;
        console.log(`You bought ${numUnits} units of the ${chosenItems.product_name}.  You spent $${totalPrice}.`);
        connection.end();
    })
};