const {
  sumOfArray,
  reverseString,
  findMax,
  countVowels,
} = require("./functions");


function runTest(testName, actual, expected) {
  if (actual === expected) {
    console.log(`PASS: ${testName}`);
  } else {
    console.error(`FAIL: ${testName} | Expected: ${expected}, Got: ${actual}`);
  }
}

console.log("=== TESTING sumOfArray ===");
runTest("Normal positive numbers", sumOfArray([1, 2, 3, 4]), 10);
runTest("Negative numbers", sumOfArray([-5, -10, 5]), -10);
runTest("Decimals", sumOfArray([1.5, 2.5]), 4);
runTest("Empty array", sumOfArray([]), 0);
runTest("Array with mixed types", sumOfArray([10, "hello", null, 5]), 15);
runTest("Non-array input (number)", sumOfArray(123), 0);
runTest("Non-array input (null)", sumOfArray(null), 0);

console.log("\n=== TESTING reverseString ===");
runTest("Normal word", reverseString("hello"), "olleh");
runTest("Sentence with spaces", reverseString("hi there"), "ereht ih");
runTest("Numbers inside a string", reverseString("12345"), "54321");
runTest("Empty string", reverseString(""), "");
runTest("Single character", reverseString("a"), "a");
runTest("Plot twist: positive number", reverseString(1), "");
runTest("Plot twist: negative number", reverseString(-1), "");
runTest("Plot twist: null or undefined", reverseString(null), "");

console.log("\n=== TESTING findMax ===");
runTest("Normal positive numbers", findMax([3, 9, 2, 15, 6]), 15);
runTest("All negative numbers", findMax([-20, -3, -50, -1]), -1);
runTest("Single element array", findMax([42]), 42);
runTest("Duplicate max values", findMax([7, 7, 2]), 7);
runTest("Empty array", findMax([]), null);
runTest("Array with non-numbers", findMax(["a", true, null]), null);
runTest("Non-array input (string)", findMax("not an array"), null);

console.log("\n=== TESTING countVowels ===");
runTest("Lowercase word", countVowels("javascript"), 3);
runTest("Uppercase and lowercase", countVowels("AEIOUaeiou"), 10);
runTest("Sentence with spaces & punctuation", countVowels("Hello, World!"), 3);
runTest("No vowels", countVowels("rhythm"), 0);
runTest("Empty string", countVowels(""), 0);
runTest("Numbers in string", countVowels("12345"), 0);
runTest("Plot twist: number input", countVowels(999), 0);
runTest("Plot twist: array input", countVowels(["a", "e"]), 0);