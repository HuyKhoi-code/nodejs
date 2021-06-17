var readline = require('readline');
var arr = [];

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    arr.push(input);
});

function check_panlidrome(str) {
    if (str == str.split("").reverse().join("")) return 1;
    return 0;
}

function add_char(str) {
    new_str = str.split("").reverse().join("");
    //add_result = ''
    for (var i=1; i<str.length; i++){
        //add_result = ''
        result = str;
        result += new_str.substr(new_str.length-i);
        if (check_panlidrome(result) == 1) {
            break;
        }
    }
    return result.substr(str.length);
}

rl.on('pause', () => {
    for (var i =0; i < arr.length; i++) {
        console.log(add_char(arr[i]));
    }
});
