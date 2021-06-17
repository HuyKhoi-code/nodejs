// INPUT
// Hàng đầu tiên của input chứ m, n (0 < m,n < 10.000). Trong đó m là số lượng người đang online của toàn hệ 
// thống, n là số lượng friend của người dùng đang xét.

// Hàng tiếp theo chứa m con số nguyên dương, mỗi số giá trị không quá 1 tỷ và cách nhau bởi khoảng trắng. 
// Đây là các mã số của những người dùng đang online, m số nguyên dương này được xếp theo thứ tự tăng dần 
// và không có mã số nào trùng nhau.

// Hàng tiếp theo chứa n con số nguyên dương, mỗi số giá trị không quá 1 tỷ và cách nhau bởi khoảng trắng. 
// Đây là các mã số của bạn bè của user X.

// OUTPUT
// Xuất ra trên một dòng số lượng bạn của X đang online



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

function countOnline (arr1, arr2){
    var count = 0;
    for (var i =0; i<arr2.length; i++){
        j = 0;
        //if (arr2[i] > arr1[arr1.length - 1]) continue; 
        while (arr2[i] >= arr1[j]){ 
            if (j == arr1.length - 1) break
            if (arr2[i] == arr1[j]) {
                count+=1;
                break;
            }
            j++
        }    
    }
    return count
}
rl.on('pause', () => {
    console.log (arr[2])
    console.log(arr[4])
    console.log(countOnline(arr[2], arr[4]))
});