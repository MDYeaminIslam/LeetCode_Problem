const prompt = require('prompt-sync')();

function isValid(s) {
  let stack = [];
  let match = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  for (const char of s){
    if(match[char]){
      if(!stack || stack.pop() !== match[char]) return false;
    }
    else stack.push(char);
  }
  return stack.length === 0;
}

s = '{[()]}'
console.log(isValid(s)) // true

//Time Complexity: O(n) and Space Complexity: O(n)