// Challenge 1
const DonisKia = {
    make: 'Kia',
    model: 'Soul',
    year: 2022,
    color: 'Silver',
};
console.log('Challenge 1 - DonisKia Object:', DonisKia);

// Challenge 2
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
};
console.log('Challenge 2 - Car Year:', car.year);

// Challenge 3
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}
const myRectangle = new Rectangle(5, 3);
console.log('Challenge 3 - Rectangle Area:', myRectangle.area());

// Challenge 4
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus;
    }

    getSalary() {
        return this.salary + this.bonus;
    }
}

const managerJohn = new Manager('John', 5000, 1000);
console.log('Challenge 4 - Manager Salary:', managerJohn.getSalary());
