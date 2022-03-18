/* -------------------------------------------
- Thêm các mục mới vào cuối một mảng.
- Thay đổi độ dài mảng
- Trả về độ dài mới
- Syntax: array.push(item1, item2, ..., itemX)
--------------------------------------------*/

const arrayPush = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất"];
arrayPush.push("Thực tập sinh", "Web app");

document.getElementById("push").innerHTML = arrayPush;
