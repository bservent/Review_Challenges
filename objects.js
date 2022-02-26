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

/* ---------------------------------- */

/* Convert Key, Values in an Object to Array
Write a function that converts an object into an array of keys and values.

Examples
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]] */

/* ---------------------------------- */

/* function objectToArray(object) {
  const arr = Object.entries(object);
  return arr
}

console.log(objectToArray({
  D: 1,
  B: 2,
  C: 3
}))

console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
})) */

/* ---------------------------------- */

/* Count the Letters and Digits
Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.

Examples
countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }

countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }

countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }
Notes
Tests contain only alphanumeric characters.
Spaces are not letters.
All tests contain valid strings. */

/* function countAll(string) {
  let object = {
    letters : 0,
    digits : 0
  }
  let splitStr = string.replace(/\s/g, '').split('');
  console.log(splitStr)
  for (let i = 0; i < splitStr.length; i++) {
    if(!isNaN(parseInt(splitStr[i]))) {
      object.digits += 1
    }else{
      object.letters += 1
    }
  }
  return object
}

console.log(countAll('this 2 56'));
console.log(countAll("H3ll00 Wor1d"));  */