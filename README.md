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
| 1   | `ngOnChanges()`           | Thự thi khi Angular thiết lập các thuộc tính đầu vào ràng buộc dữ liệu. Được gọi trước `ngOnInit()` và bất cứ khi nào một hoặc nhiều thuộc tính đầu vào ràng buộc dữ liệu thay đổi.                     |
| 2   | `ngOnInit()`              | Khởi tạo directive / component sau khi Angular hiển thị các thuộc tính ràng buộc dữ liệu và đặt các thuộc tính đầu vào của directive / component. Được gọi một lần, sau `ngOnChanges()` đầu tiên.       |
| 3   | `ngDoCheck()`             | Phát hiện và hành động theo những thay đổi mà Angular không thể hoặc sẽ không tự mình phát hiện. Được gọi trong mỗi lần chạy phát hiện thay đổi, ngay sau `ngOnChanges()` và `ngOnInit()`.              |
| 4   | `ngAfterContentInit()`    | Thự thi sau khi Angular thêm nội dung bên ngoài vào view của component / view mà directive được đưa vào. Được gọi một lần sau `ngDoCheck()` đầu tiên.                                                   |
| 5   | `ngAfterContentChecked()` | Thự thi sau khi Angular đã kiểm tra nội dung bên ngoài đã được đưa vào view của component. Được gọi sauv`ngAfterContentInit()` và mọi `ngDoCheck()` tiếp theo.                                          |
| 6   | `ngAfterViewInit()`       | Thự thi sau khi Angular khởi tạo các view của component và các view con / view mà directive được đưa vào. Được gọi một lần sau `ngAfterContentChecked()` đầu tiên.                                      |
| 7   | `ngAfterViewChecked()`    | Thực thi sau khi Angular kiểm tra các view của component và các view con /view mà directive được đưa vào. Được gọi sau `ngAfterViewInit()` và mọi `ngAfterContentChecked()` tiếp theo.                  |
| 8   | `ngOnDestroy()`           | Dọn dẹp ngay trước khi Angular phá hủy directive / component. Hủy đăng ký Observables và tách trình xử lý sự kiện để tránh rò rỉ bộ nhớ. Được gọi ngay trước khi Angular phá hủy directive / component. |
