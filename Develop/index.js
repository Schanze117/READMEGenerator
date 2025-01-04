// TODO: Include packages needed for this application
import inquirer from 'inquirer'

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is your GITHUB username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'languages',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSO 3', 'None'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
    },
    {
        type: 'input',
        message: 'What command should be run to perform tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about the repo?',
        name: 'repoInfo',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributions',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
