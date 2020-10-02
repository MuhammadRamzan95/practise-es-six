// let name = "ramzan";



//  console.log(name)


// const school = "uaf"

// var obj = {
//     name : school
// }
// console.log(obj)

//   template literals
// let firstName = "Muhammad";
// let lastName = "Ramzan";
// console.log(`My good name is ${firstName} ${lastName}`)


// spread operator
// var student1 = ["ahmed" , "ali"]

// var student2 = [...student1 ,"ramzan" , "saud"]

// var merge = student1.concat(student2)
// console.log(student2)

// var student1 = {name : "ramzan"}

// var student2 = {...student1 , school : "uaf"}

// console.log(student2)



// object destructuring 


// let student = {
//     name : "ramzan",
//     University : "UAF",
//     agNo :9759
// }
// let{name,University,agNo} = student ;

// console.log(name)
// console.log(agNo)



//  ternary operaters

// let ag = 21 ;

// if(ag > 25){
//     console.log("he is young")
// }else{
//     alert("he is child")
// }
  // es6 give 
//   if = ? , else= :

// let check = 
// ag > 25 ?
// "he is young" : "he is child"
// console.log(check)



// let bool = true ;

// let name = bool && "ramzan" ;
// console.log(name)



// Async &sync

// var number;
// setTimeout( function() {
//   console .log("number 1")
  
// }, 1000);

// console.log("number 2")

// console.log("number 3")


// Promise 


// var promise = new Promise (function(resolve , reject){
//     var admision = "open";
//     // var admision = "not yet open"
//   if(admision === "open" ){
//   setTimeout(() => {
//     resolve("admision are open")
//   }, 4000);
   
//   }else{
//     reject(" sorry! not open")
//   }

// })

// promise.then(function(data)
// {
// console.log("Resolve==>" ,data)
// }
// )

// .catch(function(error){
// console.log("Error==>" , error)
// })


// let promise = new Promise(function(resolve ,reject ){

//   firebase.database().ref("users").on("child_added" , function(data){

//   if(data.val()){
//     resolve(data.val())
//   }else{
//     reject("data was not found")
//   }
//   })
// })


// promise.then(function(data){
//   console.log(data)
// })


// .catch(function(error){
//   console.log(error)
// })
 