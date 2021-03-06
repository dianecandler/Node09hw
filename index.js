// Homework 09 Generate Readme.md using Node.js

const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');

inquirer
	.prompt([
		{
			type: 'Input',
			name: 'gitHubUsername',
			message: 'What is your GitHub username?'
		},
		{
			type: 'Input',
			name: 'email',
			message: 'What is your email address?'
		},
		{
			type: 'Input',
			name: 'projectName',
			message: 'What is title or name of your project?'
		},
		{
			type: 'Input',
			name: 'altText',
			message: 'What is the alternate text for the screenshot?'
		},
		{
			type: 'Input',
			name: 'description',
			message: 'Provide a short description of your project'
		},

		{
			type: 'Input',
			name: 'installDep',
			message: 'What command should you use to call the dependencies?',
			default: 'npm i'
		},
		{
			type: 'Input',
			name: 'deployedRepo',
			message: 'What is the deployed app?'
		},
		{
			type: 'Input',
			name: 'miscUsage',
			message: 'What does a user need to know about the repo?'
		},
		//   license - choices should found in GitHub https://choosealicense.com
		{
			type: 'list',
			name: 'license',
			message: 'Please select a license for your project?',
			choices: [
				'MIT',
				'AGPL-3.0-or-later',
				'LGPL-3.0-or-later',
				'MPL-2.0',
				'Apache-2.0',
				'BSL-1.0',
				'MIT',
				'None'
			]
		},
		{
			type: 'test',
			name: 'Test',
			message: 'What tests are required?'
		},
		{
			type: 'question',
			name: 'Question',
			message: 'What types of questions should be expected?'
		},
		{
			type: 'contributing',
			name: 'Contributing',
			message: 'Who are the contributors?'
		}
	])
	.then(function (response) {
		axios.get(`https://api.github.com/users/${response.gitHubUsername}`).then(function (gitRes) {
			const md = `
           \r\n# ${response.projectName}
           \r\n Created by ${gitRes.data.login} | ${gitRes.data.url} | ${response.email}
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
           \r\n* [Test](#Test)
           \r\n* [Question](#Question)
           \r\n* [Contributing](#Contributing)
           \r\n* [Planned](#Planned)
           \r\n## Installation
           \r\nTo install dpendencies run this command
           \r\n\
           \r\n
		   \r\n ${response.installDep}

		   \r\nView demonstration video at the link below:
		   \r\nhttps://pro.panopto.com/Panopto/Pages/Viewer.aspx?tid=f3663b97-40a4-41a3-af3f-abe301477942

           
           
           \r\n <img src="${gitRes.data.avatar_url}" alt="avatar" style=""/>
           \r\n If you have questions, you are welcome to
           contact ${gitRes.data.name} ${response.email}.`;
			fs.writeFile('HW9ReadMe.md', md, (err) => {
				if (err) {
					console.log(err);
				}
				else {
					console.log('ReadMe.md has been created!');
				}
			});
		});
	});

// remember to use \r\n for spacing and spreading text
// email is now an input field
// Learning Assistants or BCS couldn't fix GitHub conflicts so not pushing content.
// npm install inquirer axios
// node index.js
// axios is API for backend like AJAX is for frontend
// General goal is to create file system that inquires the "api" and load to start
// npm install --global readme-boilerplate
