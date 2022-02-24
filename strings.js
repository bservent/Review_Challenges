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

/* function removeABC(string) {
  if(string === '') {
    return null;
  }else{
    let result = string.replace(/[abc]/gi, '')
    return result
  }
}

console.log(removeABC(''));
console.log(removeABC('I love this alot bc!')); */

/* Match the Last Item
Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

Examples
matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true */

/* function matchLastItem(array) {
  let concatStr = array[0] + array[1] + array[2];
  if(concatStr === array[3]) {
    return true
  }else{
    return false
  }
}

console.log(matchLastItem([8, "thunder", true, "8thundertrue"]))
console.log(matchLastItem([1, 1, 1, "11"]))
console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])) */

/* Which Generation Are You?
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"
Notes
Check the Resources tab for helpful hints.

Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter */

/* const genObject = {
  '-3': ['great grandfather', 'great grandmother'],
  '-2': ['grandfather',	'grandmother'],
  '-1': ['father',	'mother'],
  '0': ['me', 'me'],
  '1': ['son', 'daughter'],
  '2': ['grandson', 'granddaughter'],
  '3': ['great grandson', 'great granddaughter']
}

function generation(x,y) {
  if(y === 'm') {
    return genObject[x][0]
  }else if(y === 'f') {
    return genObject[x][1]
  }
}

console.log(generation(2, "f"))
console.log(generation(-1, "m"))
console.log(generation(0, "f")) */
