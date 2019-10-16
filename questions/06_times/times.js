// function times(num1) {
//     if(typeof num1 === 'number'){
//         return function(num2){
//             if(typeof num2 === 'number'){
//                 return num1 * num2;
//             }
//         }
//     }else{
//         throw 'Numbers only!';
//     }
    
// }

//or
function times(num1) {
    if(typeof num1 !== 'number') throw 'Numbers only!';
    return function(num2){
        if(typeof num2 === 'number'){
            return num1 * num2;
        }
    }

    
}

module.exports = { times };
