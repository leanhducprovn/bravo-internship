const apply_person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

const apply_person1 = {
    firstName: "Lê",
    lastName: "Anh Đức",
};

document.getElementById("apply-demo1").innerHTML = apply_person.fullName.apply(apply_person1);

const apply_person2 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    },
};

const apply_person3 = {
    firstName: "Lê",
    lastName: "Anh Đức",
};

document.getElementById("apply-demo2").innerHTML = apply_person2.fullName.apply(apply_person3, ["Hà Nội", "Việt Nam"]);

document.getElementById("apply-demo3").innerHTML = Math.max.apply(null, [1, 2, 3]);
document.getElementById("apply-demo4").innerHTML = Math.max.apply(Math, [1, 2, 3]);
document.getElementById("apply-demo5").innerHTML = Math.max.apply(" ", [1, 2, 3]);
document.getElementById("apply-demo6").innerHTML = Math.max.apply(0, [1, 2, 3]);
