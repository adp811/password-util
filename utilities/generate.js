const gen = require('random-seed');

const generate = (length = 12, containsUppercase = false, containsLowercase = false, containsNumbers = true, containsSpecial = false) => {

    var rand = gen.create();

    let password = '';
    
    let UPPER = containsUppercase == true ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    let LOWER = containsLowercase == true ? "abcdefghijklmnopqrstuvwxyz" : "";
    let NUM = containsNumbers == true ? "0123456789" : "";
    let SPECIAL = containsSpecial ==  true ? "!@#$%&*()_+-=[]|,./?><" : "";

    while(password.length < length){

        let select = Math.floor(4 * Math.random());

        switch (select) {

            case 0:

                if (LOWER == "") continue;
                else password += LOWER.charAt(Math.floor(LOWER.length * Math.random()));
                break;

            case 1:

                if (UPPER == "") continue;
                else password += UPPER.charAt(Math.floor(UPPER.length * Math.random()));

                break;

            case 2: 

                if (NUM == "") continue;
                else password += NUM.charAt(Math.floor(NUM.length * Math.random()));

                break;

            case 3: 

                if (SPECIAL == "") continue;
                else password += SPECIAL.charAt(Math.floor(SPECIAL.length * Math.random()));

                break;
        
        }

    }

    return shuffle(password, rand(1000000)); 

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