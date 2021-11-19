
DROP TABLE IF EXISTS employeeNameid;
DROP TABLE IF EXISTS employeeRole;
DROP TABLE IF EXISTS department;





CREATE TABLE employeeNameid(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,  
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER FOREIGN KEY,
    manager_id INTEGER, 
     CONSTRAINT mvManager FOREIGN KEY (manager_id) REFERENCES employeeNameid(id) ON DELETE SET NULL
);  



CREATE TABLE employeeRole (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary decimal NOT NULL,
  department_id INTEGER,
    CONSTRAINT mvDepartment FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
  
);

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
  
);

