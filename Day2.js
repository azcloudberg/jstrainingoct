
// Operators, Control Flow Statements - If else, switch
// Loops
// Arrays & Objects in detail
// Start DOM Manipulation

let a = 10;
let b = 20;
let sum = a + b; //addition operation - Expression, a and b are known as operands and '+' here is an operator.
let sub = a - b;


// operand1  operator  operand2
//   a + b
//  a * b

// Javascript has three types of oprators Unary, Binary and ternary (conditional Operator).

// A binary operator requires two operands - 1 before the operator and one after the operator.
// e.g. a * b
// operand1  operator  operand2

// Unary Operator

// It requires only single oprand, either before the operator or after it.
// for(let i=0;i<n;i++)
// for e.g.  operator operand // operand operator - i++ or ++i

// operator operand  -  prefix unary operator
// operand operator - postfix unary operator


// a + b; - binary - two operands
// a - single operand

// a= 10
// a = a+1 //11
// console.log(a); //11
// a++; -> a = a + 1;
// a++; -> a = a+1; - Unary operator
// a+=2 //increase the value by 2.



// Assignment operator

// It is used to assign values to a variable. (=)

// a = 40;
// let x = (a * 20)
// console.log(x);

// Comparison Operators
// These operators are used to compare the operands and return a logical value based whether the comparison is true or false.
// Operands can be anything, you can compare two characters, strings, numbers, or object values.

let num2 = "30"; //string
// console.log(typeof num2)
let nums = 30; //number
// mystring == nums;
// console.log(num2 == nums); //true or false //it will only compare the values.
// console.log(num2 === nums); //true or false //it will compare both the values as well as the data type.
// console.log(num2 !== nums); //true or false //it will compare both the values as well as the data type.
// console.log(num2 > nums); //false
// console.log(num2 >= nums); //true

// Arithmetic Operator
// This operator will take numerical values as its operands and perform arithmetic operation on them and return a single numerical value.

let x = a + b;

// console.log(x);

// +, -, *, / - Standard operators


// remainder (%)
// It is a binary operator and it returns the remainder of dividing two numbers.
// console.log(10%3); //1

// ++ (Increment operator) - It will increase the value of operand by 1. And it is a unary operator.
// -- (Decrement Operator) - It will decrease the value of operand by 1. It is an unary operator.

// console.log(--x);

// Negation Operator
// console.log(-x);


// ** (Exponentiation Operator)
// console.log(2**3);

// Logical Operators - &&, || , ??, !

// true or false

// Logical AND (&&)

// Problem statement: It want to check if a student is eligible for apple student discount or not?

// Two Conditions to check: 
// 1. Wheater he is a student or not.
// 2. Age should be greater than 18.

let ageOfStudent = 19;
let isStudent = true;

// if(ageOfStudent > 18 || isStudent)
// {
//    console.log("You are eligible for the Student Discount, Here is your coupon code: HZYUKWLA200");

// }
// else {
//     console.log("Sorry! You are not eligible for the Student Discount.");
//     // else this part will be executed.
// }


// Ternary operator - It is a shorthand way to write an if...else statement. It is called ternary operator because it involves three parts:
// A condition, a result if true, and a result if false.

// condition ? expression to execute if condition is true : expression to execute if condition is false

// let output = ageOfStudent > 18 && isStudent ? "You are eligible for the Student Discount, Here is your coupon code: HZYUKWLA200" : "Sorry! You are not eligible for the Student Discount."
// console.log(output);


// Loops in JavaScript

// for loops, while, do..while loops, for..of loops, for..in loops, for..each;



// for loop - It is one of the most commonly used loops in js. It has three parts:

// Initialization: A variable is initialized once.
// condition: The loop runs as long as the condition provided is true
// Increment/Decrement operator: The variable will update after every loop iteration.

// Syntax of for loop

// for (intialization for a variable; condition; increment/decrement)
// {
//     // piece of code 
// }

// for(let i=1; i<=10; i++)
// {
//     console.log("Hi this is krish");
// }


// while loop

// while(condition)
// {

//     // increment/decrement the variable;
// }

// let i = 1;
// while ( i <=5 ){
//     console.log("Count is: ", i);
//     i++; //Increment operator is imp to avoid infinite loop
// }


// do while

// do {
//  code block to be executed
// } while(condition);

// let i = 6;

// do{
//     console.log("Count is: ", i);
//     i++;
// }while(i <= 5);


// syntax for for of loop

// for (variable of iterable(array)){
//     code block to be executed
// }

let fruits = ['mango', 'apple', 'banana', 'pineapple', 'orange'];

// console.log(fruits);

// for (let fruit of fruits){
//     console.log(fruit);
// }

// for in loops - They used for iterating over objects

// console.log(users);

// syntax for for in loops

// for (key in object)
// {
//     code block to be executed
// }


let users = [
    {
        name: "Krish",
        age: 32
    },
    {
        name: "Raman",
        age: 12
    },
    {
        name: "Raghav",
        age: 44
    }
];

// for (let key in users) {
//     // console.log(users["name"]);
// }

for(let user of users)
{
    for (let key in user)
    {
        // console.log(user[key]);
        if(key=="name"){
            console.log(user[key]);
        }

    }
}












