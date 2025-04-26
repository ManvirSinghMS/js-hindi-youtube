//for of

const arr = [1, 2, 3, 4, 5];

for(const num of arr){
    // console.log(num);
}


const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for(const [key, value] of map){
    console.log(`Key is ${key} and value is ${value}`);
}

const myObj = {
    'game1': 'Cricket',
    'game2': 'Football',
}

for(const [key,value] of myObj){
    console.log(key, ':-', value)
}