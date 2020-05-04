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
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

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