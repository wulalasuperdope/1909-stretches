// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  // YOUR CODE
  //use charCodeAt() to check if a string character is numeric or letter.
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const strToArr = str.split('');
  
  strToArr.map(currentElement => {
    if(typeof currentElement !== 'number' || !letters.includes(currentElement)){
      throw new Error('error!')
    }
    else{

      currentElement = parseInt(curr + shift;
    }

    return currentElement;
  })

  return strToArr.join('');
};

module.exports = { encryptString };
