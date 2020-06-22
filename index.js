const questions = [];

function writeToFile (fileName, data) {}

function init () {}

init();

// axios is API for backend like AJAX is for frontend
// create file system that inquires the "api" to start
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

require
   .prompt([{
         type: "Input",
         name: "gitHubUsername",
         message: "What is your GitHub username?"
      },
      {
         type: "Input",
         name: "projectName",
         message: "What is your project name?"
      },
,then(function (response){
    axios
        .get(`https://api.github.com/users/)
    
})

// not sure how to call axios but thinking .get and .then and request response.  Need to read up.
// remember to use \r\n for spacing and spreading responses