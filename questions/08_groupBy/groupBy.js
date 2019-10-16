function groupBy(arr, attr) {
    let newObj = {};
    let objProp = [];
    objProp = arr.map(element => {
        return element.length;
    });
    //console.log(objProp);
    for(let i = 0; i < arr.length; i++){
        newObj[objProp[i]] = arr[i]
    }
    return newObj;
}

module.exports = { groupBy };
