-- Add this to your MySQL database to create the admin table

USE nayepankh_foundation;

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

INSERT INTO admins (username, password)
VALUES ('admin', 'admin123');

-- You can now login with:
-- Username: admin
-- Password: admin123
