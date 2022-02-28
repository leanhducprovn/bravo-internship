/* ------------------------------------------------------------
- Cho phép bạn thêm các thuộc tính và phương thức mới vào mảng.
- Là một thuộc tính có sẵn với tất cả các đối tượng JavaScript.
- Syntax: Array.prototype.name = value
--------------------------------------------------------------*/

// Add a new method
Array.prototype.myUcase = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase(); // Chuyển thành chữ in hoa
    }
};

// Use the method on any array
const arrayPrototype = ["Lê Anh Đức", "Đông Anh", "Hà Nội", "Việt Nam", "Trái đất"];
arrayPrototype.myUcase();
document.getElementById("prototype").innerHTML = arrayPrototype;
