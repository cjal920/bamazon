DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Master of the Senate", "Books", 29.95, 11);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Lawrence of Arabia", "Movies", 11.99, 17);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (11, "Taco Shells", "Food", 3.24, 202);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (100, "Ottoman", "Furniture", 449.99, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (101, "Baseball Bat", "Sports", 28.75, 74);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (110, "Easel", "Art Supplies", 35.95, 23);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (111, "Shower Curtain", "Bath", 12.99, 68);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1000, "Donkey Kong", "Video Games", 17.49, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1001, "Fancy Feast", "Pet Food", 3.24, 55);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1010, "Ab Roller", "Fitness", 11.99, 19);