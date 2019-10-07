const items = [
    {
      id: 1,
      name: 'foo',
      price: 2,
    },
    {
      id: 3,
      name: 'bar',
      price: 4,
    },
    {
      id: 66,
      name: 'bazz',
      price: 4,
    },
  ];
  
  // query(items, { name: 'foo' })
  // returns [{
  // id: 1,
  //   name: 'foo',
  //     price: 2,
  //   }]
  
  // query(items, { price: 4 });
  // returns [
  //   ({
  //     id: 3,
  //     name: 'bar',
  //     price: 4,
  //   },
  //   {
  //     id: 66,
  //     name: 'bazz',
  //     price: 4,
  //   })
  // ];
  
  // query(items, { price: 4, name: 'bazz' })
  // returns [{
  //   id: 66,
  //     name: 'bazz',
  //       price: 4,
  //   }]
  
  function query(arr, obj) {
      const targetKeys = Object.keys(obj);

      arr.reduce((accumulator, currentValue) => {
        if(targetKeys.length === 1){
            if(currentValue[targetKeys[0]]){
                if(currentValue[targetKeys[0] === obj[targetKeys[0]]]){
                    let key = targetKeys[0];
                    let newObj = {}
                    newObj[key] = obj[targetKeys[0]]
                }
            }
        }
        accumulator.push(newObj);
        return accumulator;
        
      }, [])
  }
  
  module.exports = { query, items };