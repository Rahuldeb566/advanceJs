const num = [2, 5, 8, 9];


// const square = element => element * element;
// const square = x => x * x;
// const result = num.map(function(element, index, array){
//     return element * element;
// })

// const result = num.map(x => x * x);

// console.log(result);

const result = num.filter( x => x > 5);

const find = num.find( x => x < 7 );

console.log(find);