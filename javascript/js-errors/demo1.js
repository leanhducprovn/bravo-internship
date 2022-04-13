try {
	leanhduc("Welcome Bravo");
} catch (err) {
	console.log(err);
	document.getElementById("demo1").innerHTML = err.message;
}
