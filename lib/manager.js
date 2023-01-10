
class Manager {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = this.officeNumber;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    
    getOfficeNumber() {
        return this.email;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;