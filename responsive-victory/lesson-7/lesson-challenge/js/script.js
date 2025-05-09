// ===== Lesson 7 Challenge =====
let myFirstName = 'YourName';
console.log(`The number of letters in my name is: ${myFirstName.length}`);

let luckyNumberOne = 7;
let luckyNumberTwo = 13;
console.log(
    `My first lucky number is ${luckyNumberOne}, my second favorite lucky number is ${luckyNumberTwo}.`
);

let unassignedVariable;
console.log(unassignedVariable); // undefined

var globalVar = 'Hello';
let blockVar = 'Hi';
const constantVar = 'Hey';

globalVar = 'World'; // Works
blockVar = 'Hola'; // Works
// constantVar = 'Bonjour'; // Error

function scopeExample() {
    var funcScoped = 'I am function scoped';
    if (true) {
        let blockScoped = 'I am block scoped';
        console.log(blockScoped); // Accessible
    }
    console.log(funcScoped); // Accessible
    // console.log(blockScoped); // Error
}
scopeExample();

// Arithmetic practice
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);

console.log(a * b);
console.log(a / b);
console.log(a % b);

// ===== Take-Home Challenge =====
const children = 2;
const partner = 'Alex';
const city = 'Seattle';
const job = 'Engineer';

console.log(
    `You will be a ${job} in ${city}, and married to ${partner} with ${children} kids.`
);

const birthYear = 1990;
const futureYear = 2030;
const possibleAge1 = futureYear - birthYear;
const possibleAge2 = possibleAge1 - 1;
console.log(
    `I will be either ${possibleAge2} or ${possibleAge1} in ${futureYear}.`
);
