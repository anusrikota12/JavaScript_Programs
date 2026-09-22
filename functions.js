/*
function greet() {
    console.log("Hello, CIET");
}
greet();

//function with parameters

function greet(name) {
    console.log("Hello, "+name);
}
greet("Anu Sri");

//function with returntype

function add(a,b) {
    return a+b;
}
let result=add(10,20);
console.log("Sum is: "+result);

*/
//Arrow functions
const add=(a,b)=>{
    return a+b;
}   

const multiply=(a,b)=>a*b;


let sum=add(10,20);
let product=multiply(10,20);

console.log("Sum is: "+sum);    
console.log("Product is: "+product);