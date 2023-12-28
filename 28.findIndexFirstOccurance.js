const prompt = require('prompt-sync')();

var strStr = (haystack, needle) =>{
  if(!needle) return 0;

  const needleLength = needle.length;

  for(let i=0 ; i < haystack.length - needleLength ; i++){
    for(let j=0 ; j< needleLength; j++){
      if(haystack[ i+ j] !== needle[j]) break; // if not match, break
      if (j === needleLength-1) return i; // if match, return index
    }
  }
  return -1;
}

haystack = 'thisisYeamin';
needle = 'this';
console.log(strStr(haystack, needle));

