function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if(obj1Keys.length === 0 && obj2Keys.length === 0){
    return true;
  }else if(obj1Keys.length !== obj2Keys.length){
    return false;
  }else{
    let count = 0; 
    for(let i = 0; i < obj1Keys.length; i++){
      if(obj1Keys[i] !== obj2Keys[i] || obj1[obj1Keys[i]] !== obj2[obj2Keys[i]]){
        return false;
      }else{
        count ++;
      }
    }
    if(count === obj1Keys.length){
      return true;
    }
  }

}

module.exports = { isEqual };
