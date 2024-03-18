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

// 2. Write a function that takes age as input. If the age is less than 18, print "Sorry, you are not old enough to vote". 
//If the age is between 18 and 65 (inclusive), print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".

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

// 3. Write a function that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to 
//the second number using if else statement.

function isFirstNumber(number1, number2){
	if(number1 > number2){
		console.log("Exercise 3", number1, number2, "is greater than.");
	} else if(number1 === number2){
		console.log("Exercise 3", number1, number2, "is equal.");
	}else{
		console.log("Exercise 3", number1, number2, "is less than.");
	}
}
console.log("Exercise 3", isFirstNumber(8,95));

// 4. Write a function that takes in a string and checks if the first letter is uppercase using if else statement.

function isFirstLetterUppercase(stringToCheck){
const firstLetter = stringToCheck[0];
  if (firstLetter === firstLetter.toUpperCase()) {
    return true;
  } else {
    return false;
  }

}
console.log(isFirstLetterUppercase("Television"));

// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.

function isPositive(number){
	if(number > 0) {
		return "positive";
	} else if(number === 0){ 
	    return "zero";
	} else{
        return "negative";
	}
}
console.log("Exercise 5", isPositive(29));

// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400)
// or not using if else statement.

function isYears(leapYear){
	if(leapYear % 4 === 0 && leapYear % 100 !== 0 && leapYear % 400 !== 0){
		return "It is a leap year";
	} else{
		return "It is not a leap year";
	}
}
console.log("Exercise 6", isYears(2035));

// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.

function isTemperature(degree){
	if(degree > 0){
		return "Temperature is above freezing";
	}else if(degree < 0){
		return "Temparature is below freezing";
	} 
}
console.log("Exercise 7",isTemperature(-18));

// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity


function BMI(height,weight){
let result = weight / height * 2;
   if(result < 18.5){
	console.log("Exercise 8", "Underweight", + result);
   } else if(result >= 18.5 && result <= 24.9){
	console.log("Exercise 8", "Healty Weight", + result);
   } else if(result >= 25 && result <= 29.9){
	console.log("Exercise 8", "Overweight", + result);
   } else if(result >= 30){
	console.log("Exercise 8", "Obesity", + result);
   }
}
console.log(BMI(55,1.58));

// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64),
// or senior citizen (age 65 and above) using if else statement.

function isPersonAge(age){
	if(age > 0 && age <= 12){  
	return "Child";
} else if (age >= 13 && age <= 19){
    return "Teenager";
} else if(age >= 20 && age <= 64){
	return "Adult";
} else if(age >= 65){
    return "Senior Citizen";
}
}
console.log("Exercise 9", isPersonAge(28));

// 10. Write a function that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, 
//print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and 
//the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".
// If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".


function canVote(age){
	let person = student;
	if(age < 18 && person){
		return "You are a student and not old enough to vote";
	}else if(age >= 18 && age <=65 && !person){ 
	    return "You are eligible to vote";
	}else if(age >=65){
		return "You are a senior citizen";
	}else if(age > 18 && person){
		return "You are old enough to vote";
	}
}
console.log("Exercise 10", canVote(49));

// 11. Write a function that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience
// are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are 
//between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of 
//experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

function jobOffer(salary,experience){
	if(salary < 30000 && experience <5){
		print("Sorry, we cannot offer you the job at this time");
	}else if(salary < 50000 && experience > 5 && experience < 10){
		print("We can offer you the job at a lower salary");
	}else if(salary >= 50000 && experience >= 10){
		print("We can offer you the job at the requested salary");
	}
}

console.log("Exercise 11",jobOffer(48000,7));

// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". 
//If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive),
// print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

function isScoreTest(score){
	if(score < 60){
		print("You failed the test");
	}else if(score <= 60 && score >= 70){
		print("You passed the test, but your grade is not great");
	}else if(score <= 71 && score >= 80){
		print("You got a B");
	}else if(score <=81 && score >= 90){
		print("You got an A");
	}else if(score > 90){
		print("You got an A+ - Great job!");
	}
}
console.log("Exercise 12", isScoreTest(100));

// 13. Write a function that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle 
//the different cases.

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

// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or 
//failing (D, F). Use a switch statement to handle the different cases.
function gradeLetter(letter){
	letter=letter.toUpperCase();
	switch (letter) {
		case A:
		case B:
		case C:
			return "You passed :)";
			break;
        case D:
		case F:
			return "You failed :(";
			break;
        default:
			return "Value is not supported";
	}
}

// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to
// seven dog years). If the user enters a negative number or zero, display an error message.

function calculatesDogYears(age){
	let dogYears = age * 7;
	if(age <=0){
		prompt("Error: Age must be a positive number.");
	} else{
		prompt("Your age in dog years is ${dogYears}.");
	}
}
console.log("Exercise 15", calculatesDogYears(28));