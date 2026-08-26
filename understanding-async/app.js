// setTimeout(() => {
//     console.log("now working>---");
    
    
// }, 2000);
// console.log("hey");
// console.log("hey2");
// setTimeout(() => {
//     console.log("hey3");
// }, 0);
// console.log("hey4");

// ASYNC CODE
// fetch 
// axios
// Promise
// settimeout
// setInterval
 
//  then catch 
//  callbacks
//  async await


// const apiTake = fetch(`https://dummyjson.com/users`)
// console.log(apiTake);

// const fb = fetch(`https://www.facebook.com`)
// console.log(fb);

// var ans = new Promise((res, rej)=>{
// var  n = Math.floor(Math.random() * 10);
// if(n<5){
//     return res();
// }else{
//     return rej();
// }

// })
// ans.then(function (){
//     console.log("below");
    
// })
// .catch(function (){
//     console.log("above");
    
// })
 
// var ans = new Promise(function (res, rej){
//     return res("sabse pehle ghar par aoo")

// })

// var p2 = ans.then(function(data){
//     console.log(data);
//    return new Promise(function(res, rej){
//         return res("gate kholo or gate lagao")
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res('khana pakao khana khaoo')
//     })
// })

//  var p4 = p3.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res('khana pakao khana khaoo')
//     })
// })

// // async function abcd(){
// //   let raw = await fetch(`https://randomuser.me/api/`)
// //    let ans = await raw.json();
// //   console.log(ans);
  
// // }


// abcd()