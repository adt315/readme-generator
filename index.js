
// array of questions for user
const questions = [
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

/////////////START///////////////////////////

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateMarkdown = require("./util/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    // THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README

    // The generated README includes the following sections:
    // Title
    // Description
  // Table of Contents
  // Installation
  // Usage
  // License
  // Contributing
  // Tests
  // Questions

    // sections of the README entitled 
    // Description
    // Installation
    // Usage
    // Contributing
    // Tests


    // project title
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    // The generated README includes 1 badge that's specific to the repository.
    {
      type: "input",
      name: "location",
      message: "Where are you from?"
    },
    // description
    {
      type: "input",
      name: "location",
      message: "Where are you from?"
    },
    // installation instructions
    {
      type: "input",
      name: "hobby",
      message: "What is your favorite hobby?"
    },
    // usage information
    {
      type: "input",
      name: "food",
      message: "What is your favorite food?"
    },
    // contribution guidelines
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    // test instructions
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL."
    }
  ]);
}

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions


function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

////Regular Ending///////
promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });


//////BONUS Ending/////////////
async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      const html = generateHTML(answers);
  
      await writeFileAsync("index.html", html);
  
      console.log("Successfully wrote to index.html");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  