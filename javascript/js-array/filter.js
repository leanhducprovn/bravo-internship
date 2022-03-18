/* ---------------------------------------------------------------------------
- Tạo một mảng mới chứa đầy các phần tử vượt qua điều kiện do một hàm cung cấp.
- Không thay đổi mảng ban đầu
- Syntax: array.filter(function(currentValue, index, arr), thisValue)
----------------------------------------------------------------------------*/

const arrayFilter = [16, 18, 20, 25, 40];

document.getElementById("filter").innerHTML = arrayFilter.filter(checkAdult);

// Lấy mọi phần tử có giá trị từ 18 trở lên
function checkAdult(number) {
    return number >= 18;
}
