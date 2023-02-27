// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Manager = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, github, officeNumber) {
    super(name, id, email);
    this.github = github;
    this.officeNumber
    
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
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
