/* array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
  
- callback: A function that is executed on each element of the array. It takes four arguments:
- accumulator: The accumulated value that is returned after each iteration. It starts with the value of initialValue on the first iteration and is the result of the previous iteration in subsequent iterations.
- currentValue: The current element being processed in the array.
- currentIndex: The index of the current element being processed.
- array: The array on which reduce() was called.

- initialValue: An optional initial value for the accumulator. If not provided, the first element of the array is used as the initial value and the iteration starts from the second element.
*/


// Reduce with named callback function defined outside of reduce
// [1, 2, 3, 4, 5].reduce(callback);
// function callback(accumulator, currentValue, currentIndex, array) {
//   console.log('accumulator', accumulator);
//   console.log('currentValue', currentValue);
//   console.log('currentIndex', currentIndex);
//   console.log('array', array);
//   return 'hello world';
// }

// Reduce with array function syntax
// [1, 2, 3, 4, 5].reduce((accumulator, currentValue, currentIndex, array) => {
//   console.log('accumulator', accumulator);
//   console.log('currentValue', currentValue);
//   console.log('currentIndex', currentIndex);
//   console.log('array', array);
//   return 'hello world';
// });

// Reduce with anonymus function syntax
// [1, 2, 3, 4, 5].reduce(function (accumulator, currentValue, currentIndex, array) {
//   console.log('accumulator', accumulator);
//   console.log('currentValue', currentValue);
//   console.log('currentIndex', currentIndex);
//   console.log('array', array);
//   return 'hello world';
// });


// Exercise 1:
// Calculate the sum of all numbers in the given array.
const numbersEx1 = [1, 2, 3, 4, 5];
console.log(numbersEx1.reduce((accumulator,currentValue) => {
  console.log(accumulator,currentValue);
  return accumulator + currentValue;
}));


// Exercise 2:
// Find the maximum value in the given array. (Hint: Use -Infinity to compare values to)
const numbersEx2 = [8, 3, 11, 6, 4];

const maxNumber = numbersEx2.reduce((max, currentValue) => {
    return Math.max(max, currentValue);
}, -Infinity);

console.log(maxNumber); // Output: 11

// Exercise 3: Explain the code
// Count the occurrences of each element in the given array and return an object with the counts.
const elements = ['a', 'b', 'a', 'c', 'b', 'a'];

const elementCounts = elements.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(elementCounts); // Output: { a: 3, b: 2, c: 1 }

// we have an array which called 'elements'
// we use reduce method 
// inside the reduce method; first paramether is callback function and the second parameter is the initial value for accumulator
// We check if currentValue exists as a property in the accumulator 
// after iterating all elements of the array, reduce method returns to accumulator
// finally we log the 'elementCounts' to the console, which shows the occurances of elements in the 'elemens' array

// Exercise 4:
// Calculate the average of all numbers in the given array.
const numbersEx4 = [10, 20, 30, 40, 50];

const sum = numbersEx4.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / numbersEx4.length;

console.log(average); 

// Exercise 5: Explain the code below
// Count the number of unique elements in the array.
const numbersEx5 = [1, 2, 3, 2, 4, 3, 5];
const numbers = [1, 2, 3, 2, 4, 3, 5];

const uniqueCount = numbers.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []).length;

console.log(uniqueCount); // Output: 5
 
// we have an array called numberEx5, which has several elements
 // we use reduce method the iterate numbersEx5 array
 // inside the reduce method; first parameter şs callback function, and the second parameter is initial value for accumulator
 // the currentValue parameter shows the current element being processed from the 'numberEx5' array
 // we check if 'currentValue' exists in accumulator aray using the includes method.
 // then we get the length of the elements array using .length method, which gives us the count 
 // finally we log the 'uniqueCount' to the console, which shows the number of unique elements in 'numberEx5' array




