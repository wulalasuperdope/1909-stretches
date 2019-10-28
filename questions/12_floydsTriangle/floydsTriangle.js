// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let output = '';
    for(let i = 1; i <= n; i++){
        let row = '';
        for(let j = 0; j <= i; j++){
            row += `${j+i}`
        }
        output += `${row}\n`
        console.log(output)
    }
    return output;
};

module.exports = { floydsTriangle };