/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {
    if(arr.length < 2 || num === 0){
        return null;
    }else{
        let output = 0;
        for(let i = 0; i < arr.length; i++){
            let result = arr[i] % num;
            if(result === 0 && arr[i] > output){
                output = arr[i];
            }
        }
        return output;
    }
}

// console.log(largestDivisible([1, 2, 3, 4, 5, 6, 7], 3));//6
// console.log(largestDivisible([1], 2));//null

module.exports = { largestDivisible };
