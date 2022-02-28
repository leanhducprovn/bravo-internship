/* -------------------------------------------------------------------
- Gọi một hàm cho mỗi phần tử trong một mảng
- Không được thực thi cho các phần tử trống.
- Syntax: array.forEach(function(currentValue, index, arr), thisValue)
---------------------------------------------------------------------*/

let text = "";
const arrayForEach = ["apple", "orange", "cherry"];
arrayForEach.forEach(myFunction);

document.getElementById("forEach").innerHTML = text;

function myFunction(item, index) {
    text += index + ": " + item + " | ";
}
