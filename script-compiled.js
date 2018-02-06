// Task 1 //
const sayHello = (x, y) => console.log(`${x} ${y}`);
sayHello('Hello', 'World');

// Task 2 //
const multiply = (a = 1, b = 1) => console.log(a * b);
multiply(5);

// Task 3 //
const average = (...num) => num.reduce((a, b) => a + b, 0) / num.length;
console.log(average(1, 2));

// Task 4 //
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// Task 5 //

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [,, firstname,, lastname] = array;

console.log(firstname, lastname);
