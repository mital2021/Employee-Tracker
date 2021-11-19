
DROP TABLE IF EXISTS employeenameid;
DROP TABLE IF EXISTS employeerole;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
  
);


CREATE TABLE employeerole (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary decimal NOT NULL,
  department_id INTEGER,
    CONSTRAINT mvDepartment FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
  
);

CREATE TABLE employeenameid(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,  
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    CONSTRAINT mvRole FOREIGN KEY (role_id) REFERENCES employeerole (department_id),
    manager_id INTEGER, 
     CONSTRAINT mvManager FOREIGN KEY (manager_id) REFERENCES employeenameid(id) ON DELETE SET NULL
);  





