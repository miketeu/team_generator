// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Manager = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, github, officeNumber) {
    super(name, id, email);
    this.github = github;
  }

  getName() {
    return this.Name;
  }
  getId() {
    return this.Id;
  }
  getEmail() {
    return this.Email;
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
