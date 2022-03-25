/* -----------------------------------------------------------------------------------
- Thực thi một hàm giảm thiểu cho phần tử mảng.
- Trả về một giá trị duy nhất: kết quả tích lũy của hàm.
- Không thay đổi mảng ban đầu
- Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
-------------------------------------------------------------------------------------*/

const arrayReduce = [175, 50, 25];
document.getElementById("reduce").innerHTML = arrayReduce.reduce(myFunc);

// Trừ các số trong mảng, bắt đầu từ bên trái:
function myFunc(total, num) {
	return total - num;
}
