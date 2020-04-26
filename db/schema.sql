DROP DATABASE IF EXISTS employees_DB;
CREATE DATABASE employees_DB;

USE employees_DB;

CREATE TABLE department(

id INT NOT NULL,
name VARCHAR(45),
PRIMARY KEY(id)
);

CREATE TABLE role(

id INT NOT NULL,
title VARCHAR(45),
salary DECIMAL(10,2),
department_id INT NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE employee(

id INT NOT NULL,
first_name VARCHAR(45),
last_name VARCHAR(45),
role_id INT NOT NULL,
manager_id INT NOT NULL,
PRIMARY KEY(id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

