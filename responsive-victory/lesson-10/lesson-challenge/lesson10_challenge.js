// Lesson 10 – Challenge
// Focus: Scope, Conditionals, Calculations

// Challenge 1: Global vs Local Scope
let outsideVar = "I'm global!";

function scopeDemo() {
    let insideVar = "I'm local!";
    console.log(outsideVar);
    console.log(insideVar);
}

scopeDemo();

console.log(outsideVar); // Output: I'm global!
// console.log(insideVar);  insideVar is not defined

// Challenge 2: Odd or Even
const isOddOrEven = (num) => {
    if (typeof num !== 'number') {
        return 'Please enter a valid number.';
    }
    return num % 2 === 0 ? 'Even' : 'Odd';
};

console.log(isOddOrEven(7)); // Output: Odd
console.log(isOddOrEven(12)); // Output: Even

// Challenge 3: Calculate Total with Tax
const calculateTotal = (price, taxRate) => {
    const taxAmount = price * taxRate;
    const total = price + taxAmount;
    return total.toFixed(2); // Returns string with 2 decimal places
};

const result = calculateTotal(20, 0.088);
console.log('Total cost: $' + result); // Output: Total cost: $22.00
