
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function promptUser() {
  return inquirer.prompt([
    // project title
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    // WHEN I choose a license for my application from a list of options THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    {
      type: "input",
      name: "license",
      message: "license"
    },
    // The generated README includes 1 badge that's specific to the repository.
    {
      type: "input",
      name: "badge",
      message: "badge"
    },
    // description
    {
      type: "input",
      name: "description",
      message: "Please give a brief description of your project."
    },
    // table of contents
    {
      type: "input",
      name: "contents",
      message: "Please list your Table of Contents."
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
      message: "What are the usage guidelines for your project?"
    },
    // contribution guidelines
    {
      type: "input",
      name: "contribution",
      message: "Who contributed to this project? What are the guidelines for contributing to this project?"
    },
    // test instructions
    {
      type: "input",
      name: "test",
      message: "Please type instructions for how to test your project."
    },
    //QUESTIONS
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
    }
  ]);
}

promptUser()
  .then(function(data) {

    var filename = data.title.toLowerCase().split(' ').join('') + ".md";

    var markdown = 
    
    // 1 badge that's specific to the repository.
    // WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README
   
    `# ${data.title}

    ## Badge
    ${data.badge}

    ## Description
    ${data.description}

    ## Table of Contents
    ${data.contents}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}
 
    ## Contributing
    ${data.contribution}
 
    ## Tests
    ${data.test}
 
    ## Questions
    ${data.GitHub}
 
    ${data.email}`;

    fs.writeFile(filename, markdown, function(err){
      if (err) {
        return console.log(err);
      }
      console.log("README is created");
    })
  });
  