/* -----------------------------------------------------------------
- Trả về các phần tử đã chọn trong một mảng, dưới dạng một mảng mới.
- Syntax: array.slice(start, end)
-------------------------------------------------------------------*/

const arraySlice = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất"];
slice = arraySlice.slice(1, 3);

document.getElementById("slice").innerHTML = slice;
