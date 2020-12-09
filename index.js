const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function promptUser() {
  return inquirer.prompt([
    //Prompts for user input
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "url",
      message: "What is the URL for your deployed project?"
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license.",
      choices: ["Apache", "GNU", "MIT"]
    },
    {
      type: "input",
      name: "description",
      message: "Please give a brief description of your project."
    },
    {
      type: "input",
      name: "shots",
      message: "Please provide a screenshot link."
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?"
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use your project?"
    },
    {
      type: "input",
      name: "contribution",
      message: "Who contributed to this project? What are the guidelines for contributing to this project?"
    },
    {
      type: "input",
      name: "test",
      message: "Please type instructions for how to test your project."
    },
    //Questions
    {
      type: "input",
      name: "github",
      message: "What is your GitHub address?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    }
  ]);
}

promptUser()
  .then(function(data) {
    //Create license badge based on input
    let badge = "https://img.shields.io/badge/license-MIT-green";
    if (data.license == "Apache") {
      badge = "https://img.shields.io/badge/license-Apache-blue";
    } else if (data.license == "GNU") {
      badge = "https://img.shields.io/badge/license-GNU-HSL(20%C2%B0%2C%20100%25%2C%2050%25)";
    } else {
      badge = "https://img.shields.io/badge/license-MIT-green"
    };

    const filename = "generatedREADME.md"

    var markdown = 
    
`# ${data.title}

${data.url}

## License
![badge](${badge}) 
  
## Description
${data.description}

${data.shots}
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage) 
* [Contribution](#contribution) 
* [Test](#test) 
* [Questions](#questions) 
  
## Installation
${data.installation}
  
## Usage
${data.usage}
  
## Contribution
${data.contribution}
  
## Test
${data.test}
  
## Questions
For questions please contact the project creator:
* ${data.github}
* ${data.email}
`;
  
fs.writeFile(filename, markdown, function(err){
  if (err) {
    return console.log(err);
  }
    console.log("README is created");
  })
});
