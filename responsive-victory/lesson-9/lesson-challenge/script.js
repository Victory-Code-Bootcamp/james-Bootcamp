// const name = prompt('Enter your name:');

// switch (name) {
//     case 'James':
//         alert('Welcome, James!');
//         break;
//     case 'Castro':
//         alert('Hello, Castro!');
//         break;
//     case 'Angelina':
//         alert('Hi Angelina!');
//         break;
//     case 'Anthony':
//         alert('Hello Anthony!');
//     default:
//         alert('Hi there!');
// }
// // The code above prompts the user for their name and uses a switch statement to display a different message based on the name entered.
// const age = prompt('Enter your age:');

// function isMinor(age) {
//     return age <= 18 ? true : false;
// }

// console.log(isMinor(age));
// // The code above prompts the user for their age and uses a function to check if the user is a minor (18 or younger).
// function getCode(chars) {
//     if (chars > 15) return 'AA';
//     else if (chars > 13) return 'AB';
//     else if (chars > 10) return 'BB';
//     else if (chars > 7) return 'BC';
//     else if (chars > 5) return 'CC';
//     else return 'DD';
// }

// console.log(getCode(14)); // Outputs: 'AB'
// // The code above defines a function that returns a code based on the number of characters passed to it.
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
// The code above defines four functions for basic arithmetic operations: addition, subtraction, multiplication, and division. Each function takes two numbers as arguments and returns the result of the operation.

let isValid = false;

while (!isValid) {
    let userInput = prompt(
        'Enter the word we are learning (no spaces, just the word):'
    );

    if (!userInput || !/^[a-zA-Z]+$/.test(userInput)) {
        alert(
            'Invalid input. Please use only letters—no spaces, numbers, or symbols.'
        );
        continue;
    }

    if (!/^JavaScript$/.test(userInput)) {
        alert('You misspelled the word. Please try again.');
        continue;
    }

    isValid = true;
    alert('Success! You spelled it correctly: JavaScript.');
}
// The code above prompts the user to enter the word "JavaScript" and validates the input. It checks for invalid characters and spaces, and if the input is incorrect, it prompts the user to try again until they enter the correct word.
