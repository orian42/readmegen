// Dependencies for this file
const fs = require('fs');
const inquirer = require('inquirer');
const genMD = require('./utils/generateMarkdown.js');
const { default: Choices } = require('inquirer/lib/objects/choices');

// This is a list of questions that will allow the user to populate the README file
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
        // There were more licenses to choose from but I picked what appears to be the most common ones
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
    .then((response) =>  //generates the README once the user input is complete
        writeToFile("README - generated.md", genMD.generateMarkdown(response))
    )
];

// This function writes the user responses to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error("An error has occurred.", err) : console.log(`README file was successfully created!`)
    );
}

//-------------------------------------------------------------------------------------------------------------------
// TODO: Create a function to initialize app
function init() {
    //This function was in place at the beginning of the challenge; however, I did not need to use this to get my application to work.  It was NOT missed - just not used.
}

// Function call to initialize app
init();  //This was in place calling a function I am not using.
