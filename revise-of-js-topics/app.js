// SPREAD OPERATOR
// const oldArray = [1, 2];
// const newArray = [...oldArray, 3, 4]; 

// console.log(newArray); 

// REST OPERATOR
// use for rest of the things in an array
// const [first, second, ...restItems ] = ['HTML', 'CSS', 'JS', 'REACT'];
// console.log(restItems);
// console.log(first);



// const prices = [100, 500, 250, 1000];
// const cheap = prices.filter(p => p < 300); 
// console.log(cheap);


// const users = [{id: 1, name: "Ali"}, {id: 2, name: "Asaad"}];
// const user = users.find(u => u.id === 2); 
// console.log(user);


// const fruits = ['aaple', 'banana'];
// const mapping = fruits.map(m => m.toUpperCase());
// console.log(mapping);

// const numbers = [12, 24, 54, 76, 99, 18, 29];
// const cheapOnes = numbers.filter(cheap => cheap < 50)
// console.log(cheapOnes);


const page = 3;
const limit = 10;
const url = `https://api.com/items?page=${page}&limit=${limit}`;
console.log(url);