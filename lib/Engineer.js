// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Engineer = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
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
    return "Engineer";
  }
}

module.exports = Engineer;
