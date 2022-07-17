// Packages needed for this Application
const inquirer = require("inquirer");
const db = require("../../config/connection");
require("console.table");

// Arrays
const departmentArray = [];
const roleArray = [];

const employeeNameUpdateArray = [];
const employeeRoleUpdateArray = [];

// Prompts
const displayTerminal = {
    type: "list",
    name: "terminalMenu",
    message: "Select an option from the list below:",
    choices: [
        "view all departments", 
        "view all roles", 
        "view all employees", 
        "add a department", 
        "add a role", 
        "add an employee",
        "update an employee role"
    ]
};

const addDepartment = {
    type: "input",
    name: "addDepartment",
    message: "Please enter name for the new department:",
    validate: deptInput => {
        if (deptInput) {
            return true;
        } else {
            console.log("Department name must be provided.");
            return false;
        }
    }
};

const addRole = [
    // Title Input
    {
        type: "input",
        name: "title",
        message: "Please enter the title for this role:",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Title name must be provided.");
                return false;
            }
        }
    },

    // Salary Input
    {
        type: "input",
        name: "salary",
        message: "Please enter the annual salary for this role:",
        validate: salaryInput => {
            if (salaryInput) {
                return true;
            } else {
                console.log("Annual Salary must be provided.");
                return false;
            } 
        }
    },

    // Department Selection
    {
        type: "list",
        name: "department",
        choices: departmentArray,
        message: "Please select the department associated with this role:",
    }
];


const addEmployee = [
    // First Name Input
    {
        type: "input",
        name: "firstName",
        messages: "Please enter the employee\'s first name:",
        validate: firstNameInput => {
            if (firstNameInput) {
                return true;
            } else {
                console.log("The employee\'s first name must be provided.");
                return false;
            }
        }
    },

    // Last Name Input
    {
        type: "input",
        name: "lastName",
        messages: "Please enter the employee\'s last name:",
        validate: lastNameInput => {
            if (lastNameInput) {
                return true;
            } else {
                console.log("The employee\'s last name must be provided.");
                return false;
            }
        }
    },

    // Role Selection
    {
        type: "list",
        name: "roleName",
        choices: roleArray,
        message: "Please select the employee\'s role:"
    }
];

const updateRole = [

    // Select Employee (from existing Employee Array) to update their Role
    {
        type: "list",
        name: "employeeName",
        choices: employeeNameUpdateArray,
        message: "Please select which employee\'s role to update:"
    },

    // Update Employee's Role using Previously-Created Role
    {
        type: "list",
        name: "employeeRole",
        choices: employeeRoleUpdateArray,
        message: "Please select the employee\'s new role:"
    }
];

// Design CLI 
class terminal {
    constructor() {
    }

    terminalMenu() {
        console.log (`
[EMPLOYEE TRACKER]
        `)
    return inquirer
        .prompt(displayTerminal)
        .then(terminalSelect => {
            switch (terminalSelect.terminalMenu) {
                // VIEW TABLES
                case "view all departments":
                    this.viewDepartments();
                    break;
                case "view all roles":
                    this.viewRoles();
                    break;
                case "view all employees":
                    this.viewEmployees();
                    break;

                // ADD TO TABLES
                case "add a department":
                    inquirer.prompt(addDepartment).then(response => {
                        const addDepartment = response.addDepartment;
                        this.addADepartment(addDepartment);
                    });
                    break;
                case "add a role":
                    const addRoleValue = `SELECT * FROM department`;
                    db.query(addRoleValue, (err, res) => {
                        if (err) throw err;
                        res.forEach(department => {
                            let newValue = {
                                name: department.name,
                            }
                            departmentArray.push(newValue);
                        })
                    });
                    inquirer.prompt(addRole).then(response => {
                        this.addARole(response);
                    });
                    break;
                case "add an employee":
                    const addARole = `SELECT * FROM role`;
                    db.query(addARole, (err, res) => {
                        if (err) throw err;
                        res.forEach(role => {
                            let newValue = {
                                name: role.title,
                            }
                            roleArray.push(newValue);
                        })
                    });
                    inquirer.prompt(addEmployee).then(response => {
                        this.addAnEmployee(response);
                    });
                    break;
                case "update an employee role":
                    const updateEmp = `SELECT * FROM employee`;
                    const updateR = `SELECT * FROM role`;

                    db.query(updateEmp, (err, res) => {
                        if (err) throw err;
                        res.forEach(employee => {
                            let newValue = {
                                name: employee.id,
                            }
                            employeeNameUpdateArray.push(newValue);
                        })
                    });

                    db.query(updateR, (err, res) => {
                        if (err) throw err;
                        res.forEach(role => {
                            let newValue = {
                                name: role.id,
                            }
                            employeeRoleUpdateArray.push(newValue);
                        })
                    });

                    inquirer.prompt(updateRole).then(response => {
                        this.updatedEmployee(response);
                    });
                    break;
            }
        });
    }

    viewDepartments() {
        const SQL = `
        SELECT * FROM department
        `;
        return db.query(SQL, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            this.terminalMenu();
        });
    }
    viewRoles() {
        const SQL = `
        SELECT role.*, department.name
        AS department_name
        FROM role
        LEFT JOIN department
        ON role.department_name = department.name
        `;
        return db.query(SQL, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            this.terminalMenu();
        });
    }
    viewEmployees() {
        const SQL = `
        SELECT * FROM employee
        `;
        return db.query(SQL, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            this.terminalMenu();
        });
    }
    addADepartment(department_name) {
        const SQL = `
            INSERT INTO department (name)
            VALUES
                ("${department_name}");
        `;
        return db.query(SQL, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            this.terminalMenu();
        });
    }
    addARole(dbRoleValue) {
        const {title, salary, department} = dbRoleValue;
        const SQL = `
            INSERT INTO role (title, salary, department_name)
            VALUES
                ("${title}", "${salary}", "${department}");
        `;
        return db.query(SQL, (err) => {
            if (err) throw err;
            console.log("Role has been added to the Employee Tracker.");
            this.terminalMenu();
        });
    }
    addAnEmployee(dbEmployeeValue) {
        const {firstName, lastName, roleName} = dbEmployeeValue;
        const SQL = `
            INSERT INTO employee (first_name, last_name, role_name)
            VALUES
                ("${firstName}", "${lastName}", "${roleName}");
        `;
        return db.query(SQL, (err) => {
            if (err) throw err;
            console.log("Employee has been added to the Employee Tracker.");
            this.terminalMenu();
        });
    }

    updatedEmployee(dbUpdateEmployee) {
        const {updateRole, employeeID} = dbUpdateEmployee
        const SQL = `
            UPDATE employee
            SET role_name = "${updateRole}"
            WHERE employeeID = "${employeeID}";
        `;

        return db.query(SQL, (err) => {
            if (err) throw err;
            console.log("Employee has been added to the Employee Tracker.");
            this.terminalMenu();
        });
    }

};

module.exports = terminal;