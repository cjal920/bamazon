DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INT(100) NOT NULL,
    item_id VARCHAR(100) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    stock_quantity INTEGER(100) default 0,
    PRIMARY KEY (id) 
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Master of the Senate", "Books", "29.95", "11");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lawrence of Arabia", "Movies", "14.99", "17");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Taco Shells", "Food", "2.49", "202");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ottoman", "Furniture", "450.99", "12");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baseball Bat", "Sports", "28.65", "74");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Easel", "Art Supplies", "36.50", "23");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shower Curtain", "Bath", "11.95", "68");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Donkey Kong", "Video Games", "17.49", "25");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fancy Feast", "Pet Food", "3.99", "55");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ab Roller", "Fitness", "11.50", "19");


