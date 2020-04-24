const connection = require("./connection");

class DB {

    constructor(connection) {
        this.connection = connection;
    }

// Find employes, join with roles and depts to display roles, salaries, depts, managers

findAllEmployees() {

    return this.connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager.id;"
    );
}

// Find all employees except the given employee id

findAllPossibleMangers(employeeId) {

return this.connection.query(

    "SELECT id, first_name, last_name FROM employee WHERE id != ?",
    employeeId
);

}

// Create a new employee

createEmployee(employee) {

return this.connection.query("INSERT INTO employee SET ?", employee);

}

// Remove an employee with given id

removeEmployee(employeeId) {

return this.connection.query(

    "DELETE FROM employee WHERE id = ?",
    employeeId
);

}

// Update employee's role

updateEmployeeRole(employeeId, roleId) {

    return this.connection.query(

        "UPDATE employee SET role_id = ? WHERE id = ?",
        [roleId, employeeId]
    );

}

// Update employee's manager














}