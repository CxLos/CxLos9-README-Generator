// node modules
const inquirer = require('inquirer');
const fs = require('fs');

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
            name: 'Description',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Please provide table of contents",
            name: 'Table of Contents',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "How do you install this project?",
            name: 'Installation',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "How do you use this project?",
            name: 'Usage',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'list',
            message: "Please provide a License",
            name: 'License',
            choices: ['MIT License', 'GPL License', 'N/A'],
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Were there any contributions?",
            name: 'Contributions',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Please write any tests for this project",
            name: 'Tests',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Any other questions?",
            name: 'Questions',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
        {
            type: 'input',
            message: "Enter GitHub Username",
            name: 'Git',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        }
    ]
).then(({
    title,
    description,
    tableOfContents,
    installation,
    usage,
    license,
    contributions,
    tests,
    questions,
    Git,
})=>{
    // template
    const template =`# ${title}

    *[Description][#Description]
    *[Table of Contents][#TableOfContents]
    *[Installation][#Installation]
    *[Usage][#Usage]
    *[License][#License]
    *[Contributions][#Contributions]
    *[Tests][#Tests]
    *[Questions][#Questions]
    *[Git][#Git]

    ## Description
    ${description}
    ## Contributions
    ${tableOfContents}
    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## License
    ${license}
    ## Contributions
    ${contributions}
    ## Tests
    ${tests}
    ## Questions
    ${questions}
    ## Git
    ${Git}

    #Contact
    *GitHub: ${cxlos}
    *LinkedIn: ${link}
    *E-mail: ${email}`;

    nuFile(title, template);
}
);
//function
function nuFile(fileName, template){
    fs.writeFile(`./${fileName,toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if (err){
            console.log(err)
        }
        console.log('README successfully generated');
    })
}