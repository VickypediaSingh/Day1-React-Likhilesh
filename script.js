// var has a function scope
// let has a block scope

// ============================================================================================

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// // both arr have same address ie. Shallow Copy

// if (arr1 === arr2) console.log("Yes");
// else console.log("No");
// //  output : Yes

// if (arr1 == arr2) console.log("Yes");
// else console.log("No");
// //  output : Yes

// ============================================================================================

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// // both arr have different addresses ie. Deep Copy

// if (arr1 === arr2) console.log("Yes");
// else console.log("No");
// //  output : No

// if (arr1 == arr2) console.log("Yes");
// else console.log("No");
// //  output : Yes

// ============================================================================================

// let str1 = "abc";
// let str2 = "abc";

// if (str1 === str2) console.log("Yes");
// else console.log("No");
// //  output : Yes
// // as str is primitive dataType so reference is pointless

// if (str1 == str2) console.log("Yes");
// else console.log("No");
// //  output : Yes

// ============================================================================================

// function print1(x) {
//   console.log(x);
// }
// // behaves like a var

// const print2 = function print1(x) {
//   console.log(x);
// };
// // has a block scope

// print1("abc");
// print2("abc");
// // same output for both : abc

// ============================================================================================

// function print1(x) {
//   console.log(x);
// }

// print1("abc");
// print2("abc");
// // Uncaught ReferenceError: Cannot access 'print2' before initialization

// const print2 = function print1(x) {
//   console.log(x);
// };
// // bahaves like a let

// ============================================================================================

// function print1(x) {
//   console.log(x);
// }

// const print2 = function print1(x) {
//   console.log(x);
// };

// function print1(x) {
//   console.log(x, ": but changed ");
// }

// print1("abc");
// print2("abc");

// // output
// // abc : but changed
// // abc

// // print1 function is changing its behaviour
// // so dont do it, use const instead

// ============================================================================================

// // function declaration
// function print1(x) {
//   console.log(x);
// }

// // function assignment with named function
// const print2 = function print1(x) {
//   console.log(x);
// };

// // function assignment with anonymous function
// const print3 = function (x) {
//   console.log(x);
// };

// // function assignment with arrow function
// const print4 = (x) => {
//   console.log(x);
// };

// ============================================================================================

// const arr1 = [1, 2, 3];
// const arr2 = arr1.map((elm) => elm * 2);
// console.log(arr2)
// // [2, 4, 6];

// const arr1 = [1, 2, 3];
// const arr2 = arr1.map((elm) => {
//   elm * 2;
// });
// console.log(arr2);
//  [undefined, undefined, undefined]

// const arr1 = [1, 2, 3];
// const arr2 = arr1.map((elm) => {
//   return elm * 2;
// });
// console.log(arr2);
// // [2, 4, 6];

// const arr1 = [1, 2, 3];
// arr1.forEach(console.log);
// // 1 0 (3) [1, 2, 3]
// // 2 1 (3) [1, 2, 3]
// // 3 2 (3) [1, 2, 3]
// // ie. elm index arr

// const arr1 = [1, 2, 3];
// arr1.forEach((a, b, c) => {
//   console.log(a, b, c);
// });
// // 1 0 (3) [1, 2, 3]
// // 2 1 (3) [1, 2, 3]
// // 3 2 (3) [1, 2, 3]
// // ie. elm index arr
// // means forEach by default gives 3 values viz (elm, index, arr)

// ============================================================================================
// IMP functions
// a) forEach      returns nothing
// b) map          returns array
// c) filter       returns nothing
// d) reduce       returns a value

// //EG d) reduce       returns a value
// const arr1 = [1, 2, 3];
// const ans = arr1.reduce((acc, elm) => {
//   return acc + elm;
// });
// console.log(ans);               //6

// const arr1 = [1, 2, 3];
// const initVal = 100;
// const ans = arr1.reduce((acc, elm) => {
//   return acc + elm;
// }, 100);
// console.log(ans);               //106

// ============================================================================================

// const arr1 = [{}, ["name", "amar"], ["platform", "PPa"]];
// const ans = arr1.reduce((acc, item) => {
//   acc[item[0]] = item[1];
//   return acc;
// });
// console.log(ans);

// // {name: 'amar', platform: 'PPa'}

// ============================================================================================

// if (null == undefined) {
//   console.log("Equal");
// } else {
//   console.log("Not Equal");
// }
// // Equal, both are falsy value

// if (null === undefined) {
//   console.log("Equal");
// } else {
//   console.log("Not Equal");
// }
// // Not Equal

// console.log(typeof null);           //object
// console.log(typeof undefined);      //undefined

// ============================================================================================

// const arr1 = [1, 2, 3];
// console.log(arr1.length);                   //3

// const obj = { name: "amar", platform: "PPa" };
// console.log(obj.length);                    //undefined,
// // as length has no meaning for objects

// // but if we want the no. of key:value pairs, then
// console.log(Object.keys(obj).length);       //2

// ============================================================================================

// for loop in Object and arrays
// for-in loop in Object and arrays
// for-of loop in Object and arrays

// ============================================================================================

// const parent = document.getElementById("root");
// const heading = document.createElement("h3");
// heading.textContent = "Dynamic text";
// parent.appendChild(heading);

// const ol = document.createElement("ol");

// const li1 = document.createElement("li");
// li1.textContent = "item 1";
// ol.appendChild(li1);
// const li2 = document.createElement("li");
// li2.textContent = "item 2";
// ol.appendChild(li2);

// parent.appendChild(ol);      //join at end

// // Hi there...
// // Dynamic text
// // item 1
// // item 2

// const parent = document.getElementById("root");
// const heading = document.createElement("h3");
// heading.textContent = "Dynamic text";
// parent.appendChild(heading);

// const ol = document.createElement("ol");

// const li1 = document.createElement("li");
// li1.textContent = "item 1";
// ol.appendChild(li1);
// const li2 = document.createElement("li");
// li2.textContent = "item 2";
// ol.appendChild(li2);

// parent.prepend(ol); //join at start

// // Hi there...
// // item 1
// // item 2
// // Dynamic text

// append vs appendChild
const parent = document.getElementById("root");
const heading = document.createElement("h3");
heading.textContent = "Dynamic text";
parent.append(heading);

const ol = document.createElement("ol");

const li1 = document.createElement("li");
li1.textContent = "item 1";
ol.appendChild(li1);
const li2 = document.createElement("li");
li2.textContent = "item 2";
ol.appendChild(li2);

parent.prepend(ol); //join at start

// Hi there...
// item 1
// item 2
// Dynamic text

// append adds everything, a node, a textContent etc.
// appendChild adds a node only , ie. a proper tag only

// ============================================================================================
