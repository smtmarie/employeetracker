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

    findAllPossibleManagers(employeeId) {

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

    updateEmployeeManager(employeeId, managerId) {

        return this.connection.query(
            "UPDATE employee SET manager_id = ? WHERE id = ?",
            [managerId, employeeId]
        );
    }

    // Find roles and joins with departments to display dept name

    findAllRoles() {

        return this.connection.query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }

    // Create New Role

    createRole(role) {

        return this.connection.query("INSERT INTO role SET ?", role);
    }

    // Remove role from DB

    removeRole(roleId) {

        return this.connection.query("DELETE FROM role WHERE id = ?", roleId);
    }

    // Find depts, join employees and roles and sum up budget

    findAllDepartments() {

        return this.connection.query(

            "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;"
        );

    }

    // Create new department

    createDepartment(department) {

        return this.connection.query("INSERT INTO department SET ? ", department);

    }

    // Remove department

    removeDepartment(departmentId) {

        return this.connection.query(

            "DELETE FROM department WHERE id = ?",

            departmentId
        
        );

    }

    // Find employees in each department with roles to display titles

    findAllEmployeesByDepartment(departmentId) {

        return this.connection.query(

            "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
        );
    }

    // Find employess by manager, joining with departments and rolls to show titles and dept names

    findAllEmployeesByManager(managerId) {

        return this.connection.query(

            "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHER manager_id = ?;",

            managerId
        );
    }

}

module.exports = new DB(connection);












