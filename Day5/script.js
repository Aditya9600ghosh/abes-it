// function display(){
//     alert("Welcome to the website");
// }




// "use strict" //is used to follow all the rules of a variable declaration without "use strict" you can use $ without "let"
// let a = 12;
// let b = 22/7;
// let c = "Hello"
// let d = [1,2,2,3]
// let e = {
//     name: "Arun",
//     id:12
// }
// let f = true

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)


// function display(){
//     console.log($);
// }
// display();
// console.log(_);

// Type Conversion - string to number
// let x = "12"/"6"
// console.log(x);


// Type Conversion - Boolean to string
// let bol = true;
// let str = String(bol);
// console.log(str.charAt(1));

// let str = "abh";
// let num = Number(str);
// console.log(typeof num);
// console.log(num);

// let str = "true";
// let num = Boolean(str);
// console.log(typeof num);
// console.log(num);


// let num = Boolean(0); // return false for 0 and "" otherwise true
// console.log(num);



// function display(){
//     let x = confirm("Are you Sure");
//     alert("User clicks" + x); // when you click on ok return true or if you click on cancel return false
// }


// function display(){
//     let x = prompt("Enter your Name","Abhishek");
//     alert(x);
// }


// === compare value and datatype while == only checks value
// let a = "12";
// let b = 12.0;
// console.log(a===b); // here value is same but datatype is different


function validate(){
    let login = document.getElementById("login").value;
    let pass = document.getElementById("pass").value;
    let p1 = document.getElementById("result");
    if(login == "admin" && pass == "admin"){
        p1.innerText="LOGIN SUCCESS";
    }
    else{
        p1.innerText="Login Failed";
    }
}