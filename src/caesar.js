// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!input || shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false;
    }
    if (!encode) shift = -shift;
    input = input.toLowerCase();
    let output = "";
    for (let i = 0; i < input.length; i++) {
      const current = input.charCodeAt(i);
      if (current >= 97 && current <= 122) {
        let newChar = ((current - 97 + shift) % 26) + 97;
        if (newChar < 97) newChar += 26;
        if (newChar > 122) newChar -= 26;
        output += String.fromCharCode(newChar);
      } else {
        output += String.fromCharCode(current);
      }
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;