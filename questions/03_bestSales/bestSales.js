const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id 
for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  let output = {};
  let tempId = 0;
  let tempAmount = 0;
  sales.forEach(element => {
    let currentId = element.productId;
    let currentAmount = element.amount;
    if(tempId === 0){
      tempId = currentId;
      tempAmount += currentAmount;
    }else{
      if(currentAmount > tempAmount && currentId !== tempId){
        tempAmount = currentAmount;
        tempId = currentId;
      }else if(currentId === tempId){
        tempAmount += currentAmount;
      }
    }

  });

  if(tempId){
    output.id = tempId;
    output.total = tempAmount;
  }

  return output;
}

module.exports = { bestSales, sales };
