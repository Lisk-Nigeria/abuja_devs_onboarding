# Lisk Abuja Onchain-Builders Coding Challenge

## Entry Level JavaScript Algorithm Problems

This challenge consists of 10 fundamental algorithm problems that will test your understanding of core programming concepts. This is designed to help you practice problem-solving skills without relying on built-in methods.

### Challenge Instructions

1. Fork this repository
2. Implement your solutions in a file named `your_name_submission.js` (e.g., `john_doe_submission.js`)
3. Submit a pull request with your solutions in 24 hours.

### Problems

Each problem has specific constraints to encourage algorithmic thinking rather than relying on built-in methods.

1. **Reverse String**  
   Write a function `reverseString` that takes a string `s` and returns it reversed **without using built-in reverse methods**.  
   ```
   Example: reverseString("hello") → "olleh"
   ```

2. **Palindrome Check**  
   Implement a function `isPalindrome` to return `true` if `s` reads the same backward as forward. **Avoid converting the entire string to reversed form**.  
   ```
   Example: isPalindrome("racecar") → true
   ```

3. **Fibonacci Sequence**  
   Compute the nth Fibonacci number iteratively (not recursively). Return `null` for negative inputs.  
   ```
   Example: fibonacci(6) → 8
   ```

4. **Factorial Calculation**  
   Calculate the factorial of `n` iteratively. Return `null` for negative inputs.  
   ```
   Example: factorial(5) → 120
   ```

5. **Sum Array**  
   Sum all elements of an array `arr` **without using `.reduce()`**. Return `0` for empty arrays.  
   ```
   Example: sumArray([1, 2, 3]) → 6
   ```

6. **Max Array**  
   Find the maximum value in an array `arr` **without using `Math.max` or spread syntax**. Return `undefined` for empty arrays.  
   ```
   Example: maxArray([3, 1, 4]) → 4
   ```

7. **Merge Sorted Arrays**  
   Merge two sorted arrays (`arr1` and `arr2`) into one sorted array. Optimize for time complexity.  
   ```
   Example: mergeSortedArrays([1, 3], [2, 4]) → [1, 2, 3, 4]
   ```

8. **Unique Array**  
   Remove duplicates from `arr` **without using `Set`**. Preserve the order of first occurrences.  
   ```
   Example: uniqueArray([1, 2, 2, 3]) → [1, 2, 3]
   ```

9. **Count Vowels**  
   Count the number of vowels (a, e, i, o, u, case-insensitive) in a string `s` **without using regex**.  
   ```
   Example: countVowels("Hello World") → 3
   ```

10. **Even or Odd**  
    Return `"even"` if `n` is even, `"odd"` if odd. Handle all integers.  
    ```
    Example: evenOrOdd(7) → "odd"
    ```

## Submission Requirements

### File Structure

Your submission should follow this exact structure:

```javascript
exports.reverseString = function(s) {
  // Your implementation here
};

exports.isPalindrome = function(s) {
  // Your implementation here
};

exports.fibonacci = function(n) {
  // Your implementation here
};

exports.factorial = function(n) {
  // Your implementation here
};

exports.sumArray = function(arr) {
  // Your implementation here
};

exports.maxArray = function(arr) {
  // Your implementation here
};

exports.mergeSortedArrays = function(arr1, arr2) {
  // Your implementation here
};

exports.uniqueArray = function(arr) {
  // Your implementation here
};

exports.countVowels = function(s) {
  // Your implementation here
};

exports.evenOrOdd = function(n) {
  // Your implementation here
};
```

### Evaluation Criteria

- **Correctness**: All functions must pass our test cases
- **Constraints**: Solutions must adhere to the specified constraints
- **Edge Cases**: Properly handle edge cases like empty arrays, negative numbers, etc.
- **Code Quality**: Clean, readable and well-commented code
- **Efficiency**: Optimize for time and space complexity where possible


## Questions?

If you have any questions about the assignment, please reach out on [telegram ](https://t.me/+y5cUIRxZapQ3MzA8)

Good luck and happy coding!