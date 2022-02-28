/* ------------------------------------------------------------
- Sao chép các phần tử mảng sang một vị trí khác trong một mảng
- Ghi đè các giá trị hiện có
-------------------------------------------------------------*/

const number = ["1", "2", "3", "4"];
copyWithin = number.copyWithin(0, 3);
document.getElementById("copyWithin").innerHTML = copyWithin;
