## README Generator

The goal of this project was to reate a command-line application that dynamically generates a professional README.md from a user's input using the Inquirer package (https://www.npmjs.com/package/inquirer).  The application is invoked with the following command in the terminal: node index.js

Here is a link to a walkthrough video that demonstrates the application's functionality and the typical user flow through the application. (This includes views of the prompts and the responses after their selection.)

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works.


* The generated README includes the following sections and 1 badge that's specific to the repository

WHEN I am prompted for information about my application repository
I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README and a quality, professional README.md is generated


  * Title
    - WHEN I enter my project title THEN this is displayed as the title of the README

  * Description (what is the app for)

  * Table of Contents
      - WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding  section of the README

  * Installation (how to install it)

  * Usage (how to use the app)

  * License
    - WHEN I choose a license for my application from a list of options THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

  * Contributing (how to make contributions so that other developers are more likely to use and contribute to the success of the project)

  * Tests

  * Questions
    - WHEN I enter my email address THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    - WHEN I enter my GitHub username THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  (how to report issues)
