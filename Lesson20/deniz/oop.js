// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console. Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and log them to console.
class Person {
    constructor (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet () {
        return "Hello, I'm " + this.name + "and my age is " + this.age;
    }
}

class Student extends Person {
    constructor(name, age, gender, major) {
        super(name, age, gender);
        this.major = major;
    }

    greet() {
        return `Hi! My name is ${this.name}, and I'm ${this.age} years old. My majority is ${this.major}` ;
}
}

const person = new Person("Messi ", 36, " Male");
const student = new Student("Deniz", 18, "Male", "Computer Science");
console.log(person.greet(), student.greet());

// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength and area properties. Override the describe() method in the Square class to log a description of the square to the console (e.g. "This is a blue square with a side length of 5 and an area of 25").
class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    describe() {
        console.log("This is a " + this.color + this.name);
    }
}

class Square extends Shape {
    constructor(name, color, sideLength) {
        super(name,color);
        this.sideLength = sideLength;
    }
    get area() {
        return this.sideLength  ** 2;
    }
    describe() {
        console.log(`This is a ${this.color} ${this.name} with a side length of ${this.sideLength} and an area of ${this.area}`);
      }
}

const mySquare = new Square("square", "blue", 5);
mySquare.describe();

// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numDoors property. Override the start() method in the Car class to log a different message to the console indicating that the car has started.
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("The vehicle " + this.make + this.model + this.year +  " has started.")
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    start() {
        console.log(`The ${this.make} ${this.model} ${this.year} with ${this.numDoors} doors has started.`);
    }
}

const myCar = new Car("Toyota", "Corolla", 1999, 4);
myCar.start();

// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.

class BankAccount {
    constructor(balance, interestRate) {
      this.balance = balance;
      this.interestRate = interestRate;
      this.transactionHistory = [];

    }
  
    deposit(amount) {
      this.balance += amount;
      this.transactionHistory.push({
        type: "deposit",
        amount: amount,
        date: new Date().toLocaleDateString()
      });
      console.log(`Deposited ${amount} into the account. Current balance: ${this.balance}`);
    }
  
    withdraw(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
          this.transactionHistory.push({
            type: "withdrawal",
            amount: amount,
            date: new Date().toLocaleDateString()
          });
          console.log(`Withdrawn ${amount} from the account. Current balance: ${this.balance}`);
        } else {
          console.log("Insufficient balance.");
        }
      }
  
      getTransactionHistory() {
        // Return a copy of the transaction history array
        return [...this.transactionHistory];
      }
    
      getCurrentBalance() {
        // Calculate the current balance based on the transaction history
        let balance = this.balance;
        for (const transaction of this.transactionHistory) {
          if (transaction.type === "deposit") {
            balance += transaction.amount;
          } else {
            balance -= transaction.amount;
          }
        }
        return balance;
      }
    }

  // Example usage
  const account = new BankAccount(1000, 0.05);
  account.deposit(500);
  account.withdraw(200);
  console.log(account.getCurrentBalance); // Accessing the current balance directly
  console.log(account.getTransactionHistory);
//   this last exewrcise was very hard and complicated for me:( and I got some help from chatgpt!
