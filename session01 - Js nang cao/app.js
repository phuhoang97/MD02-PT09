// 1. Từ khóa khai báo biến: var, let, const

// 2. Template string (``)
// Khai string: '', ""
// => cho phép truyền biến thông qua ${}

// 3. Các hàm có sẵn trong ES06.
// Hàm map:
// const numbers = [3, 5, 7, 9];
// const newNumber = numbers.map((element, index) => element * 2);
// console.log(newNumber);

// Hàm forEach:
// const numbers = [3, 5, 7, 9];
// numbers.forEach((element, index) => console.log(element * 2));

// Hàm filter:
// const numbers = [1, 2, 3, 4, 5, 7, 9];
// const newNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(newNumbers);

// Hàm find:
// const numbers = [1, 2, 3, 4, 5, 7, 9];
// const newNumbers = numbers.find((number) => number % 2 === 0);
// console.log(newNumbers);

// Ngoài ra: indexOf, findIndex, reverse, sort, ...

// 4. Arrow function
// Trong reactjs: có 2 loại component: class component và function component

// 5. Destructoring - Phân rã
// Array

// const listNumber = [3, 4, 5, 6];
// // console.log(listNumber[2]);
// // console.log(listNumber[3]);

// const [a, b, , d, f] = listNumber;
// console.log(a, b, d, f);

// Object
// const people = {
//   name: "Thịnh",
//   age: "25",
//   address: "Lang Son",
// };

// // console.log(people.address);

// const { name, age, address } = people;

// console.log(address);

// 6. Enhanced object literals
// const nameUser = "Nguyên";
// const ageUser = "30";

// Viết bt
// const people = {
//   nameUser: nameUser,
//   ageUser: ageUser,
// };

// Enhanced
// const people = {
//   nameUser,
//   ageUser,
// };

// console.log(people);

// 7. Spread Operation
// Array
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log("arr3", arr3);

// Object
// const people = {
//   name: "Quynh dep zaiii",
//   age: "26",
// };

// const newPeople = { ...people, name: "Quảng" };
// console.log("newPeople", newPeople);

/*
    {
        address: "Phu Tho",
        age: "26",
        name: "Quynh dep zaiii"
    }
*/

// ... được gọi là
// + Spread operation (Ngoài trừ trường hợp với function)
// + Rest parament (Chỉ khi sử dụng với function)

// function f(...rest) {
//   console.log(...rest);
// }

// f(10, 20, 30, 40, 50, 60, 70);

// 9. Module
// Xuất module (Export module)

// {} => từ khóa return
// ()

// Xuất định danh (name export)
// export const sum = (a, b) => a + b;

// // Xuất mặc định (Export default)
// const PI = 3.14;
// export default PI;
