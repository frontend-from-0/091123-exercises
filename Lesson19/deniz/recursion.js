// See completed in the lesson examples in the lesson files folder: https://github.com/frontend-from-0/group091123-files

// 4. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';
function removeOccurrences (string, character) {
    if (string === '' || string.indexOf(character) === -1) {
        return '';
    }

	if (string[0] === character) {
		return removeOccurrences(string.slice(1), character);
	}

	return string[0] + removeOccurrences(string.slice(1), character);
}

console.log("egzersiz 4:", removeOccurrences(sentenceEx5, charToRemove));

// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

function includesValue(array, value, index = 0) {
    // Base case: If index is equal to the array length, return false
    if (index === array.length) {
        return false;
    }
    
    // If the current element equals the value, return true
    if (array[index] === value) {
        return true;
    }
    
    // Recursive case: Call includesValue with incremented index
    return includesValue(array, value, index + 1);
}



console.log(includesValue(numbers, valueToCheck)); // Output: true

console.log(numbers.length);
// 6. Write a recursive function to flatten an object with nested objects into a single-level object.
const nestedObj = {
	name: 'John',
	age: 30,
	address: {
		street: '123 Main St',
		city: 'New York',
		country: 'USA',
	},
	hobbies: ['reading', 'coding'],
	social: {
		twitter: '@johndoe',
		linkedIn: 'johndoe',
	},
};

// 7. Write a recursive function to find the maximum depth of a nested object.
const nestedObjEx7 = {
	a: 1,
	b: {
		c: 2,
		d: {
			e: 3,
			f: {
				g: 4,
			},
		},
	},
	h: 5,
};
// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';
// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';
// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};
