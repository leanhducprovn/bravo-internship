/* ------------------------------------------------------------
- Chỉ mục cuối cùng (vị trí) của một giá trị được chỉ định
- Trả về -1 nếu giá trị không được tìm thấy.
- Bắt đầu tại một chỉ mục cụ thể và tìm kiếm từ phải sang trái.
- Syntax: array.lastIndexOf(item, start)

-------------------------------------------------------------*/

const arrayLastIndexOf = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất", "Đông Anh"];
let lastIndex = arrayLastIndexOf.lastIndexOf("Đông Anh", 3);

document.getElementById("lastIndexOf").innerHTML = lastIndex;
