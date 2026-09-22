/*

let i=1;
for(let i=1;i<=5;i++){
    console.log("Iteration: "+i);
}  
let j=1;
while(j<=5){
    console.log("Iteration: "+j);
    j++;
}
let k=1;
do{
    console.log("Iteration: "+k);
    k++;
}while(k<=5);




let fruits=["Apple","Banana","Mango","Orange"];
for(let fruit of fruits){
    console.log(fruit);
}


*/

let student={
    name:"Anu Sri",
    age:20,
    course:"JavaScript"
};
for(let key in student) {
    console.log(key+": "+student[key]);
}