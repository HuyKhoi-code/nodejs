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

function check_power(n){
    var p = 0;
    if (n < 3) return 0;
    for (var i = 2; i< parseInt(Math.sqrt(n))+1; i++){
        p = Math.log2(n) / Math.log2(i);
        if (Math.ceil(p) == Math.floor(p) && p>1) return 1;
    }
    return 0;
}

rl.on('pause', () => {
    for (var i =0; i<arr.length-1; i++){
        console.log(check_power(arr[i]));
    }
});