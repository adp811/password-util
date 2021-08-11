const gen = require('random-seed');

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LOWER = "abcdefghijklmnopqrstuvwxyz"
const NUM = "0123456789"
const SPECIAL = "!@#$%&*()_+-=[]|,./?><"

var rand = gen.create();

const generate = (length = 12, containsUppercase = false, containsLowercase = true, containsNumbers = false, containsSpecial = false) => {

    let base = LOWER; //default characters for password
    let password = '';

    if (containsNumbers) base += NUM;
    if (containsUppercase) base += UPPER;
    if (containsSpecial) base += SPECIAL;

    let sbase = shuffle(base, rand(1000000));

    for (var i = 0; i < length; i++) {
        password += sbase.charAt(Math.floor(sbase.length * Math.random()));
    }

    return password;

}

function shuffle(str, seed) {

    str = str.split("");

    var strl = str.length;
    var temp;
    var j;

    for (var i = 0; i < strl; i++) {
        j = (seed % (i + 1) + i) % strl;
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;

    }

    return str.join("");
}


module.exports = generate