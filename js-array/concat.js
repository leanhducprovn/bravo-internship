/* -----------------------------------------
- Nối 2 hoặc nhiều mảng với nhau.
- Trả về một mảng mới, chứa các mảng đã nối.
- Không thay đổi các mảng hiện có.
------------------------------------------*/

const arr1 = ["Lê Anh Đức", "Thực tập sinh"];
const arr2 = ["Công nghệ thông tin", "Bravo"];
const arr3 = ["Mảng FrontEnd", "Angular"];
const concat = arr1.concat(arr2, arr3);
document.getElementById("concat").innerHTML = concat;
