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
document.getElementById("call-demo1").innerHTML = myObjectCall.fullName();

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
document.getElementById("call-demo2").innerHTML = person.fullName.call(person1);
document.getElementById("call-demo3").innerHTML = person.fullName.call(person2);

const person3 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    },
};

document.getElementById("call-demo4").innerHTML = person3.fullName.call(person1, "Hà Nội", "Việt Nam");
document.getElementById("call-demo5").innerHTML = person3.fullName.call(person2, "Hà Nội", "Việt Nam");
