/* -------------------------------------------------------------
- Trả về chỉ mục đầu tiên (vị trí) của một giá trị được chỉ định.
- Trả về -1 nếu giá trị không được tìm thấy.
- Bắt đầu tại một chỉ mục cụ thể và tìm kiếm từ trái sang phải.
- Syntax: array.indexOf(item, start)
-------------------------------------------------------*/

const arrayIndexOf = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam"];
let index = arrayIndexOf.indexOf("Hà Nội", 1);

document.getElementById("indexOf").innerHTML = index;
