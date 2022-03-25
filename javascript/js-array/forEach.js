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

let index1 = 0;
while (index1 < arrayForEach.length) {
	console.warn(arrayForEach[index1]);
	index1++;
}

let index2 = 0;
for (index2; index2 < arrayForEach.length; index2++) {
	console.error(arrayForEach[index2]);
}

let index3 = arrayForEach.map((arr) => arr);
for (var i = 0; i < arrayForEach.length; i++) {
	console.warn(index3[i]);
}

let index4 = 0;
do {
	console.error(arrayForEach[index4]);
	index4++;
} while (index4 < arrayForEach.length);

for (var index5 of arrayForEach) {
	console.warn(index5);
}

for (var index6 in arrayForEach) {
	console.error(arrayForEach[index6]);
}
