const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');





const userInput = () => {
  return inquirer.prompt([

    {
      type: 'list',
      name: 'choices',
      message: 'What would you like to do?',
      choices: ['View all department', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }


  ])
    .then(res =>  {

      // Call the appropriate function depending on what the user chose
      switch (res.choices) {
        case 'View all department':
          department();
          break;
        case 'View all roles':
          employeerole();
          break;
        case 'View all employees':
          employeenameid();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          UpdateEmployeeRole();
          break;


      }
    });
}


const department = () => {
  const sql = `SELECT * from department;`;

  db.query(sql, (err, rows) => {
    if (err) throw err;

    console.log('\n');
    console.table(rows);

  });
}

const employeerole = () => {
  const sql = `SELECT * FROM employeerole;`;
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('\n');
    console.table(rows);
  });
}



function employeenameid () {
 const sql= `SELECT 
  employeenameid.id,
  employeenameid.first_name,
  employeenameid.last_name,
  employeerole.title,
  employeerole.salary,
  department.name,
  manager.last_name AS manager
  FROM employeenameid JOIN employeerole ON employeenameid.role_id = employeerole.id
  JOIN department ON employeerole.department_id = department.id
  LEFT JOIN employeenameid manager ON employeenameid.manager_id = manager.id`

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('\n');
    console.table(rows);
  });


}



const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'department',
      message: 'Write name of your department?'
    }

  ])
    .then(res => {

      const sql = `INSERT INTO department (name) VALUES ('${res.department}');`;
      db.query(sql, (err) => {
        if (err) throw err;

      });
    });

}



const addRole = () => {
  const sql = `SELECT * FROM department;`;
  db.query(sql, (err, rows) => {
      if (err) throw err;
      const departmentArray = [];
      
      rows.forEach(function(department){
          departmentArray.push({name: department.name, value: department.id});
      });

     return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Whats the title of this role ?'
      },

      {
        type: 'input',
        name: 'salary',
        message: 'What is the salary?'
      },
      {
        type: 'list',
        name: 'roleId',
        message: 'whats the department id of this role?',
        choices: departmentArray
      }

    ])
      .then(res => {
       
        const salary =res.salary;
        const title =res.title;
        const roleId=res.roleId;

        const sql =`INSERT INTO employeerole (title,salary,department_id)
        VALUES (' ${title}','${salary}','${roleId}');`;

        
        db.query(sql, (err, rows) => {
          if (err) throw err;


          console.log('\n');
          console.table(rows);
        });
      });
    })
  }


  const addEmployee = () => {
    const sql = `SELECT * FROM employeenameid;`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
       
        const employeeArray = [];
        rows.forEach(function (employee) {
            employeeArray.push({ name: employee.name, value: employee.id });
        });

        const managerArray = [];
        rows.forEach(function (manager) {
            managerArray.push({ name: manager.last_name, value: manager.id });
        });

        return inquirer.prompt([
          {
              type: 'input',
              name: 'first_name',
              message: 'Whats the employee first name?'
          },
          {
              type: 'input',
              name: 'last_name',
              message: 'Whats the employee last name?'
          },
          {
              type: 'list',
              name: 'role_id',
              message: 'Whats employee title?',
              choices: employeeArray
          },
          {
              type: 'list',
              name: 'manager',
              message: 'Whats the name of the manager?',
              choices: managerArray
          }
      ])

      .then(res => {


        const sql = `INSERT INTO employeenameid(first_name, last_name, role_id, manager_id)
         VALUES ('${res.first_name}', '${res.last_name}','${res.role_id}', '${res.manager}');`;
        db.query(sql, (err, rows) => {
            if (err) throw err;

            const sql = `SELECT * FROM employeenameid;`;
            db.query(sql, (err, rows) => {
                if (err) throw err;
                console.log('\n');
                console.table(rows);
            });
        });
    })
});

}






module.exports = userInput;
