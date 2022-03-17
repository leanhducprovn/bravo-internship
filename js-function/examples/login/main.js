$("#login").click(function (event) {
    event.preventDefault();
});
var users = [
    { username: "admin", password: "admin" },
    { username: "leanhduc", password: "leanhduc" },
    { username: "anhyeuem", password: "anhyeuem" },
];
function startlog() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for (var i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
            document.querySelector(".codepro-login-wrapper").classList.add("hidden");
            break;
        } else {
            document.getElementById("codepro-login-check").innerHTML = "wrong username or password!";
        }
    }
}
