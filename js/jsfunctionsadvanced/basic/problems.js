/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  const noBlanks = [];
  return array.filter((element) => Boolean(element) || element === 0);

}

// write a function that takes a string character and an array of words as an argument and returns only words starting with the given character (case insensitive).
// eg: ('C', ['Cow', 'curry']) => ['Cow', 'curry']; beginsWith('S', ['Bell', 'sandwich', 'Salt']) => ['sandwich', 'Salt'];
function beginsWith(val, array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].charAt(0) === val.toLowerCase() || array[i].charAt(0) === val.toUpperCase()) {
      result.push(array[i]);
    }
  }
  return result;
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  return array[Math.floor((Math.random()*array.length))];
}

// Return the factorial of the provided integer (The factorial is the product of all positive integers less than or equal to the number).
// For example: factorialise(5) => 5 * 4 * 3 * 2 * 1 = 120
function factorialise(number) {
  let result = 1;
  for (let i = 0; i < number; i++) {
    result = result * (number - i);
  }
  return result;
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const sorted = array.sort(function(a, b){
    return a-b;
  });
  const result = [];
  result.push(sorted[1]);
  result.push(sorted[(sorted.length -2 )]);
  return result;
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  const coins = [100,50,20,10,5,2,1];
  let goal = (price * 100).toFixed(0);
  const change = [];
  while (goal) {
    for (let i = 0; i < coins.length; i++) {
      if (goal - coins[i] >= 0) {
        goal -= coins[i];
        change.push(coins[i]);
        i = -1;
      }
    }
  }
  return change;
}

// write a function to remove any lower case letters and spaces from an array item and then sort the array alphabetically.
// eg: ['aThnR', 'BrMTQ', 'oopq'] => ['', 'BMTQ', 'TR']
function sortUpper(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/ /g,'');
    array[i] = array[i].replace(/[a-z]/g,'');
  }
  return array.sort();
}
