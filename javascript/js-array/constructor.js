/* --------------------------------
- Trả về hàm đã tạo mảng nguyên mẫu
- Syntax: array.constructor
---------------------------------*/

const info = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam"];
let constructor = info.constructor;
document.getElementById("constructor").innerHTML = constructor;
