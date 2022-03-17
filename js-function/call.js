/* ------------------------------------------------------------
- phương thức có thể được sử dụng trên các đối tượng khác nhau.
--------------------------------------------------------------*/

const myObjectCall = {
    firstName: "Lê",
    lastName: "Anh Đức",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};
document.getElementById("demo1").innerHTML = myObjectCall.fullName();

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};
const person1 = {
    firstName: "Lê",
    lastName: "Anh Đức",
};
const person2 = {
    firstName: "Lê",
    lastName: "Khả Huy",
};
document.getElementById("demo2").innerHTML = person.fullName.call(person1);
document.getElementById("demo3").innerHTML = person.fullName.call(person2);

const person3 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    },
};

document.getElementById("demo4").innerHTML = person3.fullName.call(person1, "Hà Nội", "Việt Nam");
document.getElementById("demo5").innerHTML = person3.fullName.call(person2, "Hà Nội", "Việt Nam");
