/* ---------------------------------------------
- Thêm các phần tử mới vào đầu một mảng.
- Phương thức ghi đè lên mảng ban đầu.
- Syntax: array.unshift(item1, item2, ..., itemX)
-----------------------------------------------*/

const arrayUnshift = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất"];
arrayUnshift.unshift("Thực tập sinh", "Công nghệ web");

document.getElementById("unshift").innerHTML = arrayUnshift;
