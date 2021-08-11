const inquirer = require('inquirer');
const generate = require('./generate');
const chalk = require('chalk');

console.log(chalk.magenta('\nWelcome to the Node CL Password Generator! \n'));
console.log(chalk.yellow('• default password contains only lowercase characters'));
console.log(chalk.yellow('• you can choose whether you want to add uppercase, numeric, or special characters'));
console.log(chalk.yellow('• choosing the save option will insert your password into a text file\n'));

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
        name: 'numbers',
        message: 'Do you want to include numbers?',
        default: false,
    },
    {
        type: 'confirm',
        name: 'special',
        message: 'Do you want to include special characters?',
        default: false,
    }
]

inquirer.prompt(questions).then((answers) => {

    const lowercase = true; //default

    const length = answers.length;
    const uppercase = answers.uppercase;
    const numbers = answers.numbers;
    const special = answers.special;

    let password = generate(length, uppercase, lowercase, numbers, special);
    console.log(password);

});


