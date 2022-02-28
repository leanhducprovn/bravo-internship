/* --------------------------------------------------------------------
- Trả về true nếu tất cả các phần tử trong một mảng vượt qua thử nghiệm
---------------------------------------------------------------------*/

const ages = [18, 21, 25, 40];
document.getElementById("every").innerHTML = ages.every(checkAge);

function checkAge(age) {
    return age > 15;
}
