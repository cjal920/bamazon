// Require NPM packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// Setup connection to SQL server
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

// Set counter for total number of products
var numberOfProductTypes = 0;

// Connect to DB
connection.connect(function(err) {
    // Throw error if it errors
    if (err) throw err;
    console.log("-------------------------------------------------------------------------------")
    console.log("Shop Bamazon! We're bamazing!")
    console.log("-------------------------------------------------------------------------------")
    queryProducts();
});

function queryProducts()  {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++)  {
      console.log("Item ID: " + res[i].item_id + " || Department: " + res[i].department_name + " || Product Name: " + res[i].product_name + " || Price: $" + res[i].price);
    }
    console.log("-------------------------------------------------------------------------------")
    selectProduct();  
  });
};





