/* --------------------------------------------------------
- Thêm hoặc loại bỏ các phần tử mảng.
- Ghi đè mảng ban đầu
- Syntax: array.splice(index, howmany, item1, ....., itemX)
-----------------------------------------------------------*/

const arraySplice = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất"];

// Tại vị trí 2, thêm 2 phần tử:
arraySplice.splice(3, 0, "Thực tập sinh", "Lập trình web");
// Tại vị trí 2, xóa 2 mục:
// fruits.splice(2, 2);

document.getElementById("splice").innerHTML = arraySplice;
