// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const combined = [...arr1, ...arr2];

// console.log(combined); // [1, 2, 3, 4]
// const obj1 = { name: 'John' };
// const obj2 = { age: 30 };

// const merged = { ...obj1, ...obj2 };

// console.log(merged); // { name: 'John', age: 30 }
// function collectArgs(...args) {
//     return args;
// }

// console.log(collectArgs(1, 2, 3)); // [1, 2, 3]
// const numbers = [1, 2, 3];

// const [a, b, c] = numbers;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// const person = { name: 'John', age: 30 };

// const { name, age } = person;

// console.log(name); // John
// console.log(age); // 30
// const person = { name: 'John' };

// const { name, age = 'Unknown' } = person;

// console.log(name); // John
// console.log(age); // Unknown
function printPerson({ name, age }) {
    console.log(name); // John
    console.log(age); // 30
}

printPerson({ name: 'John', age: 30 });
