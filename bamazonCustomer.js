var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3307,

  user: "root",

  password: "root",
  database: "bamazon_db"
});

var purchaseItem = function() {
  inquirer
    .prompt([
      {
        name: "purchaseID",
        message: "Enter the ID of the item you'd like to purchase.",
        type: "input"
      },
      {
        name: "quantity",
        message: "How many would you like to purchase?",
        type: "input"
      }
    ])
    .then(function(answer) {
      connection.query(
        "SELECT stock_quantity FROM products WHERE ?",
        {
          item_id: answer.purchaseID
        },
        function(err, res) {
          if (err) throw err;
          console.log(res);
          if (res[0].stock_quantity >= answer.quantity) {
            console.log("enough stock for order");
          } else {
            console.log("Insufficient quantity in stock!");
          }
          connection.end();
        }
      );
    });
};

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    var productsTable = new Table({
      head: ["ID", "Name", "Department", "Price", "# Available"],
      colWidths: [10, 20, 20, 10, 15]
    });

    for (i = 0; i < res.length; i++) {
      var itemData = [];
      itemData.push(
        res[i].item_id,
        res[i].product_name,
        res[i].department_name,
        res[i].price,
        res[i].stock_quantity
      );
      productsTable.push(itemData);
    }

    console.log(productsTable.toString());

    purchaseItem();
  });
});
