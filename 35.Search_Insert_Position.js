const prompt = require('prompt-sync')();

var searchInsert = (number, target) =>{
  left = 0;
  right = number.length -1 ;
  while(left <= right){
    mid = Math.floor((left + right) /2);
    if(number[mid] === target) return mid;
    else if(number[mid] < target) left  = mid + 1;
    else right = mid -1;

    return left;
  }
}

number = [1,3,5,6];
target = 5;
console.log(searchInsert(number, target));