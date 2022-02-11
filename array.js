/* Sum of Number Elements in an Array
Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

Examples
numbersSum([1, 2, "13", "4", "645"]) ➞ 3

numbersSum([true, false, "123", "75"]) ➞ 0

numbersSum([1, 2, 3, 4, 5, true]) ➞ 15 */

/* function sumNums(arr) {
  var result = 0;
  for(let i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) === 'number'){
      result += arr[i];
      console.log(result)
    }
  }
  return result;
}

sumNums([1, 2, '3', '4']); */

/* function sumNumsTwo(arr) {
  var arrFilter = arr.filter(num => parseInt(num) === num);
  var sumArr = arrFilter.reduce((a,b) => (a + b));
  console.log(sumArr);
}

sumNumsTwo([1, 2, '3', '4']); */

/***************************************************/

/* Remove Duplicates from an Array
Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

Examples
removeDups([1, 0, 1, 0]) ➞ [1, 0]

removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"] */

/* function removeDups(arr) {
  var arrNoDups = [];
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (j = 0; j < arrNoDups.length; j++) {
      if(arr[i] === arrNoDups[j]) {
        exists = true;
        break;
      }
    }
    if(!exists) {
      arrNoDups.push(arr[i]);
      console.log(arrNoDups)
    }
  }
  return arrNoDups;
}

removeDups(['this', 'is', 'great', 'this']); */

/* *********************************************** */

