exports.reverseString = function (s) {
    // Your implementation here
    let ns = ""
    for (let index = s.length - 1; index >= 0; index--) {
        ns = ns + s[index]
    }
    return ns;
};

exports.isPalindrome = function (s) {
    // Your implementation here
    for (let index = 0; index < s.length; index++) {
        // console.log(s[index], s[s.length - 1 - index]);
        if (s[index] != s[s.length - 1 - index]) return false;
    }
    return true;
};

exports.fibonacci = function (n) {
    // Your implementation here
    if (n < 0) return null;
    if (n === 0) return 0;
    if (n === 1) return 1;
    let sum = 1, prev = 0;
    for (let index = 2; index <= n; index++) {
        const tmp = sum + prev;
        prev = sum
        sum = tmp;
    }
    return sum;
};

exports.factorial = function (n) {
    // Your implementation here
    let sum = n;
    for (let index = n-1; index >= 1; index--) {
        sum = sum * index;
    }
    return sum;
};

exports.sumArray = function (arr) {
    // Your implementation here
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
    }
    return sum
};

exports.maxArray = function (arr) {
    // Your implementation here
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let index = 1; index <= arr.length - 1    ; index++) {
        if (arr[index] > max) max = arr[index];
    }
    return max;
};

exports.mergeSortedArrays = function (arr1, arr2) {
    // Your implementation here
    const short = arr1.length < arr2.length ? arr1 : arr2;
    const long = arr1.length > arr2.length ? arr1 : arr2;
    // for (let index = 0; index < short.length; index++) {
    //     // const l = long[index];
    //     if (short[index] > long[index]) {

    //     }
    // }
    // [1, 2, 3, 4, 5, 8], [3, 6, 7]
    // [1, 3, ]
    let idx = 0;
    while (idx <= ) {
        
    }
};

exports.uniqueArray = function (arr) {
    // Your implementation here
};

exports.countVowels = function (s) {
    // Your implementation here
};

exports.evenOrOdd = function (n) {
    // Your implementation here
};