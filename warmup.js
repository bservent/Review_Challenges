/* print all even numbers 0-10*/
/* function evenNumbers(nums) {
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      console.log(nums[i])
    }
  }
}

evenNumbers([1,2,3,4,5,6,7,8,9,10]); */

/* print a table containing multiplication tables */
/* function multiplicationTable(num) {
  for(let i = 1; i <= 10; i++) {
    const result = i * num;
    console.log(`${num} * ${i} = ${result}`)
  }
}

multiplicationTable(2); */

/* kilometers to mile */

/* function kilometersToMile(kil) {
  let result = kil / 1.6;
  console.log(result)
  return result;
}

kilometersToMile(2); */

/* calculate the sum of nums within array */

/* function sumArr(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
    console.log(sum)
  }
  return sum;
}

sumArr([1,2,3,4,5]) */

/* reverse array */

/* function arrReverse(arr) {
  let result = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
    console.log(result)
  }
  return result
}

arrReverse([1,2,3,4,5,6]); */

/* sort array from lowest to highest */

/* function sortArr(arr) {
  var result = arr.sort(function(a,b) {
    return a-b
  });
  console.log(result)
}

sortArr([6,2,4,9,0,5,4]) */

/* function negativeNumberFilter(arr) {
  var result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) {
      result.push(arr[i]);
      console.log(result);
    }
  }
  return result;
}

negativeNumberFilter([-3,6,7,-9,-2]); */

/* remove white space in string */

/* function removeSpace(string) {
  const stripped = string.replace(/\s+/g, '');
  console.log(stripped);
  return stripped;
}

removeSpace('Oh britt is the bomb'); */

/* return a boolean if a number is divisible by 10 */

/* function numBoo(num) {
  if(num % 10 === 0) {
    return true;
  }else{
    return false;
  }
}

numBoo(99); */

/* return the number of vowels in a string */

/* function vowelNum(string){
  var result = string.match(/[aeiou]/gi).length;
  console.log(result);
  return result;
} 

vowelNum('brittybear'); */