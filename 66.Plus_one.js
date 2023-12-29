const prompt = require('prompt-sync')();

const plusOne = (arr) =>{
  let i = arr.length-1;
  while(i >=0){
    if(arr[i] !== 9){
      arr[i]++;
      return arr;
    }
    arr[i--] = 0;
  }

  // if all digits are 9 then
  return [1, ...Array(arr.length).fill(0)];
}

const arr = [9,9,9,9];
console.log(plusOne(arr));