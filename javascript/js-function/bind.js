const bind_person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

const bind_member = {
    firstName: "Lê",
    lastName: "Anh Đức",
};

// Đối tượng thành viên mượn phương thức tên đầy đủ từ đối tượng person
let fullName = bind_person.fullName.bind(bind_member);

document.getElementById("bind-demo1").innerHTML = fullName();

const bind_person1 = {
    firstName: "Lê",
    lastName: "Anh Đức",
    display: function () {
        let x = document.getElementById("bind-demo2");
        x.innerHTML = this.firstName + " " + this.lastName;
    },
};

bind_person1.display();

const bind_person2 = {
    firstName: "Lê",
    lastName: "Anh Đức",
    display: function () {
        let x = document.getElementById("bind-demo3");
        x.innerHTML = this.firstName + " " + this.lastName;
    },
};

setTimeout(bind_person2.display, 3000);

const bind_person3 = {
    firstName: "Lê",
    lastName: "Anh Đức",
    display: function () {
        let x = document.getElementById("bind-demo4");
        x.innerHTML = this.firstName + " " + this.lastName;
    },
};

let display = bind_person3.display.bind(bind_person3);
setTimeout(display, 3000);
