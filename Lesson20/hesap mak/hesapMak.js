// Exercise 1: Basic Calculator Object
// Objective: Create a Calculator class that performs basic arithmetic operations.
// Instructions:
// Define a Calculator Class:
// The class should have the following methods: add, subtract, multiply, and divide.
// Each method should take two numbers as arguments and return the result of the operation.
// Instantiate the Calculator Object:
// Create an instance of the Calculator class.
// Call each method with appropriate arguments and log the results to the console.

class calculator{
    add(sayi1,sayi2){
        return sayi1+sayi2;
    }
    subtract(sayi1,sayi2){
        return sayi1-sayi2;
    }
    multiply(sayi1,sayi2){
        return sayi1*sayi2;
    }
    divide(sayi1,sayi2){
        return sayi1/sayi2;
    }
}

const islem=new calculator();
const sonuc1 = islem.add(7,99)
console.log(sonuc1);
console.log("sonuc2:",islem.divide(99,3));

// Exercise 2: Advanced Calculator Object with State
// Objective: Enhance the Calculator class to maintain a running total and add methods for clearing and retrieving the total.
// Instructions:
// Extend the Calculator Class:
// Add a property total to keep track of the running total.
// Modify the arithmetic methods (add, subtract, multiply, and divide) to update the total property instead of returning the result.
// Add a clear method to reset the total to zero.
// Add a getTotal method to retrieve the current total.
// Instantiate and Use the Calculator Object:
// Create an instance of the Calculator class.
// Perform a series of operations and log the total after each operation.
// Clear the total and log the result.


class calculator{
    constructor(total){
        this.total=total;
    }
    add(sayi1,sayi2){
        this.total=sayi1+sayi2;
    }
    subtract(sayi1,sayi2){
        this.total=sayi1-sayi2;
    }
    multiply(sayi1,sayi2){
        this.total=sayi1*sayi2;
    }
    divide(sayi1,sayi2){
        this.total=sayi1/sayi2;
    }
    clear(){
        this.total=0;
    }
    getTotal(){
        return this.total;
    }
}
const hesapMakinasi=new calculator();
hesapMakinasi.add(22,43);
console.log("Toplama sonucu:",hesapMakinasi.getTotal());
hesapMakinasi.subtract(76,33)
console.log("Çıkarma sonucu:",hesapMakinasi.getTotal());

