DROP DATABASE IF EXISTS bamazon_db;
CREATE bamazon_db;
USE bamazon_db;
CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    item_id,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price NUMBER (4) NOT NULL,
    stock_quantity INT (100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose QC headphones","Electronics", "500,00", "111"), ("Macbook Pro Laptop", "Electronics", "1000.55", "200"), 
