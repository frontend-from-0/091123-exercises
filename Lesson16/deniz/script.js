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
function compareNumbers(firstNumber, secondNumber) {
	if (firstNumber > secondNumber) {
		return "The first number is greater than the second number.";
	} else if (firstNumber < secondNumber) {
		return "The first number is less than the second number.";
	} else {
		return "The first number is equal to the second number.";
	}
}

console.log("exercise 3", compareNumbers(1, 3));
console.log("exercise 3", compareNumbers(2, 1));
console.log("exercise 3", compareNumbers(4, 4));


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
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log("exercise 4:", checkNumber(5));
console.log("exercise 4:", checkNumber(-2));
console.log("exercise 4:", checkNumber(0));

// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log("exercise 6:", isLeapYear(2024));
console.log("exercise 6:", isLeapYear(2025));


// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.
function isAboveOrBelow(temperature) {
	if (temperature < 0) {
		return "Its frozen";
	} else {
		return "Its NOT frozen";
	}
}
console.log("exercise 7:", isAboveOrBelow(-10));
console.log("exercise 7:", isAboveOrBelow(10));

// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.
function checkingAge(age) {
	if (age <= 12) {
		return "Child";
	} else if (age >= 13 && age <= 19) {
		return "Teenager";
	} else if (age >= 20 && age <= 64) {
		return "Adult";
	} else if (age >= 65) {
		return "Senior Citizen";
	}
}
console.log("exercise 9:", checkingAge(12));
console.log("exercise 9:", checkingAge(20));

// 10. Write a function that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".
function checkVoting(age, isStudent) {
	if (age < 18 && isStudent === "yes") {
		return "You are a student and not old enough to vote";
	} else if (age >= 18 && isStudent === "no") {
		return "You are eligible to vote"; 
	} else if (age > 65) {
		return "You are a senior citizen";
	} else if (isStudent === "yes" && age >= 18) {
		return "You are old enough to vote";
	} 
}
console.log("exercise 10:", checkVoting(17, "yes"));
console.log("exercise 10:", checkVoting(20, "no"));
console.log("exercise 10:", checkVoting(18, "yes"));


// 11. Write a function that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

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

// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.
