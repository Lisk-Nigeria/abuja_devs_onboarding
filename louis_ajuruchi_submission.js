exports.reverseString = function (s) {
  // Returns the reversed version of the input string

  if (typeof s !== "string") return null;

  let result = "";

  for (let i = 0; i < s.length; i++) {
    result = s[i] + result;
  }

  return result;
};

exports.isPalindrome = function (s) {
  // Checks if the given string is a palindrome (ignores case and non-alphanumeric characters)

  if (typeof s !== "string") return false;

  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;

  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

exports.fibonacci = function (n) {
  // Returns the nth Fibonacci number

  if (!Number.isInteger(n) || n < 0) return null;

  if (n === 0) return 0;

  if (n === 1) return 1;

  let a = 0;

  let b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

exports.factorial = function (n) {
  // Returns the factorial of a non-negative integer n

  if (!Number.isInteger(n) || n < 0) return null;

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
};

exports.sumArray = function (arr) {
  // Returns the sum of all elements in an array

  if (!Array.isArray(arr)) return null;

  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

exports.maxArray = function (arr) {
  // Returns the maximum value in an array

  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

exports.mergeSortedArrays = function (arr1, arr2) {
  // Merges two sorted arrays into one sorted array

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null;

  const result = [];

  let i = 0;

  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

exports.uniqueArray = function (arr) {
  // Returns an array with only unique values from the input array

  if (!Array.isArray(arr)) return null;

  const result = [];

  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!seen[value]) {
      seen[value] = true;
      result.push(value);
    }
  }

  return result;
};

exports.countVowels = function (s) {
  // Returns the number of vowels in a given string

  if (typeof s !== "string" || !s) return 0;

  const vowels = { a: true, e: true, i: true, o: true, u: true };

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (vowels[char]) {
      count++;
    }
  }

  return count;
};

exports.evenOrOdd = function (n) {
  // Determines if a given integer is even or odd

  if (!Number.isInteger(n)) return null;

  return n % 2 === 0 ? "even" : "odd";
};
