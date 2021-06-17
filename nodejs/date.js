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


function Getday(year, month) {
    var monthIndex = month - 1;
    var date = new Date(year, monthIndex, 1);
    var result = [];
    while (date.getMonth() == monthIndex) {
      a = date.getDay()
      if (a == 0) a = 7
      result.push(date.getDate() + '-' + (a+1));
      date.setDate(date.getDate() + 1);
    }
    return result;
}

rl.on('pause', () => {
    var x = Getday(arr[3], arr[2]);
    var day_list =[];
    for (var i = 0; i < x.length; i++){
        if (x[i].slice(-1) == arr[1]){
            day_list.push(x[i].slice(0,-2));
        }
    }
    if (arr[0]> day_list.length){
        console.log(-1);
    }
    else console.log(day_list[arr[0]-1]);
  });