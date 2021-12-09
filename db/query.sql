
SELECT department_id
FROM employeerole
INNER JOIN department 
ON employeerole.department_id = department.id;