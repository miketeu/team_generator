// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Intern = require("../lib/Employee");

class Intern extends Employee {
  constructor(Name, Id, Email, github) {
    super(Name, Id, Email);
    this.github = github;
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
    return "Intern";
  }
}

module.exports = Intern;
