/* ---------------------------------------------------------------------------
- Trả về chỉ mục của phần tử đầu tiên trong một mảng vượt qua điều kiện đề ra.
- Không thay đổi mảng ban đầu
- Syntax: array.findIndex(function(currentValue, index, arr), thisValue)
----------------------------------------------------------------------------*/

const arrayFindIndex = [16, 17, 18, 19, 20, 21];

document.getElementById("findIndex").innerHTML = arrayFindIndex.findIndex(check);

function check(number) {
    return number > 18;
}
