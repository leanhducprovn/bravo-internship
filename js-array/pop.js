/* --------------------------------------
- Loại bỏ phần tử cuối cùng của một mảng.
- Thay đổi mảng ban đầu.
- Trả về phần tử đã loại bỏ.
- Syntax: array.pop()
----------------------------------------*/

const arrayPop = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất", "Đông Anh"];
arrayPop.pop();
document.getElementById("pop").innerHTML = arrayPop;
