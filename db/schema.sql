DROP TABLE IF EXISTS employee_nameid;
DROP TABLE IF EXISTS employee_role;
DROP TABLE IF EXISTS department;



CREATE TABLE employee_nameid(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,  
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER FOREIGN KEY,
    manager_id INTEGER FOREIGN KEY
);  



CREATE TABLE employee_role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary decimal,
  department_id INTEGER FOREIGN KEY,
  
);

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
  
);

