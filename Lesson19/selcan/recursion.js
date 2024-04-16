// See completed in the lesson examples in the lesson files folder: https://github.com/frontend-from-0/group091123-files

// 4. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';
 function removeCharacter(arr,val){
	if(arr.length===0){
		return "";
	} else {
		if (val === arr[0]){
		return removeCharacter(arr.slice(1),val)
	} else {
		return arr[0]+removeCharacter(arr.slice(1),val)
	}
 }}
 console.log(removeCharacter(sentenceEx5,charToRemove))

// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

function checkValue(array,value){
	if (array.length === 0){
		return false;
	} else {
		const firstElement=array[0];
		if (firstElement === value) {
			return true;
		} else {
				return checkValue(array.slice(1),value);
			}
		}
	}
	

	console.log(checkValue(numbers,valueToCheck));


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

function flattenObj(obj){
	let flatObj={};
	for(let key in obj){
		if(typeof obj[key] ==="object" && !Array.isArray(obj[key])){
			let nestedObj = flattenObj(obj[key]);
			flatObj={...flatObj,...nestedObj}
		} else {
			flatObj[key]=obj[key];
		}
	}
	return flatObj
}
console.log(flattenObj(nestedObj));


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

function maxDepth(obj){
	let max = 0;
	for(let key in obj){
	if (typeof(obj[key])==="object"){
		let depth = maxDepth(obj[key]);
		if(depth>max){
			max = depth
		}
	}
  }
}

// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';

function reverse(sentence){
	let reversedSentence ={};
	let words=sentence.split(" ");
	if(words.length===1){
		return sentence;
	}
	return reverse(words.slice(1).join(" ")) + " " + words[0]; 
}
	

console.log(reverse(sentenceEx8));

// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';
function longestWord(sentence,longest=""){
	if (!sentence) return longest;
	let words = sentence.split(" ");
	if (words.length === 0){
		return longest;
	}
	let current = words.shift();
	if (current.length > longest){
		longest = current.length;
	}
	return longestWord(words.join(" "),longest);
}
console.log(longestWord(sentenceEx9))
// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};
function check(obj, val) {
	for (let key in obj){
		if(typeof obj[key] === "object"){
			if (check(obj[key],val)){
			return true;
		}
		}
	} else if (key === val){
        return true;
    }
	return false;
}

console.log(check(person,age));
console.log(check(person,'city'));