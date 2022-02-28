/* -------------------------------------------------------------
- Trả về true nếu một đối tượng là một mảng, ngược lại là false.
- Syntax: Array.isArray(obj)
--------------------------------------------------------------*/

const exArray = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam"];
let result =  Array.isArray(exArray);

document.getElementById("isArray").innerHTML = result;
