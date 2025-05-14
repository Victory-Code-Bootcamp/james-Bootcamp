// const name = prompt('Enter your name:');

// switch (name.toLowerCase()) {
//     case 'Alice':
//         alert('Welcome, Alice!');
//         break;
//     case 'Bob':
//         alert('Hello, Bob!');
//         break;
//     default:
//         let formattedName =
//             name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//         alert('Hi there, ' + formattedName + '!');
//         break;
// }

// let name = prompt('Enter your name:');

// switch (name.trim().toLowerCase()) {
//     case 'alice':
//         alert('Welcome, ' + formatName(name) + '!');
//         break;
//     case 'bob':
//         alert('Hello, ' + formatName(name) + '!');
//         break;
//     default:
//         alert('Hi there, ' + formatName(name) + '!');
//         break;
// }

// function formatName(name) {
//     if (!name) return '';
//     name = name.trim();
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

import { getValidName } from './utils/inputUtils.js';

const name = getValidName();

switch (name.toLowerCase()) {
    case 'alice':
        alert('Welcome, ' + name + '!');
        break;
    case 'bob':
        alert('Hello, ' + name + '!');
        break;
    default:
        alert('Hi there, ' + name + '!');
        break;
}

// const age = Number(prompt('Enter your age:'));

// function isMinor(age) {
//     return age <= 18 ? true : false;
// }

// console.log(isMinor(age));
// function getCode(chars) {
//     if (chars > 15) return 'AA';
//     else if (chars > 13) return 'AB';
//     else if (chars > 10) return 'BB';
//     else if (chars > 7) return 'BC';
//     else if (chars > 5) return 'CC';
//     else return 'DD';
// }

// console.log(getCode(14)); // Example usage
// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(5, 3));

// function subtract(num1, num2) {
//     return num1 - num2;
// }
// console.log(subtract(10, 4));

// function multiply(num1, num2) {
//     return num1 * num2;
// }
// console.log(multiply(3, 4));

// function divide(num1, num2) {
//     return num1 / num2;
// }
// console.log(divide(12, 3));
