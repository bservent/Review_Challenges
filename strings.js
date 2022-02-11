/* Repeating Letters
Create a function that takes a string and returns a string in which each character is repeated once.

Examples
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  " */

/* function doubleChar(string) {
  var result = string.split('').map(char => char + char).join('')
  console.log(result);
}

doubleChar('yes i will do great!'); */

/* Multiplying Numbers in a String
Given a string of numbers separated by a comma and space, return the product of the numbers.

Examples
multiplyNums("2, 3") ➞ 6

multiplyNums("1, 2, 3, 4") ➞ 24

multiplyNums("54, 75, 453, 0") ➞ 0

multiplyNums("10, -2") ➞ -20 */

/* function multiplyNums(string) {
  var splitString = string.split(' ')
  var number = [];

  for (let i = 0; i <= splitString.length - 1; i++) {
    number.push(parseInt(splitString[i]))
  }
  var result = number.reduce((a,b) => a * b)
  console.log(result);
}

multiplyNums("1, 2, 3, 4"); */