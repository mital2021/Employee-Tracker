SELECT 
    employeenameid.id,
    employeenameid.first_name,
    employeenameid.last_name,
    employeerole.title,
    employeerole.salary,
    department.name
    manager.last_name AS manager
    FROM employeenameid JOIN employeerole ON employeenameid.role_id = employeerole.id
    JOIN department ON employeerole.department_id = department.id
    LEFT JOIN employeenameid manager ON employeenameid.manager_id = manager.id