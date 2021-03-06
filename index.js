// Include packages needed for this application
const fs = require('fs');
const inquirer  = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What's your project's name?",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description for your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Link to your deployed project:',
        name: 'deployedLink',
    },
    {
        type: 'input',
        message: "Describe your project's features:",
        name: 'features',
    },
    {
        type: 'confirm',
        message: 'Do you want to include a screenshot of your application?',
        name: 'screenshotconfirm',
    },
    {
        type: 'input',
        message: 'Add the relative link to your screenshot here:',
        name: 'screenshot',
        when: (data) => data.screenshotconfirm === true,
    },
    {
        type: 'input',
        message: 'Describe the installation process:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Give users instructions on how to use this project:',
        name: 'howtouse',
    },
    {
        type: 'list',
        message: 'Choose your license:',
        choices: ['MIT', 'Apache 2.0', 'Creative Commons', 'GPLv2', 'GPLv3', 'no license'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Describe the contributing guidelines for this project:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Describe how to run tests for this project:',
        name: 'tests', 
    },
    {
        type: 'input',
        message: 'Your Github user name:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Your email:',
        name: 'email',
    },
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
                const myReadme = generateMarkdown(data);
                writeToFile('GeneratedREADME.md', myReadme);
            });
}

// Function call to initialize app
init();
