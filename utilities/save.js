const fs = require('fs');
const os = require('os');
const path = require('path');

const date = require('date-and-time');
const chalk = require('chalk');

const fileName = 'passwords.txt' //change file name here

const save = (password) => {

    var now = new Date();

    let savePath = path.join(__dirname, '../', fileName)
    let content = password + ' --> Created: ' + date.format(now, 'YYYY/MM/DD HH:mm:ss');

    fs.open(savePath, 'a', 0o666, (err, fd) => {
        fs.write(fd, content + os.EOL, null, 'utf-8', () => {
            fs.close(fd, () => {
                console.log('Password saved locally to ' + chalk.blue.bold(fileName) + '\n');
            })
        })
    })

}

module.exports = save;

