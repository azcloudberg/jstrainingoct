// age = undefined;
// myGender = undefined;
myName = undefined;

// hoisting - js interpreter will your entire variable declartions, function to the top of the program before execution


console.log("main.js is connected...");


// Variables

// Variables are containers which are used to store some information.
// The information can be anything, for e.g your name, age, phonenumber, etc. (isAdmin, firstName, lastName)

// var, let & const using these 3 keywords we can declare a js variable

// var {variablename} = ;

// var myName;
// var myName = "Krish";

// console.log(myName); //undefined
// console.log(age);


let age = null;

// const myGender = null;

const new1 = null;

console.log(age); //10
var yourName = "Sonu";
// var myName = "Suchitra";
// console.log(myName); //Suchitra



// You can redeclare a variable declared using var keyword
var yourName = 89199393;

yourName = "Suman"; // You can re-assign values to a variable declared using var keyword.
console.log(yourName);

// let keyword

// Another keyword for declaring variables in js.

let phoneNumber = 73829291938; //variable declaration and assignment
phoneNumber = 8399202093; // re assigning values

console.log(phoneNumber);

let email; // variable declaration
email = "krish@intellipaat.com"; //value assignment


// let email; //redeclaration - not allowed in let

email = "abc@intellipaat.com"; // variables declared using let keyword can be re-assigned new values 

let score = null;
score = 10;
score = 20;
const myFirstName = "Raghav";

// const keyword


// It is used to create a constant variable

// const API_KEY = 'yasdkhasg_askjd as1dah asd as';
// pi = 3.19; //not allowed, values to a constant variable can only be assigned while its declaration.

// console.log(pi);
// console.log(myFirstName);
// console.log(pi);
// console.log(myFirstName);

// var can be redecalred, can be reassigned a value, can be accessed before it declaration
// let can be reassigned but cant redeclared, cannot be accessed before its initialization.
// const can only be assigned values at the declaration cannot be reassigned values, cannot be re-declared, cannot be accessed before it initilization.

// Scope of variables -  will cover it later

// variable namings

// let userName; // camelCase - allowed
// let user_name; // not a good practice - avoide these kind of naming
// let underAge10; // we can have letters in out variable names
// let 10underAge; // This is not allowed
// const const; //not allowed you cannot use a reserved keyword as a variable name.
// let _finalName; allowed in js
// let fina-name; not allowed in js

// Data Types in JavaScript

// 1 Primitive Values
// 2 Reference Values

// Primitive Values

// Number - It represents both integers as well as floating point nums.
let num1 = 42;
let pi_1 = 3.14;

// String - Sequence of Characters 
let welcome = `Hi guys welcome to the session`;

// Boolean - It can only have two values either true or false.
let isLoggedIn = false; //true or false

// Undefined - It indicates that a variable has been declared but has not assigned any value yet.
let localName; //undefined
// console.log(localName);
// localName = "Raghavi";
// console.log(localName);

// null - absence of any value.

let weatherData = null;

// Reference Values - They are mutable objects which stores values as refernce. 

// Object - It is a collection of key-value pairs.

let myObj = {
    name: "Mandira",
    age: 19,
    phone: 1765473882,
    email: "abc@gmail.com"
};

let user = {
    name: "Name of the user",
    email: "email of the user",
    pass: "store the password",
    username: "username",
    phone: 7837282,
}

// console.log(user);

// Arrays - 

// marks - 89, 76,26,67,78

// let marks1 = 89;
// let marks2 = 76;
// let marks3 = 26;

let arrOfMarks = [89,76,26,67,78];
// console.log(arrOfMarks);

let fruits = ['apple', 'banana', 'orange', 'pineapple'];
// console.log(fruits);

// dates

let today = new Date();
// console.log(today.getDay());

// Type conversion



let num = 87654;
// num = 74.472;
console.log(typeof num) //number
let str = String(num);
// let str = num;
console.log(typeof str) //number

let text = "Hi everyone" + 20;
console.log(text)












