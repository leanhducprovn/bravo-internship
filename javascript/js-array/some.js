/* -----------------------------------------------------------------
- Kiểm tra xem có bất kỳ phần tử mảng nào vượt qua điều kiện hay không
- Nếu hàm trả về true, some () trả về true và dừng lại.
- Nếu hàm trả về false, some () trả về false và dừng lại.
- Syntax: array.slice(start, end)
-------------------------------------------------------------------*/

const arraySome = [3, 10, 18, 28];
document.getElementById("some").innerHTML = arraySome.some(check);

function check(num) {
    return num > 18;
}
