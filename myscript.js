// variable declaration

x = 5;
y = 6;
z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;

let a = 10;
let b = 20;
let c = a + b;
document.getElementById("demo1").innerHTML =
"The value of c is: " + c;

// functions
// Arithmetic operations
const multiply = (a, b, c) => {
    return a * b * c;
}
console.log(multiply(4, 3, 4));
console.log(multiply(3, 3, 4));
console.log(multiply(5, 9, 4));
console.log(multiply(9, 5, 4));
console.log(multiply(28, 4, 4));

const square = (x) => {
    return x * x;
}
console.log(square(5));
console.log(square(10));
console.log(square(15));
console.log(square(20));
console.log(square(25));

let num = 5;
console.log(`The square of ${num} is ${square(num)}`);

// loops
// for loop to print squares of first 5 natural numbers
// example 1
for (let i = 1; i <= 5; i++) {
    console.log(`The square of ${i} is ${square(i)}`);
}
// example 2
for (let i = 6; i <= 10; i++) {
    console.log(`The square  of ${i} is ${square (i)}`);
}

// while loop to print squares of first 5 natural numbers
let j = 1;
while (j <= 5) {
    console.log(`The square of ${j} is ${square(j)}`);
    j++;
}

// do while loop to print squares of first 5 natural numbers
let k = 7;  
do {
    console.log(`The square of ${k} is ${square(k)}`);
    k++;
} while (k <= 5);

// for...in loop to iterate over an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// for...of loop to iterate over an array
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}


// Document Object Model (DOM) manipulation
document.getElementById("demo2").innerHTML = "Hello, World!";


document.getElementById("demo3").style.color = "red";
document.getElementById("demo3").style.fontSize = "20px";
document.getElementById("demo3").style.fontWeight = "bold";
document.getElementById("demo3").style.backgroundColor = "yellow";
document.getElementById("demo3").style.padding = "10px";
document.getElementById("demo3").style.border = "2px solid black";
document.getElementById("demo3").style.textAlign = "center";
document.getElementById("demo3").style.margin = "10px";
document.getElementById("demo3").style.borderRadius = "5px";







