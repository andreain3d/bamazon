DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(5,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toaster", "Appliances", 34.99, 20),
        ("Lamp", "Lighting", 29.99, 20),
        ("Painting", "Home Decor", 79.99, 20),
        ("Fringe Rug", "Home Decor", 99.99, 20),
        ("Blender", "Appliances", 24.99, 20),
        ("String Lights", "Lighting", 12.99, 20),
        ("Glazed Planter", "Patio", 18.99, 20),
        ("Adirondack Chair", "Patio", 54.99, 20),
        ("Vase", "Home Decor", 12.99, 20),
        ("Microwave", "Appliances", 54.99, 20);