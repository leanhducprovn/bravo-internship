try {
	leanhduc("Welcome Bravo");
} catch (err) {
	console.warn(err);
	document.getElementById("demo1").innerHTML = err.message;
}
