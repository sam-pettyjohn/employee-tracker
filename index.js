// Packages needed for this Application
const inquirer = require("inquirer");
const db = require("./config/connection");
require("console.table");

// Arrays
departmentArray = [];
roleArray = [];

employeeNameUpdateArray = [];
employeeRoleUpdateArray = [];


// Prompts
const displayTerminal = {
    type: "list",
    name: "terminal",
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
        name: "roleId",
        choices: roleArray,
        message: "Please select the employee\'s role:"
    },

    // Manager Selection (EC) 
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