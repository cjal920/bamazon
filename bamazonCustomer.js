var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

var numberOfProductTypes = 0;

connection.connect(function(err) {
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





