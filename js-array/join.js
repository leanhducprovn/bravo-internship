/* --------------------------------
- Tạo một mảng dưới dạng một chuỗi.
- Không thay đổi mảng ban đầu.
- Syntax: array.join(separator)
---------------------------------*/

const arrayJoin = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam"];
let textJoin = arrayJoin.join();

document.getElementById("join").innerHTML = textJoin;
