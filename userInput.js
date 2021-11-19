const inquirer= require('inquirer');
const cTable = require('console.table');
const db = require('../../db/connection');


const userInput = () => {
    return inquirer.prompt([
        
      {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['View all department', 'View all roles','View all employees','Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
      }
    

    ]).then(res => {
        let select = res.select;
        // Call the appropriate function depending on what the user chose
        switch (select) {
          case 'View all department':
            View_all_department();
            break;
          case 'View all roles':
            View_all_roles();
            break;
          case 'View all employees':
            'View_all_employees'();
            break;
          case 'Add a department':
            Add_a_department();
            break;
          case 'Add a role':
            Add_a_role();
            break;
          case 'Add an employee':
            Add_an_employee();
            break;
          case 'Update an employee role':
            Update_an_employee_role();
            break;
         
          default:
            console.log(select);
        }
      }
      )
    }


 

module.exports= userInput;

