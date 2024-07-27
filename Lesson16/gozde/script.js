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

console.log("exercise 3.1", compareNumbers(1, 3));
console.log("exercise 3.2", compareNumbers(2, 1));
console.log("exercise 3.3", compareNumbers(4, 4));



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

function checkNumber(num) {

if (num > 0) {
	return "The number is positive.";
}
else if (num < 0) {
	return "The number is negative.";
}
else {
	return "The number is zero.";
}
}
console.log(checkNumber(9));

// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.

function isLeapYear(year) {if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
	return true; 
} else {
	return false; 
}
}
console.log(isLeapYear(2023));


// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.

function checkFreezing(temperature) {if (temperature > 0) {
	return "The temperature is above freezing.";
}
else if (temperature < 0) {
	return "The temperature is below freezing.";
}
else {
	return "The temperature is exactly freezing.";
}
}
console.log(checkFreezing(27));

// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function calculateBMI(height, weight) {
let heightInMeters = height / 100;

let bmi = weight / (heightInMeters * heightInMeters);

if (bmi < 18.5) {
	return "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
	return "Healthy Weight";
} else if (bmi >= 25 && bmi <= 29.9) {
	return "Overweight";
} else {
	return "Obesity";
}
}
console.log(calculateBMI(23, 18));

// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

function checkAgeGroup(age) {

if (age >= 0 && age <= 12) {
	return "Child";
}
else if (age >= 13 && age <= 19) {
	return "Teenager";
}
else if (age >= 20 && age <= 64) {
	return "Adult";
}
else {
	return "Senior Citizen";
}
}
console.log(checkAgeGroup(18));

// 10. Write a function that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

function checkVotingEligibility(age, isStudent) {

    if (age < 18 && isStudent === "yes") {
        return "You are a student and not old enough to vote";
    }
    else if (age >= 18 && age <= 65 && !isStudent) { // !isStudent means if (isStudent === false)
        return "You are eligible to vote";
    }
    else if (age > 65) {
        return "You are a senior citizen";
    }
    else if (isStudent && age >= 18) { // In this case, condition means isStudent === true && age >= 18
        return "You are old enough to vote";
    }
    else {
        return "Invalid input";
    }
}
console.log(checkVotingEligibility(17, true));

// 11. Write a function that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

function offerJob(salary, experience) {

if (salary < 30000 && experience < 5) {
	return "Sorry, we cannot offer you the job at this time";
}
else if (salary < 50000 && experience >= 5 && experience <= 10) {
	return "We can offer you the job at a lower salary";
}
else if (salary >= 50000 || experience >= 10) {
	return "We can offer you the job at the requested salary";
}
else {
	return "Invalid input";
}
}
console.log(offerJob(40000, 5));

// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

function checkTestScore(score) {
if (score < 60) {
	return "You failed the test";
}
else if (score >= 60 && score <= 70) {
	return "You passed the test, but your grade is not great";
}
else if (score >= 71 && score <= 80) {
	return "You got a B";
}
else if (score >= 81 && score <= 90) {
	return "You got an A";
}
else {
	return "You got an A+ - Great job!";
}
}
console.log(checkTestScore(75));

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

function checkGrade(gradeLetter) {
gradeLetter = gradeLetter.toUpperCase();
switch (gradeLetter) {
	case "A":
	case "B":
	case "C":
		return "Passing grade";
	case "D":
	case "F":
		return "Failing grade";
	default:
		return "Invalid grade";
}
}
console.log(checkGrade(A));

// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.

function calculateDogYears(age) {

if (age <= 0) {
	return "Error: Please enter a valid age.";
} else {
	let dogYears = age * 7;
	return "Your age in dog years is: " + dogYears;
}
}
console.log(calculateDogYears(6));