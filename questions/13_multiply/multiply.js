const multiply = (num1, num2) => {
    if (num1 === undefined || num2 === undefined) {
        throw new Error('Argument is not defined.')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Errow('Argument is not a number')
    }
    return num1 * num2;
};

module.exports = { multiply };