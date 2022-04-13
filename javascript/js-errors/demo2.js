function checkInput1() {
	const message = document.getElementById("demo2");
	let x = document.getElementById("input1").value;
	try {
		if (x == "") throw "trống!";
		if (isNaN(x)) throw "không phải là một số!";
		if (x < 500) throw "quá nhỏ!!";
		if (x > 1000) throw "quá lớn";
	} catch (err) {
		console.log("Đầu vào " + err);
		message.innerHTML = "Đầu vào " + err;
	}
}
