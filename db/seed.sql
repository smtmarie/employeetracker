use employees;

INSERT INTO department
(name)

VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role
(title, salary, department_id)

VALUES
('Sales Lead', 65.00, 1),
('Salesperson', 55.00, 1),
('Lead Engineer', 115.00, 2),
('Software Engineer', 95.00, 2),
('Account Manager', 90.00, 3),
('Accountant', 70.00, 3),
('Legal Team Lead', 85.00, 4),
('Lawyer', 65.00, 4);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)

VALUES
('Sonia', 'Trimble', 1, NULL),
('Anthony', 'Castellano', 2, 1),
('Aisha', 'Trimble', 3, NULL),
('Massie', 'Bergeron', 4, 3),
('Felicia', 'Curvin', 5, NULL),
('Cale','McMellon', 6, 5),
('Keziah', 'Liburd', 7, NULL),
('Mitch', 'Trimble', 8, 7);