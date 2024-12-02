// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console. 
//Then create a Student class that extends the Person class and adds a major property. Override the greet() method in 
//the Student class to log a different greeting message to the console.
// Create 2 variables, one of type Person and one of type Student and log them to console.

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;

    }

    greet() {
        console.log(`Hello my name is ${this.name}.`);
    }


}

class Student extends Person {
    constructor(name, age, gender, major) {
        super(name, age, gender);
        this.major = major;

    }

    greet() {
        console.log(`Hi, I'm ${this.name} and I'm studying ${this.major} `);
    }

}

const person1 = new Person("Aden", 2, "Female");
const student1 = new Student("Mevlüt", 30, "Male", "Director");

console.log(person1);
console.log(student1);

person1.greet();
student1.greet();



// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the console 
//(e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength and area properties. 
//Override the describe() method in the Square class to log a description of the square to the console (e.g. 
//"This is a blue square with a side length of 5 and an area of 25").

class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    describe() {
        console.log(`This is a ${this.color} ${this.name}.`);
    }
}

class Square extends Shape {
    constructor(name, color, sideLength) {
        super(name, color);
        this.sideLength = sideLength;
        this.area = sideLength * sideLength;
    }

    describe() {
        console.log(`This is a ${this.color} ${this.name} with a side length of ${this.sideLength} and an area of ${this.area}.`)
    }
}

let shape1 = new Shape("triangle", "purple");
let square1 = new Square("kare", "yellow", 5);

console.log(shape1);
console.log(square1);

shape1.describe();
square1.describe();


// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console indicating that 
//the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numDoors property. Override the start() method in 
//the Car class to log a different message to the console indicating that the car has started.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`The vehicle has started : ${this.make} ${this.model} ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoor) {
        super(make, model, year);
        this.numDoor = numDoor;
    }

    start() {
        console.log(`The car has started : ${this.make} ${this.model} ${this.year} with ${this.numDoor} doors.`);
    }
}

let vehicle1 = new Vehicle("Audi", "Q7", 2022);
let car1 = new Car("Kia", "EV9", 2024, 4);

console.log(vehicle1);
console.log(car1);

vehicle1.start();
car1.start();

// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is 
//an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, 
//and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to
// the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get 
//currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.

class BankAccount {
    Constructor(balance, interestRate) {
        this.balance = balance;
        this.interestRate = interestRate;
    }

    deposit(amount) {
        this.balance += amount;
        this._transactionHistory.push({
            type: "deposit",
            amount: amount,
            date: new Date().toLocaleDateString()
        });

    }


    withdraw(amount) {
        if (amount > this.balance) {
            console.log("insufficient balance.");
            return;
        }
        this.balance -= amount;
        this._transactionHistory.push({
            type: "withdrawal",
            amount: amount,
            date: new Date().toLocaleDateString()
        });
    }


    get transactionHistory() {
        return [...this._transactionHistory];
    }

    get currentBalance() {
        return this.balance;
    }
}

let account = new BankAccount(1000, 0.05);

account.deposit(200);
account.withdraw(150);
account.withdraw(1000);

console.log(account.transactionHistory);
console.log("Current Balance: " + account.currentBalance);

//4. Exercise is very difficult for me so I asked chatGPT for help. After asking ChatGPT about the 1st exercise, I did the other exercises myself.