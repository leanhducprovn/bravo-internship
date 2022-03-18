/* ---------------------------------------
- Phương thức trả về chính mảng.
- Phương thức không thay đổi mảng ban đầu.
- Syntax: array.valueOf()
-----------------------------------------*/

const arrayValueOf = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất"];
const myArrayValueOf = arrayValueOf.valueOf();

document.getElementById("valueOf").innerHTML = myArrayValueOf;
