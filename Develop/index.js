// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

function init() {
    // TODO: Create an array of questions for user input
    
        

    inquirer
        .prompt([
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
                message: 'What License should your project have?',
                name: 'license',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
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
            },
        ])
        .then((data) => {
            const README = generateMarkdown(data);

            fs.writeFile('README.md', README, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });
}

// Function call to initialize app
init();
