/* ------------------------------------------------------------
- phương thức có thể được sử dụng trên các đối tượng khác nhau.
- 
- 
-
-
--------------------------------------------------------------*/

const myObjectCall = {
    firstName: "Lê",
    lastName: "Anh Đức",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};
document.getElementById("call").innerHTML = myObjectCall.fullName();
