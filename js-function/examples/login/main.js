$("#login").click(function (event) {
    event.preventDefault();
});

const user = {
    username: "admin",
    password: "admin",
};

const checking = {
    done: function () {
        return this.username + this.password;
    },
};

const done = checking.done.bind(user);

function startlog() {
    var login = document.getElementById("username").value + document.getElementById("password").value;
    if (login == done()) {
        document.querySelector(".codepro-login-wrapper").classList.add("hidden");
    } else {
        document.getElementById("codepro-login-check").innerHTML = "wrong username or password!";
    }
}
