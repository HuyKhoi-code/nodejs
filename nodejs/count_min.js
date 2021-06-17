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

function count_min(arr) {
    arr = arr.map(x => parseInt(x));
    var min = arr[1];
    var count = 0;
    for (var i =2; i< arr.length; i++){
        if (arr[i]< min) {
            min = arr[i];
            count = 0;
        }
        if (arr[i] == min) count++;
    }
    return [min, count];
}

rl.on('pause', () => {
    var result = count_min(arr);
    console.log(result[0], result[1]);
});