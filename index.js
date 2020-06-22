const questions = [];

function writeToFile (fileName, data) {}

function init () {}

init();

// axios is API for backend like AJAX is for frontend
// create file system that inquires the "api" to start
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

// this should be an inquirer not require



 
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
inquirer
   .prompt([{
         type: "Input",
         name: "gitHubUsername",
         message: "What is your GitHub username?"
      },
      {
         type: "Input",
         name: "projectName",
         message: "What is title or name of your project?"
      },
      {
         type: "Input",
         name: "altText",
         message: "What is the alternate text for the screenshot?"
      },
      {
         type: "Input",
         name: "description",
         message: "Provide a short description of your project"
      },
    //   install - need to install npm?
      {
         type: "Input",
         name: "installDep",
         message: "What command should you use to call the dependencies?",
         default: "npm i"
      },
      {
         type: "Input",
         name: "deployedRepo",
         message: "What is the deployed app?"
      },
    //   need to add a table of contents
      {
         type: "Input",
         name: "miscUsage",
         message: "What does a user need to know about the repo?"
      },
    //   license - choices should found in GitHub https://choosealicense.com
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project?",
        choices: ["MIT", "AGPL-3.0-or-later", "LGPL-3.0-or-later", "MPL-2.0", "Apache-2.0", "BSL-1.0", "MIT","None"],
     },
     {
        type: "Input",
        name: "contributeRepo",
        message: "What does a user need to know about contributing to the repo?"
     },
// not sure how to call axios but thinking .get and .then and request response.  Need to read up.
// remember to use \r\n for spacing and spreading responses