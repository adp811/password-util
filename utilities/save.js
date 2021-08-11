const fs = require('fs');
const os = require('os');
const path = require('path');

const date = require('date-and-time');
const chalk = require('chalk');

const fileName = 'passwords.txt' //change file name here

const save = (password) => {

    var now = new Date();

    let toWrite = password + ' --> Created: ' + date.format(now, 'YYYY/MM/DD HH:mm:ss');

    fs.open(path.join(__dirname, '../', fileName) , 'a', 0o666, (ev, id) => {
        fs.write(id, toWrite + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log('Password saved locally to ' + chalk.blue.bold(fileName) + '\n');
            })
        })

    })

}

module.exports = save;

