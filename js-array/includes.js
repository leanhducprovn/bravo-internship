/* ------------------------------------------------------
- Trả về true nếu một mảng chứa một giá trị được chỉ định.
- Trả về false nếu giá trị không được tìm thấy.
- Phân biệt chữ hoa chữ thường.
- Syntax: array.includes(element, start)
-------------------------------------------------------*/

const arrayIncludes = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam"];
// Bắt đầu tìm kiếm ở vị trí thứ 2 trong mảng
document.getElementById("includes").innerHTML = arrayIncludes.includes("Đông Anh", 1);
