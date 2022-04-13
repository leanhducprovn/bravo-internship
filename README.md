# Bravo intership

## Session 1: Tìm hiểu về JavaScript Array Reference

### JavaScript Array Methods

| Method        | Description                                                                      |
| ------------- | -------------------------------------------------------------------------------- |
| concat()      | Joins two or more arrays, and returns a copy of the joined arrays                |
| copyWithin()  | Copies array elements within the array, to and from specified positions          |
| entries()     | Returns a key/value pair Array Iteration Object                                  |
| every()       | Checks if every element in an array pass a test                                  |
| fill()        | Fill the elements in an array with a static value                                |
| filter()      | Creates a new array with every element in an array that pass a test              |
| find()        | Returns the value of the first element in an array that pass a test              |
| findIndex()   | Returns the index of the first element in an array that pass a test              |
| forEach()     | Calls a function for each array element                                          |
| from()        | Creates an array from an object                                                  |
| includes()    | Check if an array contains the specified element                                 |
| indexOf()     | Search the array for an element and returns its position                         |
| isArray()     | Checks whether an object is an array                                             |
| join()        | Joins all elements of an array into a string                                     |
| keys()        | Returns a Array Iteration Object, containing the keys of the original array      |
| lastIndexOf() | Search the array for an element, starting at the end, and returns its position   |
| map()         | Creates a new array with the result of calling a function for each array element |
| pop()         | Removes the last element of an array, and returns that element                   |
| push()        | Adds new elements to the end of an array, and returns the new length             |
| reduce()      | Reduce the values of an array to a single value (going left-to-right)            |
| reduceRight() | Reduce the values of an array to a single value (going right-to-left)            |
| reverse()     | Reverses the order of the elements in an array                                   |
| shift()       | Removes the first element of an array, and returns that element                  |
| slice()       | Selects a part of an array, and returns the new array                            |
| some()        | Checks if any of the elements in an array pass a test                            |
| sort()        | Sorts the elements of an array                                                   |
| splice()      | Adds/Removes elements from an array                                              |
| toString()    | Converts an array to a string, and returns the result                            |
| unshift()     | Adds new elements to the beginning of an array, and returns the new length       |
| valueOf()     | Returns the primitive value of an array                                          |

### JavaScript Array Properties

| Property    | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| constructor | Returns the function that created the Array object's prototype |
| length      | Sets or returns the number of elements in an array             |
| prototype   | Allows you to add properties and methods to an Array object    |

## Session 2: Tìm hiểu cách sử dụng của apply(), call() và bind() methods

| STT | Methods | Phân biệt                                                                                           |
| --- | ------- | --------------------------------------------------------------------------------------------------- |
| 1   | apply() | Gọi hàm và cho phép bạn truyền vào một object và các đối số thông qua mảng (array)                  |
| 2   | call()  | Gọi hàm và cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy (comma)     |
| 3   | bind()  | Trả về một hàm số mới, cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy |

## Session 3: Tìm hiểu về Lifecycle Hooks trong Angular

| STT | Hook                      | Mục đích & thời điểm                                                                                                                                                                                    |
| --- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `Contructor()`            | Được gọi trước tất cả lifecycle hook, thường dùng để tìm các Dependency Injection như các **Service**. Chú ý constructor không phải là một hook method                                                  |
| 2   | `ngOnChanges()`           | Thực thi khi Angular thiết lập các thuộc tính đầu vào ràng buộc dữ liệu. Được gọi trước `ngOnInit()` và bất cứ khi nào một hoặc nhiều thuộc tính đầu vào ràng buộc dữ liệu thay đổi.                    |
| 3   | `ngOnInit()`              | Khởi tạo directive / component sau khi Angular hiển thị các thuộc tính ràng buộc dữ liệu và đặt các thuộc tính đầu vào của directive / component. Được gọi một lần, sau `ngOnChanges()` đầu tiên.       |
| 4   | `ngDoCheck()`             | Phát hiện và hành động theo những thay đổi mà Angular không thể hoặc sẽ không tự mình phát hiện. Được gọi trong mỗi lần chạy phát hiện thay đổi, ngay sau `ngOnChanges()` và `ngOnInit()`.              |
| 5   | `ngAfterContentInit()`    | Thực thi sau khi Angular thêm nội dung bên ngoài vào view của component / view mà directive được đưa vào. Được gọi một lần sau `ngDoCheck()` đầu tiên.                                                  |
| 6   | `ngAfterContentChecked()` | Thực thi sau khi Angular đã kiểm tra nội dung bên ngoài đã được đưa vào view của component. Được gọi sau `ngAfterContentInit()` và mọi `ngDoCheck()` tiếp theo.                                         |
| 7   | `ngAfterViewInit()`       | Thực thi sau khi Angular khởi tạo các view của component và các view con / view mà directive được đưa vào. Được gọi một lần sau `ngAfterContentChecked()` đầu tiên.                                     |
| 8   | `ngAfterViewChecked()`    | Thực thi sau khi Angular kiểm tra các view của component và các view con /view mà directive được đưa vào. Được gọi sau `ngAfterViewInit()` và mọi `ngAfterContentChecked()` tiếp theo.                  |
| 9   | `ngOnDestroy()`           | Dọn dẹp ngay trước khi Angular phá hủy directive / component. Hủy đăng ký Observables và tách trình xử lý sự kiện để tránh rò rỉ bộ nhớ. Được gọi ngay trước khi Angular phá hủy directive / component. |

