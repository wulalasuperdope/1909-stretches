/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data, sortOrder, targetProp) {
    let sortedKey = [];
    data.map(currentElement => {
        sortedKey.push(currentElement[sortOrder]);
    })

    sortedKey.sort();

    console.log(sortedKey)
    let output = [];
    sortedKey.map(currentOrder => {
        data.map(currentElement => {
            if (currentOrder === currentElement[sortOrder]) {
                output.push(currentElement[targetProp]);
            }
        })
    })

    return output;
}

module.exports = { sortOrder };