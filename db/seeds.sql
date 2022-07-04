INSERT INTO department (name)
VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal"),
("Management");

INSERT INTO role (title, salary, department_id)
VALUES
("Salesperson", "80000", "1"),
("Lead Engineer", "150000", "2"),
("Software Engineer", "120000", "2"),
("Account Manager", "160000", "3"),
("Accountant", "125000", "3"),
("Legal Team Lead", "250000", "4"),
("Lawyer", "190000", "4"),
("Manager", "120000", "5");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Mike", "Chen", "1"),
("Sam", "Pettyjohn", "3"),
("Justin", "Wisener", "4");