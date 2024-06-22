// See completed in the lesson examples in the lesson files folder: https://github.com/frontend-from-0/group091123-files

// 4. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';

function removeCharRecursive(sentence, charToRemove) {
    if (sentence.length === 0) {
        return '';
    }
``
    if (sentence[0] === charToRemove) {
        return removeCharRecursive(sentence.slice(1), charToRemove);
    } else {
        return sentence[0] + removeCharRecursive(sentence.slice(1), charToRemove);
    }
}

const result = removeCharRecursive(sentenceEx5, charToRemove);

console.log(result);

// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

function includesValueRecursive(array, valueToCheck) {
    if (array.length === 0) {
        return false;
    }

    if (array[0] === valueToCheck) {
        return true;
    } else {
        return includesValueRecursive(array.slice(1), valueToCheck);
    }
}
const result1 = includesValueRecursive(numbers, valueToCheck);

console.log(result1);

// 6. Write a recursive function to flatten an object with nested objects into a single-level object.

function flattenObject(obj, parentKey = '') {
    let result = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const flattened = flattenObject(obj[key], `${parentKey}${key}.`);
            result = { ...result, ...flattened };
        } else if (Array.isArray(obj[key])) {
            obj[key].forEach((item, index) => {
                result[`${parentKey}${key}[${index}]`] = item;
            });
        } else {
            result[`${parentKey}${key}`] = obj[key];
        }
    }
    return result;
}

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

const flattenedObj = flattenObject(nestedObj);
console.log(flattenedObj);



// 7. Write a recursive function to find the maximum depth of a nested object.

function maxDepth(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return 0;
    }

    let depth = 0;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const currentDepth = 1 + maxDepth(obj[key]);
            depth = Math.max(depth, currentDepth);
        }
    }

    return depth;
}

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

const depth = maxDepth(nestedObjEx7);

console.log(depth); 



// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';

function reverseWords(sentence) {
if (sentence.trim().length === 0) {
	return '';
}

const lastSpaceIndex = sentence.lastIndexOf(' ');

if (lastSpaceIndex === -1) {
	return sentence;
}

const beforeLastSpace = sentence.slice(0, lastSpaceIndex);
const afterLastSpace = sentence.slice(lastSpaceIndex + 1);

return reverseWords(afterLastSpace) + ' ' + beforeLastSpace;
}

const reversedSentence = reverseWords(sentenceEx8);
console.log(reversedSentence);


// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';

function longestWordLength(sentence) {
if (!sentence.trim()) {
	return 0;
}

const words = sentence.split(' ');

function findLongestWord(wordsArray) {
	if (wordsArray.length === 1) {
		return wordsArray[0].length;
	}

	const firstWordLength = wordsArray[0].length;
	const restOfTheWordsLength = findLongestWord(wordsArray.slice(1));

	return Math.max(firstWordLength, restOfTheWordsLength);
}

return findLongestWord(words);
}
const longestLength = longestWordLength(sentenceEx9);

console.log(longestLength);

// 10. Write a recursive function to check if an object contains a specified property.

function hasProperty(obj, property) {
if (obj === null || typeof obj !== 'object') {
	return false;
}

if (obj.hasOwnProperty(property)) {
	return true;
}

for (let key in obj) {
	if (hasProperty(obj[key], property)) {
		return true;
	}
}

return false;
}

const person = {
name: 'John',
age: 30,
address: {
	city: 'New York',
	country: 'USA',
},
};

const propertyToCheck = 'country';

console.log(hasProperty(person, propertyToCheck));