// Math Challenge 1: Determine the larger number
const num1 = 42;
const num2 = 36;
const largest = num1 > num2 ? num1 : num2;
console.log(`The larger number is: ${largest}`);

// Math Challenge 2: Generate a random number rounded down
const randomNum = Math.floor(Math.random() * 100);
console.log(`Random number (rounded down): ${randomNum}`);

// Math Challenge 3: Prompt user for a number and show the square root
const userInput = prompt('Enter a number:');
if (!isNaN(userInput)) {
    const squareRoot = Math.sqrt(userInput);
    alert(`The square root of ${userInput} is: ${squareRoot}`);
} else {
    alert('Please enter a valid number.');
}

// // =====================
// // Date Challenges
// // =====================

// Date Challenge 1: Output current date as string
const currentDate = new Date();
console.log(`Current Date as String: ${currentDate.toString()}`);
// Date Challenge 2: Get the current year
const currentYear = currentDate.getFullYear();
console.log(`Current Year: ${currentYear}`);
// Date Challenge 3: Add 10 days to current date and show new date
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10);
console.log(`Date after adding 10 days: ${futureDate.toDateString()}`);
