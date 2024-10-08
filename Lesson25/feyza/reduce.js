/* array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
  
- callback: A function that is executed on each element of the array. It takes four arguments:
- accumulator: The accumulated value that is returned after each iteration. It starts with the value of initialValue on the first iteration and is the result of the previous iteration in subsequent iterations.
- currentValue: The current element being processed in the array.
- currentIndex: The index of the current element being processed.
- array: The array on which reduce() was called.

- initialValue: An optional initial value for the accumulator. If not provided, the first element of the array is used as the initial value and the iteration starts from the second element.
*/


// Reduce with named callback fucntion defined outside of reduce
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
console.log(numbersEx1.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
}));


// Exercise 2:
// Find the maximum value in the given array. (Hint: Use -Infinity to compare values to)
const numbersEx2 = [8, 3, 11, 6, 4];

const maxNumber = numbersEx2.reduce((max, current) => {
  return current > max ? current : max; // "?" ni ne için kullandık tam anlamadım.
}, -Infinity);

console.log("Maximum value:", maxNumber);

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


// Exercise 4:
// Calculate the average of all numbers in the given array.
const numbersEx4 = [10, 20, 30, 40, 50];

const sum = numbersEx4.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

const average = sum / numbersEx4.length;

console.log("Average:", average);

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







