/* ---------------------------------------------------------------------------
- Trả về giá trị của phần tử đầu tiên trong một mảng vượt qua điều kiện đề ra.
- Không thay đổi mảng ban đầu
- Syntax: array.find(function(currentValue, index, arr),thisValue)
----------------------------------------------------------------------------*/

const arrayFind = [16, 17, 18, 19, 20, 21];

document.getElementById("find").innerHTML = arrayFind.find(check);

function check(number) {
    return number > 18;
}
