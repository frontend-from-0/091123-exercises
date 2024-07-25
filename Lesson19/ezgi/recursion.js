// See completed in the lesson examples in the lesson files folder: https://github.com/frontend-from-0/group091123-files

// 4. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';

function removeTheChar(sentence,char){
	if(sentence.length===0){
		return "";
	}else{
		if(sentence[0]===char){
			return removeTheChar(sentence.slice(1),char);
		}else{
			return sentence[0] + removeTheChar(sentence.slice(1),char);
		}
	}
}

console.log("EX 4:" + removeTheChar(sentenceEx5,charToRemove))


// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

 function checkTheValue (numbers,value){
 	if(numbers.length === 0){
 		return false;
 	}else{
 		if(numbers[0]===value){
 			return true;
 		}else{
 			return checkTheValue(numbers.slice(1),value);
 		}
 	}
}
 console.log("EX5:" + checkTheValue(numbers,valueToCheck));

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


function flattenAnObject(obj){
	let result={};
	for(let i in obj){
		if(typeof obj[i] ==="object" && !Array.isArray(obj[i])){
			let nestedObj = flattenAnObject(obj[i]);
			result={...result,...nestedObj}
		} else {
			result[i]=obj[i];
		}
	}
	return result
}

console.log(flattenAnObject(nestedObj));

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

function findMaxDepth(obj){
    let maxDepth = 0;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let depth = 1 + findMaxDepth(obj[key]);
            maxDepth = Math.max(maxDepth, depth);
        }else{
			return maxDepth;
		}
    }

    return maxDepth;
}

console.log("EX7: " + findMaxDepth(nestedObjEx7));

// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';

function reverseOrderOfWords(sentence){
	let seperateWords = sentence.split(" ");
	if(seperateWords.length===1){
		return seperateWords;
}else{
	//return seperateWords[seperateWords.length-1] + " " + reverseOrderOfWords(seperateWords.lastIndexOf("")); // Is there anything that can make this algorithm rightly run?
	return reverseOrderOfWords(seperateWords.slice(1).join(" ")) + " " + seperateWords[0];
}
}

console.log("EX8:" + reverseOrderOfWords(sentenceEx8));

// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog ajsdhasjdh';

function findTheLongestWord(sentence){
	let words= sentence.split(" ");	
	if(words.length===1){
		return words.length;
	}else{
		const lengthOfFirstWord = words[0].length;
		let nextWord =findTheLongestWord(words.slice(1).join(" "));
		return Math.max(nextWord,words[1].length);

	}
	}
	console.log("Ex9:" + findTheLongestWord(sentenceEx9));

// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

function hasProperty(obj, prop) {  

    if (obj.hasOwnProperty(prop)) {
		return true; }

	for ( let key in obj){
		if(typeof obj[key] === 'object'){
		if(hasProperty(obj[key],prop)){
			return true ;
		}
	}

}
	return false ;
}

console.log(hasProperty(person,'city'));
