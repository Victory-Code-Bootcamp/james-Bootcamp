// Challenge 1: Function to find the larger number
// function getLargerNumber(a, b) {
//     return a > b ? a : b;
// }

// console.log(getLargerNumber(10, 20)); // Outputs: 20
// Challenge 2: Check divisibility
// function isDivisible(a, b) {
//     return b !== 0 && a % b === 0;
// }

// console.log(isDivisible(10, 2)); // Outputs: true
// console.log(isDivisible(10, 3)); // Outputs: false
// const birthday = new Date('December 9, 1969 23:15:30');
// // Use getDay to get the day of the week
// const dayOfWeek = birthday.getDay();
// // Switch statement for day of the week
// switch (dayOfWeek) {
//     case 0:
//         console.log('Sunday');
//         break;
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('Invalid day');
// }
// Challenge 4: calculateSum function
function calculateSum(a = 0, b = 0) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Please provide valid numbers';
    }

    a = Math.round(a ?? 0);
    b = Math.round(b ?? 0);

    const sum = a + b;

    if (sum > 100) {
        return 'Sum is too large';
    }

    return sum;
}

console.log(calculateSum(50.6, 51)); // Outputs: 'Sum is too large'
console.log(calculateSum(20.4, 30)); // Outputs: 50
console.log(calculateSum('text', 30)); // Outputs: 'Please provide valid numbers'