## Session 4: Tìm hiểu về CSS flex Property

### Các khái niệm cơ bản và thuật ngữ

**Bố cục Flex** được thiết lập từ một khung lớn (parent container) đóng vai trò là khung linh hoạt (flex containter) và các thẻ con ngay trong nó (immediate children) đóng vai trò các mục nhỏ linh hoạt (flex item).

Thành phần quan trọng nhất của **Flexbox** là:

-   **`container`:** là thành phần lớn bao quanh các phần tử bên trong, các item bên trong sẽ hiển thị dựa trên thiết lập của container này.
-   **`item`:** là phần tử con của container, bạn có thể thiết lập nó sẽ sử dụng bao nhiêu cột trong một container, hoặc thiết lập thứ tự hiển thị của nó.

Các item sẽ được bố trí theo trục main axis (bắt đầu từ main-start, kết thúc ở main-end) hoặc theo trục cross axis (bắt đầu từ cross-start, kết thúc ở cross-end).

-   **`main axis`:** đây là trục chính để điều khiển hướng mà các item sẽ hiển thị. **Lưu ý**, main axis không phải lúc nào cũng nằm ngang như sơ đồ trên, bạn có thể sử dụng thuộc tính flex-direction để thay đổi hướng của trục và lúc đó các item sẽ hiển thị theo nó.
-   **`main-start` | `main-end`:** khi thiết lập flexbox, các item nằm trong container hiển thị từ điểm bắt đầu gọi là main-start tới điểm kết thúc gọi là main-end.
-   **`main size`:** kích thước (chiều rộng hoặc chiều cao) của các item, tùy thuộc vào hướng của main axis.
-   **`cross axis`**: cross axis luôn là trục vuông góc của main axis. Hướng của nó phụ thuộc vào hướng của main axis.
-   **`cross-start` | `cross-end`:** có ý nghĩa tương tự nhưng luôn vuông góc với main start, main end.
-   **`cross size`:** kích thước (chiều rộng hoặc chiều cao) của các item dựa trên trục cross axis, tùy thuộc vào hướng của main axis.

### Các thuộc tính của Flex Container

-   `display`
-   `flex-direction`
-   `flex-wrap`
-   `flex-flow`
-   `justify-content`
-   `align-items`
-   `align-content`

### Các thuộc tính của Flex Item

-   `order`
-   `flex-grow`
-   `flex-shrink`
-   `flex-basis`
-   `flex`
-   `align-self`

### Flexbox Layout website kiểu mẫu

Xây dựng bố cục một trang web cơ bản sử dụng flex property!

## Session 5: Exception trong Javascript được xử lý như thế nào?

Exception là một sự kiện mà phá vỡ luồng chuẩn của chương trình. Nó là một đối tượng mà được ném tại Runtime. Một exception (ngoại lệ) là một vấn đề xảy ra trong quá trình thực hiện của chương trình. Một ngoại lệ có thể xảy ra với nhiều lý do khác nhau...

### Throw, and Try...Catch...Finally

-   Câu lệnh `try` xác định một khối mã để chạy (để thử).
-   Câu lệnh `catch` xác định một khối mã để xử lý bất kỳ lỗi nào.
-   Câu lệnh `finally` xác định một khối mã để chạy bất kể kết quả.
-   Câu lệnh `throw` xác định một lỗi tùy chỉnh.

### Errors will happen!

Khi thực thi mã JavaScript, các lỗi khác nhau có thể xảy ra.

Lỗi có thể là lỗi mã hóa do lập trình viên thực hiện, lỗi do nhập sai, và những điều không thể lường trước khác.
