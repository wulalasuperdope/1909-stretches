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

    //test if attr is function. if not, set current attr as key, if yes, set its attr as key
}

module.exports = { groupBy };
