/* --------------------------------------------
- Trả về đối tượng với cặp key/values tương ứng
- Lấy chỉ mục của phần tử trong mảng
- Không thay đổi mảng ban đầu
- Syntax: array.entries()
---------------------------------------------*/

const entriesArray = ["Mục 1", "Mục 2", "Mục 3", "Mục 4"];
const f = entriesArray.entries();
for (let x of f) {
    document.getElementById("entries").innerHTML += x + " | ";
}
