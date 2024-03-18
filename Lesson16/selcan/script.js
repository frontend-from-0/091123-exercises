/*  
Global scope

Functions

Functions are one of the fundamental building blocks of the language. They are reusable blocks of code that can be executed when needed. Functions encapsulate a set of statements and can be called or invoked to perform a specific task or calculation. 

Function Declaration
Anonymus function
function () {
  console.log('Hello world');
}
Anonymus function with parameters
function (parameter1, parameter2) {
  return parameter1 * parameter2;
};

Named function:
function multiplyTwoNumbers(parameter1, parameter2) {
  return parameter1 * parameter2;
}
multiplyTwoNumbers(1, 4);

Function Expression
const sumOfTwoNumber = function (parameter1, parameter2) {
  return parameter1 * parameter2;
};

Arrow Function (introduced in ECMAScript 6 OR ES6)
const greet = () => {
  console.log('Hello world');
};

greet();
*/
// IIFE (Immediately Invoked Function Expression)
(function multiplyTwoNumbers(parameter1, parameter2) {
	console.log('Hello');
	return parameter1 * parameter2;
})();

// console.log(multiplyTwoNumbers(1, 4));

/* 
Conditional statements (if...else, switch)

Conditional statements in JavaScript are used to make decisions and execute different blocks of code based on certain conditions. They allow you to control the flow of your program and determine which code should be executed depending on whether a condition evaluates to true or false.

if Statement
if (condition) {

}
// Same line if condition:
if (today === 'Wednessday') console.log('Join the lesson');

if ... else Statement
if (condition) {
 ... some code
} else if (another condtion) {
 ... some code
} else {
 ... some code
}

Switch statement
switch (day) {
  case 'Monday':  // this means that day === 'Monday'
   console.log('It\'s Monday'); 
   break;
  case 'Tuesday':
    console.log('It\'s Tuesday');
    break; // Use break key word if you don't use return key word in the statement;
    .... cases for other days of the week
  default:
    console.log('Unknow day');
    break;
}
*/

let age = 51;
if (age > 60) {
	console.log('Senior citizen. Can vote!');
} else if (age > 18) {
	console.log('Can vote!');
} else {
	console.log('Can not vote!');
}

// 1. Write a function that takes in a number and checks if it's even or odd using if else statement.

function isEvenOrOdd(number) {
	const reminder = number % 2;
	// === - strict equality
	if (reminder === 0) {
		return 'Even';
	} else {
		return 'Odd';
	}
}

console.log('Exercise 1', isEvenOrOdd(9), isEvenOrOdd(2));
// 2. Write a function that takes age as input. If the age is less than 18, print "Sorry, you are not old enough to vote". If the age is between 18 and 65 (inclusive), print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".
function canVote(age) {
	if (age < 18) {
		return 'Sorry, you are not old enough to vote';
	} else if (18 <= age && age <= 65) {
		return 'You are eligible to vote';
	} else {
		return 'You are a senior citizen';
	}
}

console.log('Exercise 2', canVote(10), canVote(30), canVote(75));

// 3. Write a function that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.
function isGreaterNumber(sayi1,sayi2){
	if (sayi1 > sayi2){
		console.log("Exercise3;",sayi1 , sayi2 ,"'den büyükktür.");
	} else if(sayi1 === sayi2){
		console.log("Exercise3;",sayi1 , sayi2 ,"'ye eşittir.") ;
	} else{
		console.log("Exercise3;",sayi1 , sayi2 ,"'den küçüktür.") ;
	}

}
isGreaterNumber(11,45);

// 4. Write a function that takes in a string and checks if the first letter is uppercase using if else statement.
function isFirstLetterUppercase(stringToCheck){
const firstLetter = stringToCheck[0];
  if (firstLetter === firstLetter.toUpperCase()) {
    return true;
  } else {
    return false;
  }

}
console.log(isFirstLetterUppercase("Televiision"));

// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.
function ifPositive(number){
	if(number > 0){
		return "Positive";
	}else if(number===0){
		return "Zero";
	}else{
		return "negative";
	}
}
console.log(Exercise5,ifPositive(76));

// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.
function isYears(year){
	if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0)
	{
        return "It is a leap year."
	} else {
		return "It isn't a leap year."
	}	
}
console.log(isYears(2018));

// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.
function isTemperatureAbove(degree){
	if (degree < 0){
		return "Exercise7;It is below freezing";
	} else {
		return "Exercise7; It is above freezing"
	}
}
console.log(isTemperatureAbove(4));

// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function BMI(weight,height){
let sonuc = weight / height*height;
if (sonuc <18.5){
	return "Exercise8: Underweight";
} else if (sonuc >=18.5 && sonuc <24.9){
	return "Exercise8: Healthy Weight";
} else if (sonuc >=25 && sonuc <29.9){
	return "Exercise8: Overweight";
} else if (sonuc >=30){
	return "Exercise8: Obesity";}
}
console.log(BMI(90,1.70));

// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.
function isChild(age){
	if (age>0 && age<12){
		return "Exercise9:Child";
	} else if(age>13 && age<19){
	    return "Exercise9:Teenage";
    } else if(age>20 && age<64){
	    return "Exercise9:Adult";
    } else if(age>65){
	    return "Exercise9:Senior citizen";}
	}

	console.log(isChild(34));

// 10. Write a function that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".


function canVote(age,isStudent){
	if (age<18 && isStudent){
		return "You are a student and not old enough to vote";}
	else if (age>18 && age<=65 && !isStudent){
		return "You are eligible to vote";}
    else if(age>65){
	    return "You are a senior citizen";}
	else if(age>=18 && isStudent){
		return"You are old enough to vote";}
	}
	console.log(canVote(34));
	
// 11. Write a function that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".
function offerJob(salary,experience){
	if (salary<30.000 && experience<5){
		return "Sorry, we cannot offer you the job at this time";
	} else if(salary<50.000 && experience>5 && experience<10){
		return "We can offer you the job at a lower salary";
	} else if(salary>=50.000 && experience>=10){
		return "We can offer you the job at the requested salary";
	}
}
console.log(offerJob(salary,experience));


// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".
function score(number){
	if (number<60){
		return "You failed the test";
	} else if(number>=60 && number<=70){
		return "You passed the test, but your grade is not great";
	} else if(number>71 && number<=80){
		return "You got a B";
	} else if(number>81 && number<=90){
		return "You got an A";
	} else if(number>90){
		return "You got an A+ - Great job!";
	}
}
console.log(score(85));

// 13. Write a function that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.

function getSeasonName(numberOfAMonth) {
	switch (numberOfAMonth) {
      // numberOfAMonth === 12
		case 12:
		case 1:
		case 2:
      // console.log('Winter');
			// break;
			return 'Winter';
		case 3:
		case 4:
		case 5:
			return 'Spring';
		case 6:
		case 7:
		case 8:
			return 'Summer';
		case 9:
		case 10:
		case 11:
			return 'Autumn';
    default: 
      return 'Value is not supported, please enter value between 1 and 12.';
	}
}

console.log('Exercise 13', getSeasonName(1), getSeasonName(5), getSeasonName(20));

// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.
function gradeLetter(letter){
	letter=letter.toUpperCase();
	switch(letter){
		case A:
		case B:
		case C:
			return "you passed";
		case D:
		case F:
			return "you failed";
		default: 
            return "Value is not supported";
	}
}
console.log(gradeLetter(D));
// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.
function isYear(age){
	let dogYear=age * 7;
	if (age <=0)
	return "Value is not supported";
}
console.log(isYear(34));
