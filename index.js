// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer  = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's name?",
        name: "title",
    },
    {
        type: "input",
        message: "Write a short description for your project",
        name: 'description',
    }
    //project description, deployed link, github username, email,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log('Success')
                )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
            .then((data) =>{
                console.log ('questions asked');
                const myReadme = generateMarkdown(data);
                writeToFile('newreadme.md', myReadme);
            });
}

// Function call to initialize app
init();
