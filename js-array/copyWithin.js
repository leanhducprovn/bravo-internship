/* ------------------------------------------------------------
- Sao chép các phần tử mảng sang một vị trí khác trong một mảng
- Ghi đè các giá trị hiện có
- Syntax: array.copyWithin(target, start, end)
-------------------------------------------------------------*/

const number = ["1", "2", "3", "4", "5"];
// Sao chép hai phần tử mảng đầu tiên vào vị trí thứ ba và thứ tư:
copyWithin = number.copyWithin(2, 0, 2);
document.getElementById("copyWithin").innerHTML = copyWithin;
