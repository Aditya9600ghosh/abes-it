// Map method .......

// let num = [1,2,3,4,45,5,45];
// let newnum = num.map(x=>x*2);
// console.log(newnum);


// Filter Method .....
// let evennum = num.filter(x=>x%2==0);
// console.log(evennum);


// Reduce Method....
// here x is accumulator and y is the current value & reduce is used to reduce the values of an array to a single value
// let sum = num.reduce((x,y)=>x+y,0);
// console.log(sum);

// let prod = num.reduce((p,q)=>p*q,1);
// console.log(prod);


// const students = [
//     {name: 'Alice',score:50},
//     {name: 'Bob',score:65},
//     {name: 'Charlie',score:80},
//     {name: 'David',score:45},
//     {name: 'Rahul',score:50}
// ];

// with map
// let scores = students.map(x=>x.score).filter(x=>x>60).reduce((x,y)=>x+y,0);


// without map
// let scores = students.filter(x=>x.score>60).reduce((x,y)=>x+y.score,0);
// console.log(scores);

// let scores = students.filter(x=>x.score>60).map((x)=>x.score+10).reduce((x,y)=>x+y,0);
// console.log(scores);

// foreach method.....

// let num = [2,4,5,6,3,7,9];
// num.forEach((x) => {    
//     if(x%3==0){
//         console.log(x)
//     }
// });


// CallBack Functions


// let sayhello = () => {
//     console.log("Hello World");
// }

// console.log("start");

// setTimeout(sayhello, 2000);

// console.log("end");


console.log("start");
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task completed");
        setTimeout(()=>{
            console.log("third task completed");
        },1000)
    },2000)
},3000)
console.log("end");