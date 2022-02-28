/* -------------------------------------------------
- Trả về một mảng.
- Tạo một mảng từ một chuỗi
- Syntax: Array.from(object, mapFunction, thisValue)
---------------------------------------------------*/

let textFrom = "LêAnhĐức"
const myArr = Array.from(textFrom);

document.getElementById("from").innerHTML = myArr;
