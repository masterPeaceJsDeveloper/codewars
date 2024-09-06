// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should 
// check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

function validateCode (code) {
    code = String(code);
    let str1 = code.startsWith(1);
    let str2 = code.startsWith(2);
    let str3 = code.startsWith(3);
    if (str1 || str2 || str3) {
      return true
    } else return false
}