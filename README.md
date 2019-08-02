# Bamazon

A CLI application that pulls product information from a database, displays for the user, and allows the user to select an item for purchase. On purchase, inventory for an item is updated in the database accordingly.

## Technologies Used

Javascript ES6  
MySQL  
Node js  
[Inquirer Node Package](https://www.npmjs.com/package/inquirer)  
[cli-table Node Package](https://www.npmjs.com/package/cli-table)

## Features

! [application running in git bash](images/1.png)  
When the application is run, it displays the information from the database in a table formatted with the cli-table node package and prompts user for an item selection.  
! [application accepting user input and outputting total purchase cost](images/2.png)  
When the user enters the item and quantity they'd like to purchase, the application calculates and displays their total.  
! [When run again, the inventory quantity is updated](images/3.png)  
The application updates the inventory quantity for the item in the database. When the application is run again, the updated quantity is retrieved.

## Credits

Code by Andrea Nicholson
