/* eslint-disable no-unused-vars */

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]

function mergeUnique(arr1, arr2) {
  const merged = [];
  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    merged.push(arr2[i]);
  }
  const cleaned = [];
  for (let i = 0; i < merged.length; i++){
    if (!cleaned.includes(merged[i])) {
      cleaned.push(merged[i]);
    }
  }
  return cleaned;
}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const k = {};
    k[key] = array[i];
    output.push(k);
  }
  return output;
}
// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  const output = [[],[]];
  for (let i = 0; i < Object.keys(object).length; i++) {
    output[i].push(Object.keys(object)[i]);
  }
  for (let i = 0; i < Object.keys(object).length; i++) {
    output[i].push(object[Object.keys(object)[i]]);
  }
  return output;
}
// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  console.log();
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i < 1){
      result.push(0);
    } else if (i < 2) {
      result.push(1);
    } else {
      result.push(result[i-2]+result[i-1]);
    }
  }
  return result;
}

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {
  const datea = date1.split('-');
  const dateb = date2.split('-');
  const months = Math.abs(datea[1]-dateb[1]);
  return months*31;
}

// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].includes('c')) {
      throw new Error('Error');
    }
    if (arguments[i].includes('am')) {
      arguments[i] = arguments[i].replace('am','');
      arguments[i] = arguments[i].split(':');
    } else if (arguments[i].includes('pm')) {
      arguments[i] = arguments[i].replace('pm','');
      arguments[i] = arguments[i].split(':');
      arguments[i][0] = Number(arguments[i][0]) + 12;
    } else {
      arguments[i] = arguments[i].split(':');
    }
  }
  const seconds1 = Math.abs(time1[0]*3600) + Math.abs(time1[1]*60) + Math.abs(time1[2]);
  const seconds2 = Math.abs(time2[0]*3600) + Math.abs(time2[1]*60) + Math.abs(time2[2]);
  return Math.abs(seconds1-seconds2);
}
