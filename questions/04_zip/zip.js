/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {

  return objs.reduce((currentElement, accumulator) => {
    for(let key in currentElement){
      if(key in accumulator){
        accumulator[key] += currentElement[key];
      }else{
        accumulator[key] = currentElement[key];
      }
    }
  }, {})

  //solution: forEach and for loop
  //let output = {};
  
  // objs.forEach(element => {
  //   let currentKeyStack = Object.keys(element);
  //   currentKeyStack.forEach(currentKey => {
  //     if(!Object.keys(output).includes(currentKey)){
  //       output[currentKey] = element[currentKey];
  //     }else{
  //       output[currentKey] += element[currentKey];
  //     }
  //     return output;
  //   })
  //   return output;
  // });

  // for(let i = 0; i< objs.length; i++){
  //   let currentKeyStack = Object.keys(objs[i]);
  //   for(let j = 0; j < currentKeyStack.length; j++){
  //     if(!Object.keys(output).includes(currentKeyStack[j])){  
  //       output[currentKeyStack[j]] = objs[i][currentKeyStack[j]];
  //    }else{ 
  //     output[currentKeyStack[j]] += objs[i][currentKeyStack[j]];
  //     }
  //   }
  // }
  //return output;
}

module.exports = { zip };
