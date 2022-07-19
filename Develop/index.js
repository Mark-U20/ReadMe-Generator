// TODO: Include packages needed for this application
import inquirer from 'inquirer';
// inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))
import fuzzy from 'inquirer-fuzzy-path';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';
inquirer.registerPrompt('fuzzypath', fuzzy);

let chosenDirectory = process.cwd();
chosenDirectory = chosenDirectory.replace(/\\/g, "/");
console.log(chosenDirectory);
// TODO: Create an array of questions for user input
const questions = [{
    type: 'fuzzypath',
    name: 'path',
    message: 'Where would you like to save the README file?',
    rootPath: chosenDirectory,
    excludePath: nodePath => nodePath.startsWith('\node_modules'),
    excludeFilter: nodePath => nodePath == '.',
    // excludePath: "node_modules",
    itemType: "directory",
    suggestAppend: true,
    suggestPrepend: true,
    suggestCurrent: true,
    suggestHome: false,
    suggestParent: true,
    suggestFiles: false,
    suggestDirectories: true,
    suggestRelativePath: true,
    depthLimit: 1,
    suggestOnly: true,
    validate: function (value) {
        if (value.length) {
            return true;
        }
        return 'Please enter a path';
    }
},
{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    default: "README",
},
{
    type: "input",
    name: "description",
    message: "Please describe your project"
},
{
    type: "input",
    name: "tableOfContents",
    message: "Please list the table of contents(optional y/n)"
},
{
    type: "editor",
    name: "installation",
    message: "What are the steps required to install your project?"
},
{
    type: "editor",
    name: "usage",
    message: "Please describe how to use your project"
},
{
    type: "editor",
    name: "credits",
    message: "Please include credits to your project"
},
{
    type: "list",
    name: "license",
    message: "Please include license information",
    choices: ["MIT", "APACHE", "GPL", "BSD", "None"],
    default: "None"
},
{
    type: "input",
    name: "badges",
    message: "Please include badges for your project"
},
{
    type: "input",
    name: "features",
    message: "Please include features for your project"
},
{
    type: "input",
    name: "contributing",
    message: "Please include how to contribute to your project"

},
{
    type: "input",
    name: "tests",
    message: "Please include tests for your project"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            console.log("Error writing file ", err);
            throw err;
        }
        console.log("Success!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        let path = answers.path + "/" + answers.title + ".md";
        writeToFile(path, answers);
    });
}

// Function call to initialize app
init();
