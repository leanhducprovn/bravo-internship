/* -------------------------------------------------------------------
- Gọi một hàm cho mỗi phần tử trong một mảng
- Không được thực thi cho các phần tử trống.
- Syntax: array.forEach(function(currentValue, index, arr), thisValue)
---------------------------------------------------------------------*/

let text = "";
const arrayForEach = ["Lê Anh Đức", "Phạm Văn Linh", "Nguỵ Thị Ngọc Oanh"];
arrayForEach.forEach(myFunction);

document.getElementById("forEach").innerHTML = text;

function myFunction(item, index) {
	text += index + ": " + item + " | ";
}

while ((index1 = 0 < arrayForEach.length)) {
	console.warn(arrayForEach[index1]);
	index1++;
}

for (let index2 = 0; index2 < arrayForEach.length; index2++) {
	console.error(arrayForEach[index2]);
}
