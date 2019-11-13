
function cache(func) {
    if (typeof func !== 'function') {
        throw new Error('Input must be a function.');
    };

    const num0 = num;
    if (num === num0) {
        return func(num);
    } else {
        return func(num);
    }


}

module.exports = { cache };