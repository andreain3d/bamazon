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

    connection.end();
  });
});
