// number 1
exports.reverseString = function(s) {
  return s.split("").reverse().join("");
};
console.log(exports.reverseString("hello"));

// number 2
exports.isPalindrome = function(s) {
  reversed = s.split("").reverse().join("");
  return s === reversed;
};
console.log(exports.countVowels("racecar"));

// number 3
exports.fibonacci = function(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};
console.log(exports.fibonacci(10));

// number 4
exports.factorial = function(n) {
  if (n === 0 || n === 1) return 1; 
  return n * exports.factorial(n - 1);
}
console.log(exports.factorial(5)); 

// number 5
exports.sumArray = function(arr) {
  sum = 0;
  for(let i = 0; i< arr.length; i++){
      sum += arr[i];
  }
  return sum;
};
console.log(exports.sumArray([1, 2, 3, 4, 5]));

// number 6
exports.sumArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(exports.sumArray([1, 2, 3, 4, 5]));

exports.mergeSortedArrays = function(arr1, arr2){
  let merged = [];
   let i = 0;
   let j = 0;
   while(i < arr1.length && j < arr2.length){
       if(arr1[i] < arr2[j]){
           merged.push(arr1[i]);
           i++;
       }else{
           merged.push(arr2[j]);
           j++;
       }
   }
   while(i < arr1.length){
       merged.push(arr1[i]);
       i++;
   }
   while(j < arr2.length){
       merged.push(arr2[j]);
       j++;
   }
   return merged;
};
console.log(exports.mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// number 8
exports.uniqueArray = function(arr) {
 let unique = [];
 for(let i = 0; i < arr.length; i++){
     if(unique.indexOf(arr[i]) === -1){
         unique.push(arr[i]);
     }
 }
 return unique;
};
console.log(exports.uniqueArray([1, 2, 3, 4, 4, 5, 6, 6, 7]));

// number 9
exports.countVowels = function (s) {
  const vowels = { 
    a: true, 
    e: true, 
    i: true, 
    o: true, 
    u: true };

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (vowels[char]) {
      count++;
    }
  }
  return count;
};
console.log(exports.countVowels("racecar"));

// number 10
exports.evenOrOdd = function(n) {
  if(n % 2 === 0) {
    return "Even";
  }else{
    return "Odd";
  }
};
console.log(exports.evenOrOdd(10));
