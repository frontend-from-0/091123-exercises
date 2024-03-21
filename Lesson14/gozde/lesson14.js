// 1. Declare a variable x and initialize it to 5.
// Declare a variable y and initialize it to 3.
// Declare a variable z and initialize it to the sum of x and y.

const x = 5;
const y = 3;
const z = x + y;

console.log('Exercise 1:', z);
console.log('------------------------');
// 2. Declare a variable name and initialize it to your name as a string.
// Declare a variable age and initialize it to your age as a number.
// Declare a variable phrase and initialize it to the string "Hello, world!".
// Add name and age to the sentence above. "Hello, world! My name is (name). I'm (age) years old.".
 const myName = "feyza";
 const myAge = "55";
 const mySent = "Hello World!"
 console.log('Exercise 2:'+ mySent + ' My name is '+ myName + ' .I\'m '+ myAge + ' years old.' );

 // \ is used in JS to escape character
 console.log('https:\/\/google.com');
 //String interpolation: 
 console.log('Exercise 2:',
 `${mySent} My name is ${myName}. I'm ${myAge} years old.`
 );

console.log('------------------------');
// 3. Declare a variable number1 and initialize it to 10.
// Declare a variable number2 and initialize it to 3.
// Declare a variable result and initialize it to the quotient of number1 divided by number2.
// Declare a variable number3 and initialize it to the difference between number1 and number2.

const number1 = 10;
const number2 = 3;
const result = number1 / number2;
const number3 = number1 - number2;
console.log('Exercise 3: ' + result + ' ' + number3);
console.log('Exercise 3: ',  result, number3);

console.log('------------------------');
// 4. Declare a variable firstName and initialize it to your first name as a string.
// Declare a variable lastName and initialize it to your last name as a string.
// Declare a variable fullName and initialize it to the concatenation of firstName and lastName.

const firstName = "Selcan";
const lastName = "Ece";
const fullName = firstName + " " + lastName;
console.log('Exercise 4:', firstName, lastName, fullName);
console.log('------------------------');
// 5. Declare a variable number4 and initialize it to 7.
// Declare a variable number5 and initialize it to 2.
// Declare a variable result2 and initialize it to the product of number4 and number5 (multiply numbers).

const number4 = 7;
const number5 = 2;
const result2 = number4 * number5;

console.log('Exercise 5:', result2);
console.log('------------------------');
// 6. Declare a variable PI and initialize it to the value of PI (3.14159). There's a built in function to do that (Math.PI).
const PI = Math.PI; 
console.log('Exercise 6: ' + PI); 
console.log('------------------------');
// 7. Declare a variable counter and initialize it to 0.
// Increment the counter variable by 1 using 4 different ways to increment numbers.
let counter = 0;
++counter; // prefix increment
console.log('Exercise 7.1:' , counter);
counter++; // postfix increment
console.log('Exercise 7.2:' , counter);
counter = counter+1;
console.log('Exercise 7.3:' , counter);
counter += 1;
console.log('Exercise 7.4:' , counter);

console.log('------------------------');
// 8. Declare a variable temperature and initialize it to 20.
// Increase the value of temperature by 5 and log the result to console.
let temperature = 20;
temperature += 5;

console.log('Exercise 8:' , temperature );
console.log('------------------------');
// 9. Declare a variable number6 and initialize it to 6. Declare a variable number7 and initialize it to `++number6` (number6 incremented using prexif ++ operator). Log both values to the console.

const number6 = 6;
const number7 = ++number6;
console.log('Exercise 9.1:' , number6 );
console.log('Exercise 9.2:' , number7 );

// 10. Declare a variable number8 and initialize it to 8. Declare a variable number9 and initialize it to `number8++` (number8 incremented using postfix ++ operator). Log both values to the console.

const number8 = 8;
const number9 = number8++;
console.log('Exercise 10.1:' , number8 );
console.log('Exercise 10.2:' , number9 );
 
// 11. Declare a variable number10 and initialize it to -3. Use the postfix ++ operator to increment the value of num by 1, then multiply the result by 2 and log it to the console.

let number10 = -3;
let number11 = number10++;
let number12 = number11 * 2;
console.log('Exercise 11:' , number12 );


// 12. Declare two variables a and b and initialize them to 2 and 3, respectively. Use the prefix ++ operator to increment the value of a by 1, then add b to the result and log it to the console.

let a = 2;
let b = 3;
let c = a++;
let result12 = c + b;
console.log('Exercise 12:' , result12 );


// 13. Generate a random number in a range from 11 (including) to 35 (excluding).

let randomNumber13 = Math.floor(Math.random() * (35 - 11) + 11);
console.log(randomNumber13);


// BONUS: generate random number in a range from 0 (excluding) to 10 (including)
// Use Math.floor() and Math.random() to do that.
// Math.random() generate random number between 0 and 1 (not including 1)
// Math.floor()

const randomNumber = Math.floor(Math.random()*10 + 1);
console.log(randomNumber);
