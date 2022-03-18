/* ----------------------------------------------------------------------------------------
- Thực thi một hàm giảm thiểu cho phần tử mảng.
- Phương thức hoạt động từ phải sang trái.
- Trả về một giá trị duy nhất: kết quả tích lũy của hàm.
- Không thay đổi mảng ban đầu
- Syntax: array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
------------------------------------------------------------------------------------------*/

const arrayReduceRight = [175, 50, 25];
document.getElementById("reduceRight").innerHTML = arrayReduce.reduceRight(myFunc);

// Trừ các số trong mảng, bắt đầu từ bên trái:
function myFunc(total, num) {
    return total - num;
}
