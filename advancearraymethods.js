/*

//map method

const numbers=[1,2,3,4,5];
const doubled=numbers.map((num)=>num*2);
console.log("Doubled numbers: "+doubled);
console.log("Original numbers: "+numbers);



//filter method

let numbers=[10,15,20,25,30];
let result=numbers.filter(function(num){
    return num>20;
});
console.log("Filtered numbers: "+result);
console.log("Original numbers: "+numbers);



//reduce method

let numbers=[10,20,30,40];
let sum=numbers.reduce(function(total,num){
    return total+num;
},0);
console.log("Sum of numbers: "+sum);

*/

//find method

let numbers=[10,20,30,40,50];
let result=numbers.find(function(num){
    return num>20;
});
console.log(result);