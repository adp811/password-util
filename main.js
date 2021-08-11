const inquirer = require('inquirer');
const generate = require('./utilities/generate');
const savePass = require('./utilities/save');
const chalk = require('chalk');
const clipboardy = require('clipboardy'); 

console.log(chalk.magenta.bold('\nWelcome to the Node CL Password Generator! \n'));
console.log(chalk.yellow('• default password contains only numeric characters'));
console.log(chalk.yellow('• you can choose whether you want to add uppercase, lowercase, or special characters'));
console.log(chalk.yellow('• choosing the save option will insert your password into a local text file\n'));

const questions = [
    {
        type: 'input',
        name: 'length',
        message: 'What is your desired password length?',
        validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number,
    },
    {
        type: 'confirm',
        name: 'uppercase',
        message: 'Do you want to include uppercase characters?',
        default: false,
    },
    {
        type: 'confirm',
        name: 'lowercase',
        message: 'Do you want to include lowercase characters?',
        default: false,
    },
    {
        type: 'confirm',
        name: 'special',
        message: 'Do you want to include special characters?',
        default: false,
    },
    {
        type: 'confirm',
        name: 'save',
        message: 'Do you want to save this password?',
        default: false,
    }
]

inquirer.prompt(questions).then((answers) => {

    const numbers = true; //default

    const length = answers.length;
    const uppercase = answers.uppercase;
    const lowercase = answers.lowercase;
    const special = answers.special;

    const save = answers.save; //option to save

    let password = generate(length, uppercase, lowercase, numbers, special);
    
    clipboardy.writeSync(password);

    console.log(chalk.greenBright('\nPassword Generated! -->  ') + chalk.bold(password) + 
    chalk.gray('  (copied to clipboard) \n'));

    if(save) savePass(password);

});

