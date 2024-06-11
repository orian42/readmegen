// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMD = require('./utils/generateMarkdown.js');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
        {
        type: "input",
        message: "What is the title of your README?",
        name: "title"
        },
        {
        type: "list",
        message: "Under which license is your project operating?",
        name: "license",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
        },
        {
        type: "input",
        message: "Please provide a short description of your project:",
        name: "description"
        },
        {
        type: "input",
        message: "Please describe the steps required to install your project:",
        name: "installation"
        },
        {
        type: "input",
        message: "Please describe instructions how to use your project:",
        name: "usage"
        },
        {
        type: "input",
        message: "How can others contribute to your project?",
        name: "contribute"
        },
        {
        type: "input",
        message: "Please provide testing examples for your project:",
        name: "testing"
        },
        {
        type: "input",
        message: "What is your GitHub username?",
        name: "ghUsername"
        },
        {
        type: "input",
        message: "What is your email address?",
        name: "email"
        },
    ])
    .then((response) =>
        console.log(response)
    )
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
