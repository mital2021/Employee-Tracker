
DROP DATABASE IF EXISTS employee;

CREATE DATABASE employee;
USE employee;



CREATE TABLE employeenameid (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,  
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER
);  



CREATE TABLE employeerole (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary decimal (30) NOT NULL,
  department_id INTEGER

);


CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL
  
);





