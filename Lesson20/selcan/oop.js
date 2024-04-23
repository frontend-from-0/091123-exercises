// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console. Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and log them to console.

class Person {
    constructor(name,age,gender){
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    greet(){
        return `Hi!My name is ${this._name}.I'm ${this._age} years old.I'm a ${this._gender}.`
    }
}
class Student extends Person {
    constructor(name,age,gender){
        super(name,"yüzmeyi çok sever.",gender)
    }
    greet(){
        return `I don't like swiming.`
    }
}
const Student1 = new Student("Ali",23,"erkek");
console.log(Student1.greet());
console.log(Student1);
const Person1 = new Person("jale",54,"kadin");
console.log(Person1);



// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength and area properties. Override the describe() method in the Square class to log a description of the square to the console (e.g. "This is a blue square with a side length of 5 and an area of 25").
class Shape {
    constructor(name,color){
        this._name = name;
        this._color =color;
    }
    description(){
        return `This is a ${this._color} square.`
    }
}
class Square extends Shape{
    constructor(name,color,sideLength){
        super(name,color);
        this._sideLength = sideLength;
        this._area = sideLength * sideLength;
    }
    description(){
        return `This is a ${this._color} square with a side length of ${this._sideLength} and an area of ${this._area}.`
    }
}
const square1 = new Square("kare","blue",20)
const Shape1 = new Shape("kare","pink");
console.log("1:",Shape1.description());
console.log("2:",square1);
console.log("3:",square1._area);
console.log("4:",square1.description());
console.log("5:",Shape1.description());





// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numDoors property. Override the start() method in the Car class to log a different message to the console indicating that the car has started.

class Vehicle {
    constructor(make,model,year){
        this._make = make;
        this._model = model;
        this._year = year;
    }
    start(){
        console.log(`${this._make} mali,${this._model} model Vehicle has started.`)
    }
}
class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
    }
    start(){
        console.log(`${this._make} mali,${this._model} model car has started.`)
    }
}
const Vehicle1 = new Vehicle("Çin","Ford",2016);
const Car1 = new Car("Alman","Mercedes",2020)


Vehicle1.start();
Car1.start();




// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.

class BankAccount{
    constructor(balance,interestRate){
        this._balance = balance;
        this._interestRate = interestRate;
        this._transactionHistory = [];

    }
    deposit(amount){
        this._balance += balance;

    }
    // I could'nt make the rest of it.
}

