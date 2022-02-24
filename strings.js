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
  var number = []

  for (let i = 0; i <= splitString.length - 1; i++) {
    number.push(parseInt(splitString[i]))
  }
  var result = number.reduce((a,b) => a * b)
  console.log(result)
}

multiplyNums("1, 2, 3, 4"); */

/* Reverse Words Starting With a Particular Letter
Write a function that reverses all the words in a sentence that start with a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep" */

/* const str = 'hello world, how are you';
const reverseStartingWith = (str, char) => {
   const strArr = str.split(' ');
   return strArr.reduce((acc, val) => {
      if(val[0] !== char){
         acc.push(val);
         return acc;
      };
      acc.push(val.split('').reverse().join(''));
      return acc;
   }, []).join(' ');
};
console.log(reverseStartingWith(str, 'h')); */

/* Reverse Words in a String
Given an input string, reverse the string word by word, the first word will be the last, and so on.

Examples
reverseWords(" the sky is blue") ➞ "blue is sky the"

reverseWords("hello   world!  ") ➞ "world! hello"

reverseWords("a good example") ➞ "example good a" */

/* function reverseWords(string) {
  var trimStr = string.replace(/\s{2,}/g, ' ').trim();
  return trimStr.split(' ').reverse().join(' ')
}
console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  ")); */

/* String Slice-athon
This challenge has five miniature exercises to help practice proficiency in string slicing. Check the examples below for a visual indicator of how to slice the strings. Good luck!

Examples
const s = "abcdefghijklmnopqrstuvwxyz"
challenge1(s) ➞ "abcde" */
// First 5 characters of the string.

/* challenge2(s) ➞ "vwxyz" */
// Last 5 characters of the string.

/* challenge3(s) ➞ "zyxwvutsrqponmlkjihgfedcba" */
// All characters in the string from back.

/* challenge4(s) ➞ "fedcba" */
// First 6 characters in the string (start with 6th character and go backwards).

/* challenge5(s) ➞ "tvxz" */
// Take last 7 characters and only return odd positioned ones.

/* function challenge1(s) {
	return s.slice(0,5)
}

function challenge2(s) {
	return s.slice(-6)
}

function challenge3(s) {
	return s.split('').reverse().join('')
}

function challenge4(s) {
	return s.slice(0,6).split('').reverse().join('')
}

function challenge5(s) {
	var sliceStr = s.slice(-7)
  var result = ''
  for (let i=0; i < sliceStr.length; i++) {
    if(sliceStr.indexOf(sliceStr[i]) % 2 === 0) {
      result += sliceStr[i]
    }
  }
  return result
}

const s = "abcdefghijklmnopqrstuvwxyz"
console.log(challenge1(s));
console.log(challenge2(s));
console.log(challenge3(s));
console.log(challenge4(s));
console.log(challenge5(s)); */

/* Remove the Letters ABC
Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

Examples
removeABC("This might be a bit hard") ➞ "This might e  it hrd"

removeABC("hello world!") ➞ null

removeABC("") ➞ null */

function removeABC(string) {
  if(string === '') {
    return null;
  }else{
    let result = string.replace(/[abc]/gi, '')
    return result
  }
}

console.log(removeABC(''));
console.log(removeABC('I love this alot bc!'));