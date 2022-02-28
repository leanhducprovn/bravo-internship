/* ------------------------------------------------------------------
- Tính lại một mảng mới từ việc gọi một hàm cho mọi phần tử của mảng.
- Không thay đổi mảng ban đầu.
- Syntax: array.map(function(currentValue, index, arr), thisValue)
--------------------------------------------------------------------*/

const arrayMap = [5, 10, 15, 20];
const newArr = arrayMap.map(myFunction);

document.getElementById("map").innerHTML = newArr;

function myFunction(num) {
    return num * 100;
}
