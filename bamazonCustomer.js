var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("-------------------------------------------------------------------------------");
    console.log("                              WELCOME TO BAMAZON                               ");
    console.log("                        WHERE THE SAVINGS ARE BAMAZING                         ");
    console.log("-------------------------------------------------------------------------------");
    queryProducts();
});

function queryProducts()  {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++)  {
      console.log("Item ID: " + res[i].item_id + " || Department: " + res[i].department_name + " || Product Name: " + res[i].product_name + " || Price: $" + res[i].price);
    }
    console.log("-------------------------------------------------------------------------------");
    selectProduct();  
  });
};

function selectProduct() {
  return inquirer.prompt([{
      name: "item",
      message: "What is the item ID of the product you would like to buy today?",
      type: "input",
      validate: function(value) {
          if ((isNaN(value) === false)) {
              return true;
          } else {
              console.log("\nPlease enter a valid ID.");
              return false;
          }
      }
  }, {
      name: "quantity",
      message: "And how many would you like?",
      type: "input",
      validate: function(value) {
          if (isNaN(value) === false) {
              return true;
          } else {
              console.log("\nPlease enter a valid quantity.");
              return false;
          }
      }
  }]).then(function(answer) {
      return new Promise(function(resolve, reject) {
          connection.query("SELECT * FROM products WHERE ?", { item_id: answer.item }, function(err, res) {
              if (err) reject(err);
              resolve(res);
          });
      }).then(function(result) {
          var savedData = {};
          if (parseInt(answer.quantity) <= parseInt(result[0].stock_quantity)) {
              savedData.answer = answer;
              savedData.result = result;
          } else if (parseInt(answer.quantity) > parseInt(result[0].stock_quantity)) {
              console.log("Sorry! We don't have that many in stock!");
          } 
          return savedData;
      }).then(function(savedData) {
          if (savedData.answer) {
              var updatedQuantity = parseInt(savedData.result[0].stock_quantity) - parseInt(savedData.answer.quantity);
              var itemId = savedData.answer.item;
              var totalCost = parseInt(savedData.result[0].price) * parseInt(savedData.answer.quantity);
              connection.query("UPDATE products SET ? WHERE ?", [{
                  stock_quantity: updatedQuantity 
              }, {
                  item_id: itemId
              }], function(err, res) {
                  if (err) throw err;
                  console.log("Your total is $" + totalCost + ". Thank you for shopping Bamazon!");
                  connection.destroy();
              });
          } else {
              selectProduct();
          }
      }).catch(function(err) {
          console.log(err);
          connection.destroy();
      });
  }).catch(function(err) {
      console.log(err);
      connection.destroy();
  });
};




