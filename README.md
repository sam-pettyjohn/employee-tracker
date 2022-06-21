![MIT](https://img.shields.io/badge/License-MIT-blue)
# Employer Tracker

## Description

A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Please use this [video](TBC) for a walkthough tutorial of the README generator.

## Table of Contents

- [Employer Tracker](#employer-tracker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Mock-Up](#mock-up)
  - [Acceptance Criteria](#acceptance-criteria)
    - [Additional Criteria](#additional-criteria)
  - [Contributing](#contributing)
  - [Built With](#built-with)
  - [Questions](#questions)
  - [License](#license)

## User Story
~~~
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
~~~

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

### Mock-Up
![image](./assets/images/mysql-mockup.png)


### Additional Criteria

**Deliverables**

- Your GitHub repository containing your application code.

**Walkthrough Video**

- A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file.
- The walkthrough video must show all of the technical acceptance criteria being met.
- The walkthrough video must demonstrate how a user would invoke the application from the command line.
- The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

**Technical Acceptance**

- Satisfies all of the preceding acceptance criteria plus the following:
- Uses the Inquirer package (Links to an external site.).
- Uses the MySQL2 package (Links to an external site.) to connect to a MySQL database.
- Uses the console.table package (Links to an external site.) to print MySQL rows to the console.
- Follows the table schema outlined in the homework instructions.

**Repository Quality**

- Repository has a unique name.
- Repository follows best practices for file structure and naming conventions.
- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- Repository contains multiple descriptive commit messages.
- Repository contains a high-quality README with description and a link to a walkthrough video.

**Application Quality**

- The application user experience is intuitive and easy to navigate.

**Bonus**

- Application allows users to update employee managers
- Application allows users to view employees by manager
- Application allows users to view employees by department
- Application allows users to delete departments, roles, and employees
- Application allows users to view the total utilized budget of a department—in other words, the combined salaries of all employees in that department

## Contributing

For any ideas or feedback, please see my contact information [below](#questions).

## Built With

- JavaScript
- node.js
    - Sequelize package
    - MySQL2 package
    - Inquirer package
    - console.table package
- markdown

## Questions

For any questions, please reach out to me through the following resources:

Name: Samuel Pettyjohn <br>
Title: Aspiring Developer <br>
Email: <sammpj47@gmail.com> <br>
GitHub: <https://github.com/sam-pettyjohn/> <br>

## License

MIT License

Copyright (c) 2022 Samuel Pettyjohn
            
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
            
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
            
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 