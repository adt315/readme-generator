
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

    // The generated README includes the following sections:
    // Title
    // 1 badge that's specific to the repository.
    // Description
    // Table of Contents - WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README
    // Installation
    // Usage
    // License
    // Contributing
    // Tests
    // Questions


    // project title
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    // WHEN I choose a license for my application from a list of options THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // {
     

    // },
    // The generated README includes 1 badge that's specific to the repository.
    // {
    

    // },
    // description
    {
      type: "input",
      name: "description",
      message: "Please type a brief description of your project."
    },
    // installation instructions
    {
      type: "input",
      name: "installation",
      message: "Please type instructions for how to install your project."
    },
    // usage information
    {
      type: "input",
      name: "usage",
      message: "Please type usage information about your project."
    },
    // contribution guidelines
    {
      type: "input",
      name: "contribution",
      message: "What are the guidelines for contribution to this project?"
    },
    // test instructions
    {
      type: "input",
      name: "test",
      message: "Please type instructions for how to test your project."
    },
    // WHEN I enter my GitHub username THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?"
    },
  // WHEN I enter my email address THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  ]);
}

function generateHTML(answers) {
  return `

    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <span class="badge badge-secondary">Contact Me</span></h3>
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
  