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

function encode(arr){
    var encode_str = '';
    var i = 0;
    while (i < arr.length){
        count =1;
        ch = arr[i];
        j = i;
        while (j < arr.length -1){
            if (arr[j] == arr[j+1]){
                count ++;
                j ++;
            }
            else break;
        }
        if (count == 1) encode_str += ch;
        else encode_str += count + ch;
        i = j+1;
    }
    return encode_str;
}

rl.on('pause', () => {
    for (var i =0; i < arr.length-1; i++) {
        console.log(encode(arr[i]));
    }
});