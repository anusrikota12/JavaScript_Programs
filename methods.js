/*


//push and pop method in array

let numbers=[10,20,30];
console.log(numbers);
numbers.push(40);
console.log(numbers);
numbers.pop();
console.log(numbers);



//shift and unshift method in array
let numbers=[10,20,30];
numbers.shift();
console.log(numbers);
numbers.unshift(5);
console.log(numbers);


//includes and indexOf method in array

let numbers=[10,20,30,40,50];
console.log(numbers.includes(40));
console.log(numbers.indexOf(30));


//join and concat method in array

let fruits=["Apple","Banana","Mango"];
console.log(fruits);
let result=fruits.join("-");
console.log(result);
let number1=[10,20];
let number2=[30,40];
let res=number1.concat(number2);
console.log(res);


*/

//reverse and sort method in array

let a=[10,20,30,40];
console.log("Reverse of array is: "+a.reverse());
let s=a.sort((a,b)=>a-b);
console.log("Sorted array is: "+s);