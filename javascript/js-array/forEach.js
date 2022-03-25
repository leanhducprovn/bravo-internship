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

let index = 0;
while (index < arrayForEach.length) {
	console.warn(arrayForEach[index]);
	index++;
}

for (index; index < arrayForEach.length; index++) {
	console.error(arrayForEach[index]);
}
