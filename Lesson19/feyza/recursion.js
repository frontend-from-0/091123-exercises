// See completed in the lesson examples in the lesson files folder: https://github.com/frontend-from-0/group091123-files

// 4. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = "Hello, how are you?";
const charToRemove = "o";

function removeCharacter(str, charToRemove) {
  if (str.length === 0) {
    return "";
  }

  let firstChar = str[0];

  let remainingStr = removeCharacter(str.slice(1), charToRemove);

  if (firstChar === charToRemove) {
    return remainingStr;
  } else {
    return firstChar + remainingStr;
  }
}
let result = removeCharacter(sentenceEx5, charToRemove);
console.log(result);

// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

function includesValue(arr, valueToCheck) {
  if (arr.length === 0) {
    return false;
  }
  if (arr[0] === valueToCheck) {
    return true;
  }

  return includesValue(arr.slice(1), valueToCheck);
}
let result2 = includesValue(numbers, valueToCheck);
console.log(result2);

// 6. Write a recursive function to flatten an object with nested objects into a single-level object.
const nestedObj = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "coding"],
  social: {
    twitter: "@johndoe",
    linkedIn: "johndoe",
  },
};

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

let flattened = flattenObject(nestedObj);
console.log(flattened);

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
function findMaxDepth(obj) {
  if (typeof obj !== "object" || obj === null) {
    return 0;
  }
  let maxDepth = 0;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let depth = findMaxDepth(obj[key]);

      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
  }

  return maxDepth + 1;
}
let maxDepth = findMaxDepth(nestedObjEx7);
console.log(maxDepth);

// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = "Hello, how are you?";

function reverseWords(sentence) {
  if (sentence.trim().indexOf(" ") === -1) {
    return sentence;
  }

  let firstSpaceIndex = sentence.indexOf(" ");

  let firstWord = sentence.slice(0, firstSpaceIndex);
  let restOfSentence = sentence.slice(firstSpaceIndex + 1);

  return reverseWords(restOfSentence) + " " + firstWord;
}

let reversed = reverseWords(sentenceEx8);
console.log(reversed);

// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = "The quick brown fox jumps over the lazy dog";

function findLongestWordLength(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }
  let firstSpaceIndex = sentence.indexOf(" ");
  let firstWord, restOfSentence;

  if (firstSpaceIndex === -1) {
    firstWord = sentence;
    restOfSentence = "";
  } else {
    firstWord = sentence.slice(0, firstSpaceIndex);
    restOfSentence = sentence.slice(firstSpaceIndex + 1);
  }

  let maxLengthInRest = findLongestWordLength(restOfSentence);

  return Math.max(firstWord.length, maxLengthInRest);
}
let longestWordLength = findLongestWordLength(sentenceEx9);
console.log(longestWordLength);

// 10. Write a recursive function to check if an object contains a specified property.
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

function hasProperty(obj, prop) {
  if (obj === null || typeof obj !== "object") {
    return false;
  }
  if (obj.hasOwnProperty(prop)) {
    return true;
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "object") {
      if (hasProperty(obj[key], prop)) {
        return true;
      }
    }
  }

  return false;
}
console.log(hasProperty(person, "name"));
console.log(hasProperty(person, "city"));
console.log(hasProperty(person, "nation"));

//Biraz karmaşık bir konu anladığımı söyleyemem.
