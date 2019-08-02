# Bamazon

A CLI application that pulls product information from a database, displays for the user, and allows the user to select an item for purchase. On purchase, inventory for an item is updated in the database accordingly.

## Technologies Used

Javascript ES6  
MySQL  
Node js  
[Inquirer Node Package](https://www.npmjs.com/package/inquirer)  
[cli-table Node Package](https://www.npmjs.com/package/cli-table)

## Features

! [application running in git bash](https://github.com/andreain3d/bamazon/blob/master/images/1.PNG?raw=true)  
When the application is run, it displays the information from the database in a table formatted with the cli-table node package and prompts user for an item selection.  
! [application accepting user input and outputting total purchase cost](https://github.com/andreain3d/bamazon/blob/master/images/2.PNG?raw=true)  
When the user enters the item and quantity they'd like to purchase, the application calculates and displays their total.  
! [When run again, the inventory quantity is updated](https://github.com/andreain3d/bamazon/blob/master/images/3.PNG?raw=true)  
The application updates the inventory quantity for the item in the database. When the application is run again, the updated quantity is retrieved.

## Credits

Code by Andrea Nicholson
