// Modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// questions

inquirer.prompt(
    [
        {
            type: 'input',
            message: "Please enter Project title",
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Please provide a description of your project",
            name: 'description',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Please provide table of contents",
            name: 'tableOfContents',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "How do you install this project?",
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "How do you use this project?",
            name: 'usage',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Were there any other collaborators?",
            name: 'credits',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'list',
            message: "Please provide a License",
            name: 'license',
            choices: ['MIT License', 'GPL License', 'N/A'],
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Any badges you would like to place?",
            name: 'badges',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "List any features here:",
            name: 'features',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Would you like any future contributions?",
            name: 'contributions',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Please write any tests for this project",
            name: 'tests',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Please attach link to video:",
            name: 'video',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
    ]

).then(({
    title,
    description,
    tableOfContents,
    installation,
    usage,
    credits,
    license,
    badges,
    features,
    contributions,
    tests,
    video,

}) => {
    // template
    const template =`# ${title}

    * [Description](#description)
    * [Table of Contents](#tableOfContents)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Badges](#badges)
    * [Features](#features)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Video](#video)

## Description
${description}

## Table of Contents
${tableOfContents}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}

## Badges
${badges}

## Features
${features}

## Contributions
${contributions}

## Tests
${tests}

## Video
${video}`;

    nuFile(title, template);
}
);

//function
function nuFile(fileName, data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if (err){
            console.log(err)
        }
        console.log('README successfully generated');
    })
}