/* ----------------------------------------------
- Phương thức loại bỏ mục đầu tiên của một mảng.
- Thay đổi mảng ban đầu
- Syntax: array.reverse()
------------------------------------------------*/

const arrayShift = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất"];
arrayShift.shift();

document.getElementById("shift").innerHTML = arrayShift;
