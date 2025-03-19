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
  const ans = s.length;
  if (ans <= 1) return true;

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
  const ans = "";
};

exports.factorial = function (n) {
  const ans = "";
};

exports.sumArray = function (arr) {
  const ans = "";
};

exports.maxArray = function (arr) {
  const ans = "";
};

exports.mergeSortedArrays = function (arr1, arr2) {
  const ans = "";
};

exports.uniqueArray = function (arr) {
  const ans = "";
};

exports.countVowels = function (s) {
  const ans = "";
};

exports.evenOrOdd = function (n) {
  const ans = "";
};
