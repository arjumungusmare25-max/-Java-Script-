// Write a program that takes an integer as input and checks:
// If the number is divisible by both 3 and 5, print "FizzBuzz"
// If it is divisible only by 3, print "Fizz"
// If it is divisible only by 5, print "Buzz"
// If it is divisible by neither, print the number itself

// Constraints:
// Do not use any inbuilt functions, methods, or external libraries.

// Sample Input 1:
// 15

// Sample Output 1:
// FizzBuzz

// Sample Input 2:
// 9

// Sample Output 2:
// Fizz

// Sample Input 3:
// 7

// Sample Output 3:
// 7
const a= 15 
if (a / 3 == 0 & a / 5 == 0) {
  console.log("fizzbuzz")
} else if (a / 3 == 0){
  console.log("fizz")
}  else if (a / 5 == 0){
  console.log("buzz")
} else {
  console.log("number")
}

const a= 9
if (a / 3 == 0 & a / 5 == 0) {
  console.log("fizzbuzz")
} else if (a / 3 == 0) {
  console.log("fizz")
} else if (a / 5 == 0) {
  console.log ("buzz") 
} else {
  console.log ("number")
}

const a= 7
if (a / 3 == 0 & a / 5 == 0){
  console.log("fizzbuzz")
} else if (a / 3 == 0){
  console.log ("fizz")
} else if (a / 5 == 0){
  console.log ("buzz")
} else {
  console.log ("number")
}
            
               
  
