function sumOfArray(arr) {

  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  let total = 0;
  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      total += arr[i];
    }
  }
  return total;
}


function reverseString(str) {

  if (typeof str !== "string") {
    return "";
  }

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}


function findMax(arr) {

  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  let max = null;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      if (max === null || arr[i] > max) {
        max = arr[i];
      }
    }
  }
  return max;
}

function countVowels(str) {
  if (typeof str !== "string") {
    return 0;
  }

  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

module.exports = {
  sumOfArray,
  reverseString,
  findMax,
  countVowels,
};