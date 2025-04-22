const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance); 

console.log(balance.toString().length); // 100
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // 123.90

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
console.log(hundreds.toLocaleString('en-US')); // 1,000,000

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// math.random ne value deni aa 0 to 1 de vich onhu 10 multiply karke value shif ta ho gayi left nu
// par what if zero aa jaaye esli apa 1 add karleya math.floor naal roung off karleya 