// 1. Reverse String - O(n) time, O(n) space
exports.reverseString = function (s) {
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
};

// 2. Palindrome Check - O(n/2) time, O(1) space
exports.isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

// 3. Fibonacci Sequence - O(n) time, O(1) space
exports.fibonacci = function (n) {
  if (n < 0) return null;
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

// 4. Factorial Calculation - O(n) time, O(1) space
exports.factorial = function (n) {
  if (n < 0) return null;
  if (n <= 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// 5. Sum Array - O(n) time, O(1) space
exports.sumArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// 6. Max Array - O(n) time, O(1) space
exports.maxArray = function (arr) {
  if (arr.length === 0) return undefined;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// 7. Merge Sorted Arrays - O(n+m) time, O(n+m) space
exports.mergeSortedArrays = function (arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
};

// 8. Unique Array - O(n) time, O(n) space
exports.uniqueArray = function (arr) {
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
};

// 9. Count Vowels - O(n) time, O(1) space
exports.countVowels = function (s) {
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

// 10. Even or Odd - O(1) time, O(1) space
exports.evenOrOdd = function (n) {
  return n % 2 === 0 ? "even" : "odd";
};
