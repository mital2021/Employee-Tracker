INSERT INTO department (name)
values
  ('Finance'),
  ('Engineering'),
  ('Sales'),
  ('legal');

INSERT INTO employeerole (title, salary,department_id)
values
('Accounting', 50000, 1),
('Software Engineer', 80000, 2),
('Sales', 50000, 3),
('legal', 60000, 4),
('Finance', 60000, 1),
('Network Engineer', 80000, 2),
('Administrator Assistant', 50000, 3);




INSERT INTO employeenameid(id, first_name, last_name, role_id, manager_id)
values
  (1, 'Mital', 'Goghari', 1, null),
  (2, 'Vikram', 'Goghari', 2, 1),
  (3, 'John', 'Doe', 3, 2),
  (4, 'Harshal', 'Goghari', 4, 2 ),
  (5, 'Tom', 'Aleen', 2, 3),
  (6, 'Vihaan','Goghari', 1, 4),
  (7, 'Tameer','Gala', 3, 4),
  (8, 'kevin','Tupik', 1, 5),
  (9, 'Mike','Chan', 2, 4),
  (10, 'Ashley','Rodriguez',3, 5);

