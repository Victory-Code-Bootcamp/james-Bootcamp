// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// function sumEven(numbers) {
//     let sum = 0;
//     numbers.forEach((num) => {
//         if (num % 2 === 0) {
//             sum += num;
//         }
//     });
//     return sum;
// }

// function capitalizeAll(words) {
//     return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
// }

// function printOdds() {
//     for (let i = 1; i <= 50; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }

// function capitalizeEvenIndexes(words) {
//     return words.map((word, index) => {
//         return index % 2 === 0
//             ? word.charAt(0).toUpperCase() + word.slice(1)
//             : word;
//     });
// }

function writeOutput(text) {
    document.getElementById('output').textContent = text;
}
const handleIndex = (i) => {
    if (i % 3 === 0 && i % 5 === 0) {
        return 'FizzBuzz\n';
    } else if (i % 3 === 0) {
        return 'Fizz\n';
    } else if (i % 5 === 0) {
        return 'Buzz\n';
    } else {
        return i + '\n';
    }
};
const fizzBuzz = () => {
    let result = '';
    for (let i = 1; i <= 100; i++) {
        result += handleIndex(i);
    }
    return result;
};

function sumEven(numbers) {
    let sum = 0;
    numbers.forEach((num) => {
        if (num % 2 === 0) {
            sum += num;
        }
    });
    return sum;
}

function capitalizeAll(words) {
    return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
}

function printOdds() {
    let result = '';
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            result += i + '\n';
        }
    }
    return result;
}

function capitalizeEvenIndexes(words) {
    return words.map((word, index) => {
        return index % 2 === 0
            ? word.charAt(0).toUpperCase() + word.slice(1)
            : word;
    });
}

function runFizzBuzz() {
    writeOutput(fizzBuzz());
}

function runSumEven() {
    const result = sumEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    writeOutput(`Sum of even numbers: ${result}`);
}

function runCapitalizeAll() {
    const result = capitalizeAll(['hello', 'JAMES']);
    writeOutput(`Capitalized: ${result.join(', ')}`);
}

function runPrintOdds() {
    writeOutput(printOdds());
}

function runCapitalizeEvenIndexes() {
    const result = capitalizeEvenIndexes([
        'bootcamp',
        'participants',
        'rock',
        'javascript',
        'paper',
        'soda',
        'pizza',
    ]);
    writeOutput(`Result: ${result.join(', ')}`);
}
