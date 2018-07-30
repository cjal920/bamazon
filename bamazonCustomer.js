var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showProducts();
});

// Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.

function showProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
  });
}

// The app should then prompt users with two messages.


// The first should ask them the ID of the product they would like to buy.


function selectProduct()  {
    inquirer    
        .prompt({
            name: "",
            type: "",
            message: "",
            
        })

}


// The second message should ask how many units of the product they would like to buy.

function selectUnits()    {

}


  // logs the actual query being run
  // console.log(query.sql);



// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like "Insufficient quantity!", and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
