INSERT INTO department (name)
VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal"),
("Management");

INSERT INTO role (title, salary, department_name)
VALUES
("Salesperson", "80000", "Sales"),
("Lead Engineer", "150000", "Engineering"),
("Software Engineer", "120000", "Engineering"),
("Account Manager", "160000", "Finance"),
("Accountant", "125000", "Finance"),
("Legal Team Lead", "250000", "Legal"),
("Lawyer", "190000", "Legal");

INSERT INTO employee (first_name, last_name, role_name)
VALUES 
("Mike", "Chen", "Salesperson"),
("Sam", "Pettyjohn", "Software Engineer"),
("Justin", "Wisener", "Legal Team Lead");