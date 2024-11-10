// console.log("Hi")
// Arrays in JS

// Array is a data structure that can hold multiple similar type of elements.
// [23,65,98,90,62];
// ['Ram','Mohan', 'Sohan'];

let arr = ['Bumrah','Siraj', 'Surya','Virat','rohit','Devdutt','Dhoni', 'Jadeja','Bhuvi'];
// console.log(arr[1]); //Mohan
// console.log(arr[3]); //undefined
// console.log(arr.length); // It will return length of the array.

// let x = 10;
// x = 20;
// arr[1] = 'Rahul';
// arr[3] = 'Suresh';  //It will insert an element at 3rd index.

// console.log(arr.length);

// push method - Add elements to the end of an array

// push() -> 

// arr.push('Srishti', 'Ravi', 'Kushal', 'Ankit');
// console.log(arr);

// pop method -> Remove the last element from an array.

// pop() -> 
// arr.pop();
// console.log(arr);

// shift and unshift methods

// arr.shift(); //It will remove the first element of the array.
// console.log(arr);
// arr.unshift('Ashwal', 'Govide','Shivam','Shakti'); // Will add the element at the begining.
// console.log(arr);


let player = ['Bumrah','Siraj', 'Surya','Siraj','Virat','rohit','Devdutt','Dhoni', 'Jadeja','Bhuvi'];
// console.log(player);

// slice() -> returns a copy of a portion of an array.

let anotherPlayers = player.slice(1,5);
// console.log(anotherPlayers);

// indexOf() -> this method will return the first index at which the searched element can be found in the array.

// console.log(player.indexOf('Siraj')); // 1
// console.log(player.indexOf('Ramesh')); // -1 - Searched element not present in the array

// console.log(player.lastIndexOf('Siraj')); // returns the last index at which the searched element can be found or -1 if it is not present.

// forEach() - 

// let nums1 = [1,2,4,5,7,10];
// console.log(nums1);
// for(let i =0; i<nums1.length;i++)
// {
//     console.log(nums1[i]);
// }

// Syntax of forEach

// nums1.forEach(function(currenValue, index, array){
//     // you can write your code
// })

// nums1.forEach(function (item, index){
//     // console.log(`Number is ${item} and is available at ${index} index`);
//     console.log(item*3);
// })


let arrNums = [23,56,67,12,69,90,54,62,81,41,34,87,84,34,8];
// let evenNums = [];
// let oddNums = [];
// arrNums.forEach(function(item, index){
//     if(item % 2 === 0)
//     {
//         evenNums.push(item);
//     }else{
//         oddNums.push(item);
//     }

// })

// console.log(oddNums);
// console.log(evenNums);


// map, filter and reduce() 

// function add(a,b){
//     return a+b;
// }

const add = (a,b) => {
    return a+b;
}
// console.log(add);

// console.log(add(3,10));

// const arrDemo = [2,5,1,7,3,9,4,22,64,55,77];
// const squares = arrDemo.map(item => item*item);
// console.log(squares);


// // filter - It is used to create a new array only with elements that match a specified condition.

// const evens =  arrDemo.filter(item => item % 2 === 0);
// console.log(evens);

// reduce - It is a method which can be used to reduce an entire array to a sinle value.


const arr5 = [1,2,3,4,5];

// reduce((acc, curr, index, array){
    // }, initial value of acc)
    
    const sum = arr5.reduce((acc, curr) => acc + curr, 0);
    // console.log(sum);
    
    
const arr6 = [1,53,31,733,49,65];

const maxNum = arr6.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, arr6[0]);
console.log(maxNum);


// acc - for me a variable which is storing the max value.
// arr6[0] for is the max element - we have assumed here
