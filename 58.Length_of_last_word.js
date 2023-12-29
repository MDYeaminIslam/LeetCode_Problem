const prompt = require('prompt-sync')();

const lengthOfLastWord = (s) =>{
  s = s.trim();

  const lastIndex = s.lastIndexOf(' ');

  if(lastIndex === -1) return s.length;
  else return s.length - lastIndex -1;
}

let s = 'Hello World';
console.log(lengthOfLastWord(s));