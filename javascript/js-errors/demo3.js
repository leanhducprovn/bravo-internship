function checkInput2() {
	const noti_finally = "Vui lòng nhập số lớn hơn 500 và nhỏ hơn 1000";
	const message1 = document.getElementById("demo3");
	const message2 = document.getElementById("demo3_1");
	let x = document.getElementById("input2").value;
	try {
		if (x == "") throw "trống!";
		if (isNaN(x)) throw "không phải là một số!";
		if (x < 500) throw "quá nhỏ!!";
		if (x > 1000) throw "quá lớn";
	} catch (err) {
		console.log("Đầu vào " + err);
		message1.innerHTML = "Đầu vào " + err;
	} finally {
		console.log(noti_finally);
		message2.innerHTML = noti_finally;
	}
}
