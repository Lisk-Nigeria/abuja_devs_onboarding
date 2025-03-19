exports.reverseString = function(s) {
  // Your implementation here
  return s.split("").reverse().join("")
  };
  
  exports.isPalindrome = function(s) {
    // Your implementation here
    let clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split("").reverse().join("");
  };
  
  exports.fibonacci = function(n) {
    // Your implementation here
    if (n < 0) return -1; 
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return n === 0 ? 0 : b;

  };
  
  exports.factorial = function(n) {
    // Your implementation here
    if (n < 0) return -1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
  };
  
  exports.sumArray = function(arr) {
    // Your implementation here
    return arr.reduce((sum, num) => sum + num, 0);
  };
  
  exports.maxArray = function(arr) {
    // Your implementation here
    return arr.length === 0 ? null : Math.max(...arr);
  };
  
  exports.mergeSortedArrays = function(arr1, arr2) {
    // Your implementation here
    return [...arr1, ...arr2].sort((a, b) => a - b);

  };
  
  exports.uniqueArray = function(arr) {
    // Your implementation here
    return [...new Set(arr)];
  };
  
  exports.countVowels = function(s) {
    // Your implementation here
    return (s.match(/[aeiou]/gi) || []).length;
  };
  
  exports.evenOrOdd = function(n) {
    // Your implementation here
    return n % 2 === 0 ? "even" : "odd";
  };