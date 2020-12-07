## README Generator

A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```

The goal of this project was to create a command-line application that dynamically generates a professional README.md from a user's input using the Inquirer package (https://www.npmjs.com/package/inquirer).  The application is invoked with the following command in the terminal: node index.js

Here is a link to a walkthrough video that demonstrates the application's functionality and the typical user flow through the application. (This includes views of the prompts and the responses after their selection.)

WHEN I am prompted for information about my application repository
I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README and a quality, professional README.md is generated

* The generated README includes the following sections and 1 badge that's specific to the repository

  * Title
    - WHEN I enter my project title THEN this is displayed as the title of the README

  * Description (what is the app for)
    - What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out?

  * Table of Contents
      - WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding  section of the README
      - (example:)
        Installation
        Usage
        Credits
        License

  * Installation (how to install it)
    - What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

  * Usage (how to use the app)
    - Provide instructions and examples for use. Include screenshots as needed.
    - Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works.

  * Credits 
    - List your collaborators, if any, with links to their GitHub profiles. 
    - If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    - If you followed tutorials, include links to those here as well.

  * License
    - This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/
    - WHEN I choose a license for my application from a list of options THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

  * Badges
    - Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by shields.io. You may not understand what they all represent now, but you will in time.

  * Contributing (how to make contributions so that other developers are more likely to use and contribute to the success of the project)