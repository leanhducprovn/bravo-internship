/* --------------------------------------------
- Đặt hoặc trả về số phần tử trong một mảng.
- Syntax: array.length / array.length = number
---------------------------------------------*/

const arrayLength = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất"];
let length =  arrayLength.length;
arrayLength.length = 2;

document.getElementById("length").innerHTML = length;
document.getElementById("setLength").innerHTML = arrayLength;
