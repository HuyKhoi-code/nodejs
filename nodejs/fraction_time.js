var readline = require('readline');
var arr = [];

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function simplify(a, b){
    var tmp;
    while(b != 0) {
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}


function get_fraction(arr1, arr2){
    arr1 = arr1.map(x => parseInt(x));
    arr2 = arr2.map(x => parseInt(x));

    var time1 = arr1[0]*3600 + arr1[1]*60 + arr1[2];
    var time2 = arr2[0]*3600 + arr2[1]*60 + arr2[2];

    return [time1/simplify(time1, time2), time2/simplify(time1, time2)];

}

function main(){
    rl.on('line', (input) => {
        arr.push(input);
    });
    rl.on('pause', () => {
        var result = get_fraction(arr[0].split(" "), arr[1].split(" "));

        console.log(result[1], result[0]);
      });
}

main();