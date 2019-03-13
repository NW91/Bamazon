DROP DATABASE IF EXISTS bamazonDB;
CREATE bamazonDB
USE bamazonDB
CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT (100) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose QC headphones", "Electronics", "500.00", "111"), 
("Macbook Pro Laptop", "Electronics", "1000.55", "200"), 
("Kitchenaid Mixer", "Home", "579.99", "16"), 
("Cannon Camera", "Electronics", "247.15", "247"),
("Northface Raincoat", "Apparel", "99.55", "88"),
("Sharpie", "Home", "14.50", "34"),
("Curtains", "Home", "75.35", "5"),
("1 lb Coffee", "Produce", "5.25", "124"),
("Light Bulb", "Home", "1.99", "60"),
("Mugs", "Home", "4.47", "221"),
("DVD", "Music", "14.95", "300");