// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Intern = require("./Employee");

class Intern extends Employee {
  constructor(Name, Id, Email, github) {
    super(Name, Id, Email);
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
    return "Intern";
  }
}

module.exports = Intern;
