const numbers = [1,2,3,4,5,6,7,8,9,10];

const sum = numbers.reduce(function(accumulator, currentvalue){
    return accumulator + currentvalue;
}, 0)
 ///// accumultor is previous value.

const sum2 = numbers.reduce((acc,cur) => acc + cur , 0 );
console.log(sum2);

// Shopping cart example (objects)
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
  ];
  
  const total = cart.reduce(function (acc, product) {
    return acc + product.price;
  }, 0);
  
  console.log(total);