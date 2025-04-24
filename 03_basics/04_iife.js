// Immediately Invoked Function Expression (IIFE)
// global scope k pollution se problem hai kayi baaar uske pollution ko hataane k liye hamne iife use kiya
// iife as name suggest immediately invoke ho jaande aa 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//()()  this is how iife works


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')