
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

// // array of questions for user
// const questions = [
// ];

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

 function generateMarkdown(data) {
  return `
   # ${data.title}

   # ${data.license}

   # ${data.badge}

   # ${data.description}

   # ${data.contents}

   # ${data.installation}

   # ${data.usage}

   # ${data.contribution}

   # ${data.test}

   # ${data.GitHub}

   # ${data.email}
`;
}

//3
promptUser()
  .then(function(data) {

    var filename = data.title.toLowerCase().split(' ').join('') + ".md";

    var markdown = 
    `# ${data.title}

    # ${data.license}
 
    # ${data.badge}
 
    # ${data.description}
 
    # ${data.contents}
 
    # ${data.installation}
 
    # ${data.usage}
 
    # ${data.contribution}
 
    # ${data.test}
 
    # ${data.GitHub}
 
    # ${data.email}`;
    fs.writeFile(filename, markdown, function(err){

      if (err) {
        return console.log(err);
      }

      console.log("README is created");

    })
  });
//     const newREADME = generateMarkdown(answers);

//     return writeFileAsync("./utils/generateMarkdown.js", newREADME);
//   })
//   .then(function() {
//     console.log("README is created");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });


// ////Regular Ending///////
//1
// promptUser()
//   .then(function(answers) {
//     const html = generateHTML(answers);

//     return writeFileAsync("index.html", html);
//   })
//   .then(function() {
//     console.log("Successfully wrote to index.html");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

//2
// promptUser()
//   .then(function(answers) {
//     const newREADME = generateMarkdown(answers);

//     return writeFileAsync("./utils/generateMarkdown.js", newREADME);
//   })
//   .then(function() {
//     console.log("README is created");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });





// // function to write README file - generateMarkdown function 
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {
//   inquirer.prompt(questions)
//   .then(answers => {
//     console.log(`Answers -` answers),
//   });
// }

// // function call to initialize program
// init();









  