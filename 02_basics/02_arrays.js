const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const all_heros1 = marvel_heros.concat(dc_heros);
console.log(all_heros1);

const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Parnit"))

console.log(Array.from("Parnit"))

console.log(Array.from({name: "Parnit", age: 23}))  //interesting it gives empty array bcoz cant convert object to array
// we have to define that make array from key values etc..


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Array.of() creates a new Array instance with a variable number of arguments