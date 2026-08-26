// QUESTION !

// 1  object har wo chez hai jiske properties or actions hoo har cheez ke hote hai like laptop, mobile

// const laptop = {
//   companyName: "Dell",
//   ram: 8,
  
// };



// Question 2
// let company = {
//     name: "apple",
//     product: "watch"
// }

// Dot notation
// console.log(company.product);

// Bracket notation(ye jab variable me store ho tab use hota haii.....)
// console.log(company["product"]);


// questiion 3


// OUTPUT

// {name: 'Ali', city: 'Karachi'}

// question 4

// let me = {

//     meraNaam : "asaad",
//     age : 18,
//     city : "Krachi"
// }


// // console.log(Object.keys(me));
// // console.log(Object.values(me));
// // console.log(Object.entries(me));


// question 5


// function countProperties(obj) {

//   return Object.keys(obj).length;
// }

// const student = {
//   name: "Ali",
//   age: 20,
//   city: "Lahore"
// };

// console.log(countProperties(student)); 



// Q 6


// dono data store karne ke liye use hote hai but alag hai    , onject ab use hota hai jab hamare pass properties ho or uski value bhi store karni hoo  ,  jabki array sirf ek sedhi and simple list hoti hai jisme index ke hisab se value store hoti hai

// Q 7

// 10,20,30



// Q 8


// const arr = [1,2,3,4,5,6,7,8,9];
// // console.log(arr[2]);
// console.log(arr.length -1);


// // console.log(arr.at(1));

// // console.log(arr.at(-1));




// // Q 9 

// function sum(numbers){

//     let total = 0;

//     for(let i = 0; i < numbers.length; i++){
//         total = total + numbers[i];
//     }

//     return total;
// }

// console.log(sum([10,20,30]));



// Q 10

// const arr = [1,2,2,3,4,4,5];

// const result = [...new Set(arr)];

// console.log(result);



// // Q 11


// const user = {

// name : 'asaad',
// city : 'krachi'


// }


// const {name , city} = user;
// console.log(name);
// console.log(city);


// const colors = ["red", "blue", "green"];

// const [a, b, c] = colors;

// console.log(a);
// console.log(b);
// console.log(c);


// Q 12


// blue

// Q 13

// 22


// Q 14


// const user = {

// name:"Ali",

// address:{

// city:"Karachi"

// }

// };

// const {address : {city}} = user;
// console.log(city);


// Q 15

// Shallow Copy ({ ...obj }): 
// Upar-upar se naya banata hai, lekin andar ka nested array/object purane wale se jura rehta hai. 
// Isiliye copy me kuch badlo to original bhi kharab (change) ho jata hai.

// Deep Copy (structuredClone(obj)): 
// Andar ghus kar sab cheezon ka ek bilkul naya aur azaad dabba bana deta hai.
// Isme copy ko jitna marzi badlo, original bilkul safe rehta hai.


// Q 16

// Lahore

// Q 17

// issure ye hota hai jab ham copied wale me changes akrte hai to wo nested wale 
// me bhi chnage kar deta hai bahar wale to halanke safe rehte haiin


// Q 18

// structuredClone(obj) the most modern one
// JSON.parse(JSON.stringify(obj))
// _.clonedeep(obj)


// Q 19
// rest ka matlab hai means ke bache huwe ek array me dikha

// Q 20

// [10,20,30,40]

// Q 21

// [10,20,30,40]

// Q 22

// const obj1 = {
// name:"Ali"

// };
// const obj2 = {

// age:20

// };

// const merged = {...obj1, ...obj2};
// console.log(merged);


// Q 23


// forEach(): 
// Sirf ek normal loop hai jo array ke har element par ja kar kaam karta hai.
// Badle mein kuch RETURN nahi karta (iska result hamesha undefined hota hai).


// map(): 
// Har element ko badal kar (transform karke) ek BILKUL NAYA ARRAY return karta hai.
// Background mein khali array banana aur push karne ka saara kaam khud kar deta hai.


// Q 24



// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); 
// Q 25

// const numbers = [10, 20, 30];

// const totalSum = numbers.reduce((acc, curr) => {
//   return acc + curr;
// }, 0); 

// console.log(totalSum); 
// Q 26



// filter(): 
// Array me dhoondta hai aur jitne bhi items condition match karenge, 
// un sab ka ek NAYA ARRAY bana kar return karega. Kuch na mile to khali dabba [] dega.

// find(): 
// Array me check karta hai aur jo PEHLA item condition match karega, 
// sirf us akele item ko return karega (array nahi banata). Kuch na mile to undefined dega.



// Q 27


// 1. call():
// Function ko FAURAN chala deta hai.
// Baqi arguments comma (,) de kar ek-ek karke pass karte hain.

// 2. apply():
// Function ko FAURAN chala deta hai.
// Baqi arguments ko ek ARRAY [] ke andar band karke pass karte hain.

// 3. bind():
// Function ko fauran NAHI chalata.
// Ye ek NAYA FUNCTION bana kar de deta hai jise tum baad mein jab chaho chala sakte ho.



// Q 28


// Hasan Karachi

// Q 29


// Ali Pakistan


// Q 30

// ye print hoga

// [ 'HTML', 'CSS', 'JavaScript' ]
// [ 'HTML', 'CSS', 'JavaScript' ]

// Is code me Shallow Copy hui hai ya Deep Copy?

// Jawab: Shallow Copy hui hai. Spread operator nested objects ya arrays ki deep copy nahi karta.


// Is problem ko Deep Copy se kaise solve karenge?

// isko hum JS ke in built function structuredClone() se slove kar sakte hai jisse dono objects copy or 
// main wala dono alag print honge or copy wale me changes karne se main wale me nhi hogi



// Agar structuredClone() use karein to output me kya farq padega?

//  [ 'HTML', 'CSS' ]
// // [ 'HTML', 'CSS', 'JavaScript' ]




// jin question predict wagera karna thaa usme mene diye gaye code ko yaha nhi likha haii q ke hame 
// predcit karna hai 