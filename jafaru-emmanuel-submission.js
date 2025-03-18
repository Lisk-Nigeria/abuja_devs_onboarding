exports.reverseString = function(s) {
    let reversedStr = "";
    for (let i = s.length - 1; i >= 0; i--) {
      reversedStr += s[i];
    }
    return reversedStr;
  };
  
  exports.isPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };
  
  exports.fibonacci = function(n) {
    if (n < 0) return null;
    if (n === 0) return 0;
    if (n === 1) return 1;
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
      let next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
  };
  
  exports.factorial = function(n) {
    if (n < 0) return null;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };
  
  exports.sumArray = function(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  };
  
  exports.maxArray = function(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let num of arr) {
      if (num > max) max = num;
    }
    return max;
  };
  
  exports.mergeSortedArrays = function(arr1, arr2) {
    let merged = [], i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i++]);
      } else {
        merged.push(arr2[j++]);
      }
    }
    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);
    return merged;
  };
  
  exports.uniqueArray = function(arr) {
    let seen = {}, unique = [];
    for (let num of arr) {
      if (!seen[num]) {
        seen[num] = true;
        unique.push(num);
      }
    }
    return unique;
  };
  
  exports.countVowels = function(s) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let char of s) {
      if (vowels.includes(char)) count++;
    }
    return count;
  };
  
  exports.evenOrOdd = function(n) {
    return n % 2 === 0 ? "even" : "odd";
  };
  