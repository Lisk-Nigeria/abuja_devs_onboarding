exports.reverseString = function (s) {
  const ans = s.length;
  if (ans <= 1) {
    return s;
  }
  let converter = "";
  for (let i = ans - 1; i > 0; i--) {
    converter += s.substring(i, i + 1);
  }
  return converter;
};

exports.isPalindrome = function (s) {
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
};

exports.fibonacci = function (n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

exports.factorial = function (n) {
  if (n < 0) return null;
  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

exports.sumArray = function (arr) {
  const ans = "";
};

exports.maxArray = function (arr) {
  const ans = "";
};

exports.mergeSortedArrays = function (arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
};

exports.uniqueArray = function (arr) {
  let uniqueArr = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      uniqueArr.push(arr[i]);
      seen[arr[i]] = true;
    }
  }

  return uniqueArr;
};

exports.countVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  s = s.toLowerCase();

  for (let char of s) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

exports.evenOrOdd = function (n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
