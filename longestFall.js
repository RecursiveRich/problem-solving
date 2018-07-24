// Write a function called longestFall, which accepts an array of integers,
// and returns the length of the longest consecutive decrease of integers.

function longestFall(arr) {
  if (arr.length === 0) return 0;
  let curr = 1;
  let longest = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      curr++;
      longest = Math.max(longest, curr);
    } else {
      curr = 1;
    }
  }
  return longest;
}

console.log(longestFall([5, 3, 1, 3, 0])); // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
console.log(longestFall([2, 2, 1])); // 2, 2-1 is the longest consecutive sequence of decreasing integers
console.log(longestFall([2, 2, 2])); // 1, 2 is the longest consecutive sequence of decreasing integers
console.log(longestFall([5, 4, 4, 4, 3, 2])); // 3, 4-3-2 is the longest
console.log(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1])); // 5, 9-8-7-6-5 is the longest
console.log(longestFall([])); // 0
