DROP DATABASE IF EXISTS purchases;

CREATE DATABASE purchases;

USE purchases;

CREATE TABLE category (

    id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(25) NOT NULL

);


CREATE TABLE store (

    id INT PRIMARY KEY AUTO_INCREMENT,
    store_name VARCHAR(50) NOT NULL

);


CREATE TABLE products (

    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    serial_number VARCHAR(20) NOT NULL,
    price DECIMAL(10,2) NOT NULL

);


CREATE TABLE transactions (

    id INT PRIMARY KEY AUTO_INCREMENT,
    purchase_date DATETIME NOT NULL,
    store_id INT NOT NULL,
    product_id INT NOT NULL

);


INSERT INTO category (category_name) VALUES("Bicycles");
INSERT INTO category (category_name) VALUES("Electronics");
INSERT INTO category (category_name) VALUES("House");

INSERT INTO store (store_name) VALUES ("Apple Store");
INSERT INTO store (store_name) VALUES ("Best Buy");
INSERT INTO store (store_name) VALUES ("Target");
INSERT INTO store (store_name) VALUES ("Lowes");
INSERT INTO store (store_name) VALUES ("Amazon");


INSERT INTO products (product_name, serial_number, price) VALUES ("Apple AirPods 3", "0129196809282013", 169.99);


INSERT INTO transactions (purchase_date, store_id, product_id) VALUES (CURRENT_TIMESTAMP, 3, 1);