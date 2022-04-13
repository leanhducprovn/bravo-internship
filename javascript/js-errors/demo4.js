let arr = [10, 20, 30, "bravo", 40, 50, "angular", 60];
let newArr = [];
console.log("arr:", arr);
console.log("length:", arr.length);
for (let i = 0; i <= arr.length; i++) {
	try {
		arr[i].toFixed();
		newArr.push(arr[i]);
	} catch (err) {
		console.log("newArr:", newArr);
	}
}
