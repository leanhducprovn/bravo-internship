/* ------------------------------------------------------------------
- Trả về một chuỗi với các giá trị mảng được phân tách bằng dấu phẩy.
- Phương thức không thay đổi mảng ban đầu
- Syntax: array.toString()
--------------------------------------------------------------------*/

const arrayToString = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất"];
let textToString = arrayToString.toString();
document.getElementById("toString").innerHTML = textToString;
