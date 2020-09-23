/*
1. Implement an Array class from scratch.
  -See Array.js
2. Explore the push() method
  What is the length, capacity and memory address of your array?
  - Array { length: 1, _capacity: 3, ptr: 0 }
  What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
  - Array { length: 6, _capacity: 12, ptr: 3 } Length increased with adding more numbers and capacity increased to hold them which caused the pointer to move
3. Exploring the pop() method
  What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
  - Array { length: 3, _capacity: 12, ptr: 3 } Numbers were removed so length decreased other variables remained the same because there was no need for them to change.
4. Understanding more about how arrays work
  Print the 1st item in the array arr.
  - console.log(arr.get(0))
  Empty the array and add just 1 item: arr.push("tauhida");
  - for(let i = 0; i < arr.length; i++){
      arr.pop()
    }
    arr.pop()
    arr.push("tauhida");
    console.log(arr.get(0))
  Print this 1 item that you just added. What is the result? Can you explain your result?
  - NaN because we gave a string instead of a number.
  What is the purpose of the _resize() function in your Array class?
  - This allows the size to increase as the array is filled.
*//*
const Array = require('./Array')
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);

    console.log(arr.get(0))

    for(let i = 0; i < arr.length; i++){
      arr.pop()
    }
    arr.pop()
    arr.push("tauhida");
    console.log(arr.get(0))
}
main()*/

const Array = require('./array');

const newArray = new Array();
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.get(0);

console.log(newArray);


//5. URLify a string
function replaceSpaces(str, len) {
  return str.replace(/\s/g, '%20');
}
replaceSpaces('www.thinkful.com /tauh ida parv een');

//6. Filtering an array
function filter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) arr.splice(i, 1);
  }
  return arr;
}
filter([4, 6, -3, 5, -2, 1]);

//7. Max sum in the array
function maxSum(arr) {
  let max = -Infinity;
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > max) max = currentSum;
  }
  return max;
}
maxSum([4, 6, -3, 5, -2, 1]);

//8. Merge arrays
function merge(arr1, arr2) {
  let answer = [];
  let length = arr1.length + arr2.length;
  let index1 = 0;
  let index2 = 0;
  while (answer.length < length) {
    if (index1 >= arr1.length) {
      answer.push(arr2[index2]);
      index2++;
    }
    else if (index2 >= arr2.length) {
      answer.push(arr1[index1]);
      index1++;
    }
    else if (arr1[index1] < arr2[index2]) {
      answer.push(arr1[index1]);
      index1++;
    }
    else {
      answer.push(arr2[index2]);
      index2++;
    }
  }
  return answer;
}
merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

//9. Remove characters
function remove(str, chars) {
  var re = new RegExp(`[${chars}]`, 'g');
  return str.replace(re, '');
}

remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');

//10. Products
//replace each with product of all but it
function products(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    arr[j] = product / arr[j];
  }
  return arr;
}
products([1, 3, 9, 4]);

//11. 2D array
function zeroIt(arr) {
  let zeroRows = new Set();
  let zeroColumns = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        zeroColumns.add(j);
        zeroRows.add(i);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (zeroRows.has(i) || zeroColumns.has(j)) {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}

let array = [[1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]];

zeroIt(array);

//12. String rotation
function rotation(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < b.length; i++) {
    if (b.charAt(i) === a.charAt(0)) {
      if (isRotated(a, b, i) === true) return true;
    }
  }
  return false;
}
function isRotated(a, b, start) {
  let count = 0;
  let bIndex = start + count;
  if (start === -1) return false;
  while (count < a.length) {
    if (bIndex >= b.length) {
      bIndex = 0;
    }
    if (b.charAt(bIndex) !== a.charAt(count)) {
      return false;
    }
    count++;
    bIndex++;
  }
  return true;
}
rotation('amazon', 'azonam');