/*
Monotonic Array O »
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
An array is said to be monotonie if its elements, from left to right, are entirely non-increasing or entirely non-decreasing,
Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't
necessarily exclusively increasing; they simply don't decrease.
A
Note that empty arrays and arrays of one element are monotonic.

Sample Input:
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

Output: true

*/

function isMonotonic(array) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (isIncreasing(array[i], array[i - 1])) decreasing = false;
    if (isDecreasing(array[i], array[i - 1])) increasing = false;
  }
  return increasing || decreasing;
}
function isIncreasing(a, b) {
  return a > b;
}
function isDecreasing(a, b) {
  return a < b;
}
