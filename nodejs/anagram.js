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

function sortStr(str){
    return str.split('').sort().join('');
}

function check_anagram(str1, str2){
    return sortStr(str1) === sortStr(str2)
}

rl.on('pause', () => {
    if(check_anagram(arr[0], arr[1]) == true) console.log('YES');
    else console.log('NO');
});