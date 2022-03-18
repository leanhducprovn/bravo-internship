/* -------------------------------------------------------------
- Trả về một đối tượng trình lặp mảng với các khóa của một mảng.
- Syntax: array.keys()
--------------------------------------------------------------*/

const arrayKeys = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất"];
const keys = arrayKeys.keys(); // Cách 1
// const keys = Object.keys(fruits); // Cách 2

let textKeys = "";
for (let x of keys) {
    textKeys += x + " | ";
}

document.getElementById("keys").innerHTML = textKeys;
