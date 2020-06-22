// Learning Assistants or BCS couldn't fix GitHub conflicts so not pushing content.

// const questions = [];
// function writeToFile (fileName, data) {}
// function init () {}
// init();

//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions
//   install - need to install npm
// axios is API for backend like AJAX is for frontend
// create file system that inquires the "api" and load to start
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

// this should be an inquirer not require
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
     .then(function (response) {
        axios
           .get(`https://api.github.com/users/${response.gitHubUsername}`)
           .then(function (gitRes) {
              const md = `
           \r\n# ${response.projectName}
           \r\n Created by ${gitRes.data.login} | ${gitRes.data.url}
           \r\n ![npm](https: //img.shields.io/npm/v/fs) ![npm](https://img.shields.io/npm/v/inquirer) ![npm](https://img.shields.io/npm/v/axios)
           \r\n
           \r\n ![${response.projectName}Screenshot](./path/to/file ${response.projectName}ScreScreenshot.PNG?raw=true "${response.altText}")
           \r\n
           \r\n
           \r\n## Description
           \r\n ${response.description}
           \r\n
           \r\n## Table of Contents
           \r\n* [Installation](#installation)
           \r\n* [Usage](#Usage)
           \r\n* [License](#License)
           \r\n* [Installation](#installation)
           \r\n*
           \r\n*
           \r\n*
           \r\n## Installation
           \r\nTo install dpendencies run this command
           \r\n\
           \r\n
           \r\n ${response.installDep}
           
           
           \r\n <img src="${gitRes.data.avatar_url}" alt="avatar" style=""/>
           \r\n If you have questions, you are welcome to
           contact${gitRes.data.name} ${gitRes.data.email}.`;
              fs.writeFile("ReadMe.md", md, (err) => {
                 if (err) {
                    console.log(err);
                 } else {
                    console.log("ReadMe.md has been created!")
                 }
              });
           });
     })

// not sure how to call axios but thinking .get and .then and request response.  Need to read up.
// remember to use \r\n for spacing and spreading text
// need to fix GitHub.  Cannot save to Node09hw so using the test branch.  