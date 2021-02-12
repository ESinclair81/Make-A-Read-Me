const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const createMarkdown= require("./utils/createMarkdown");


/*______________________________________ THESE ARE THE INQUIRER PROMPTS FOR USER INPUT _________________________________________*/
 const formQs = [
  
    {
        type: "input",
        name: "github",
        message: "Please type your GitHub username:"

    },
    {
        type: "input",
        name: "email",
        message: "Please type the email associated with your GitHub account:"

    },
    {
        type: "input",
        name: "projectname",
        message: "What would you like to call this project?"

    },
    {
        type: "input",
        name: "description",
        message: "Now type a brief description of your project please!"

    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select what type of license you would like for this project from the choices below:",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]

    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"

    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run any tests?",
        default: "npm test"

    },
    {
        type: "input",
        name: "usage",
        message: "Is there any important info the user should know about executing this repo?",
        
    },
    {
        type: "input",
        name: "contributing",
        message: "What should the user know about contributing to this repo?",

    }
];


/*_____________________________________________ THIS FUNCTION WRITES THE MARKDOWN FILE ______________________________________________*/
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName),data);
    }


//  /*________________________________ THIS FUNCTION LOGS THE USER INPUT AND CREATES THE README ____________________________________*/   
    function init() {
        inquirer.prompt(formQs)
        .then((inquirerResponses) => {
            console.log("Thanks for Patiently Waiting While We Create Your ReadMe...");
            writeToFile("ReadMe.md", createMarkdown({...inquirerResponses}));
        })
    }

    init();