const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");



const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


async function managerPrompt(){
    let (Manager) = await inquirer
}
//await fs.writeFile(outputPath, htmlDoc)

let team = [];

startProgram()
async function startProgram(){

}


team.push(new Employee("Andrew", 1, "test@test.com"))


let htmlDoc = render(team.html)

//await fs.writeFile(outputPath, htmlDoc)
