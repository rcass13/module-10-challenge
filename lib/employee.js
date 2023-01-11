// Create Employee Class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }

    findName() {
        return this.name;
    }
    findId() {
        return this.id;
    }
    findEmail() {
        return this.email;
    }
    findRole() {
        return this.title;
    }
}


module.exports = Employee;