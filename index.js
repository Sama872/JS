// problem 1 : FizzBuzz

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  }
  if (i % 5 == 0) {
    console.log("Buzz");
  }
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

// problem 2: Even or Odd

var num = +window.prompt("Please Enter Number:");
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// problem 3:Factorial Calculation

var factNum = +window.prompt("Please Enter non-negative Number");
var fact = 1;
if (factNum > 0) {
  for (var i = 1; i <= factNum; i++) {
    fact *= i;
  }
  console.log("Factorial " + factNum + " = " + fact);
} else {
  console.log("Please Enter non-negative Number");
}

// problem 4 : Sum of Numbers
var numForSum = +window.prompt("Please Enter Number");
var sum = 0;
for (var i = 1; i <= numForSum; i++) {
  sum += i;
}
console.log("Sum of Numbers: " + sum);

// problem 5: Find the Largest Number

var num1 = +window.prompt("Please Enter First Number");
var num2 = +window.prompt("Please Enter Second Number");
var num3 = +window.prompt("Please Enter Third Number");
if (num1 > num2 && num1 > num3) {
  console.log("The Largest Number is " + num1);
} else if (num2 > num1 && num1 > num3) {
  console.log("The Largest Number is " + num2);
} else {
  console.log("The Largest Number is " + num3);
}

// problem 6:Ask the user to input a number, and then print the multiplication table for that number up to 10.
var muliNumber = +window.prompt("Please Enter Number");
for (var i = 1; i <= 10; i++) {
  console.log(muliNumber + " X " + i + " = " + muliNumber * i);
}

// problem 7:Number Guessing Game

var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
var i = 0;
while (true) {
  var guessNum = parseInt(window.prompt("Guess a number between 1 and 100: "));
  i++;
  if (guessNum == randomNumber) {
    console.log(`Congratulations! You guessed the number in ${i} attempts.`);
    break;
  } else if (guessNum < randomNumber) {
    console.log("Too low! Try again.");
  } else if (guessNum > randomNumber) {
    console.log("Too high! Try again.");
  }
}
