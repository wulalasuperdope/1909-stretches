// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  if(str1.length !== str2.length){
    return false;
  }else{
    // let str1Arr = str1.split('');
    // let str2Arr = str2.split('');
    // str1Arr.forEach(element => {
    //   for(let i = str2Arr.length - 1; i > -1; i--){
    //     if(element !== str2Arr[i]){
    //       return false;
    //     }
    //   }
    // });
    // return true;
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    return str1 === str2;
    
  }

};

module.exports = { checkAnagrams };