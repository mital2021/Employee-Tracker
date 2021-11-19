INSERT INTO employeeNameid(first_name, last_name, role_id, manager_id)
values
  ('Mital', 'Goghari', 1, 3),
  ('Vikram', 'Goghari', 2, null),
  ('John', 'Doe', 3, 6),
  ('Harshal', 'Goghari', 4, null ),
  ('Tom', 'Aleen', 5, 1),
  ('Vihaan','Goghari', 6, 3),
  ('Tameer','Gala', 7, null),
  ('kevin','Tupik', 8, null),
  ('Mike','Chan', 9, 1),
  ('Ashley','Rodriguez',10, null);


INSERT INTO employeeRole (title, salary,department_id)
values
('Accounting', 50000, 1),
('Software Engineer', 80000, 2),
('Sales', 50000, 3),
('legal', 60000, 4),
('Finance', 60000, 1),
('Network Engineer', 80000, 2),
('Administrator Assistant', 50000, 1);

INSERT INTO department (name)
values
  ('Finance'),
  ('Engineering'),
  ('Sales'),
  ('legal');

