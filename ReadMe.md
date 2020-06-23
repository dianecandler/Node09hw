## Homework 09 - Node.js generated README.md


# Created by Diane Candler | dianedcandler@gmail.com

## Video Screenshot

https://github.com/dianecandler/Node09hw and https://dianecandler.github.io/Node09hw/

## Load program

  At the Terminal:  node index.js

## View Results in Filename:  

  HW9ReadMe.md

## Background

This is my first Node.js project.  The goal was to create an application to generate a README.md file.

## Specifics

* Usage 
any program or application needing a README.md
* License Agreement
none required, public file
* Lessons Learned
  * Numerous GitHub challenges likely contributed to the fact that files were stored in the main github directory.  Experiences numerous days of dead-lock so few commits prior to completion.  This added complexity as it was impossible to view results as the user would until files were pushed to GitHub.
  * Node.js leverages JavaScript and has a number of modules which are not needed on the GitHub repo as they are publicly available.
  * Success programmers will know exactly how the code responds which is absolutely critical with Node.js.  For example, using inquirer versus require may throw your entire program off.
  * npm install --global readme-boilerplate
  * npm install inquirer axios
  * General goal is to create (1) file system that (2) inquires the "api" and load to start or (3) require axios.
  * axios is an API for backend like AJAX is for the frontend

# Assignment
* Source:  The University of Texas at Austin Full Stack Coding Program

* Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

```
node index.js
```

The user will be prompted for their GitHub username and other information pertaining to the project the README is for.


```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
```

## Business Context

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

## Minimum Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The generated README includes the following sections: 
  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

* The generated README includes 1 badge that's specific to the repository.

```
GIVEN the developer has a GitHub profile and a repository

WHEN prompted for the developer's GitHub username and repo specific information

THEN a README for the repo is generated
```
- - -

## Submission on BCS

You are required to submit the following:

* A video demonstrating the entirety of the app's functionality 

* A generated README.md file for a project repo.

* The URL of the GitHub repository