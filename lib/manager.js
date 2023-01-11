const Employee = require("./Employee");

class Manger extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manger";
        
    }
    findofficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manger; 