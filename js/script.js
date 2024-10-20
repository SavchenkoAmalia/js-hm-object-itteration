//! 1

// const user ={
//     name: 'Bob',
//     age: 30,
//     hobby: 'play voleyball',
//     premium: true
// }

// const {name, age, mood = 'happy'} = user;

// // user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (let key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }

//! 2

// const user1 ={
//     name: 'Bob',
//     age: 30,
//     hobby: 'play voleyball',
//     premium: true,
// }

// const {name, age, hobby, premium} = user1;

// function countProps(obj) {
//     return Object.keys(obj).length;
// }

// console.log(countProps(user1))

//! 3

// const employees = {
//     Maksim: 23,
//     Oleg: 14,
//     Bob: 28,
//     Pavlo: 18,
//     Oleksandr: 26
// }

// const { Maksim, Oleg, Bob, Pavlo, Oleksandr } = employees;

// function findBestEmployee(employees){
//     let maxTasks = 0;
//     let bestEmployee = '';

//     for (const [name, tasks] of Object.entries(employees)) {
//         if (tasks > maxTasks) {
//             maxTasks = tasks;
//             bestEmployee = name;
//         }
//     }

//     return `${bestEmployee}: ${maxTasks}`;
// }
// console.log(findBestEmployee(employees));

//! 4

// const employees = {
//     Maksim: 23000,
//     oleg: 14000,
//     Bob: 28000,
//     Pavlo: 18000,
//     Oleksandr: 26000
// }

// const {Maksim, ...rest } = employees;

// function countTotalSalary(employees){
//     let allSume = 0;
//     for(let value in employees){
//         allSume += employees[value];
//     }
//     return allSume;
// }

// console.log(`загальна сума всіх зарплат: ${countTotalSalary(employees)}`)

//! 5

// let arr = [
//     { name: 'Amalia', age: 14},
//     { name: 'Denis', age: 12},
//     { name: 'Sacha', age: 16},
//     { name: 'Maksim', age: 10}
// ]

// let [ firstUser, secondUser, thirdUser, fourthUser] = arr

// function getAllPropValues(arr, prop) {
//     const values = [];
//     for(let obj of arr){
//         values.push(obj[prop]);
//     }
//     return values;

// }

// console.log(getAllPropValues(arr, 'age'));

//! 6

// const allProdcuts = [
//   { name: "Banana", price: 50, quantity: 10 },
//   { name: "Apple", price: 45, quantity: 14 },
//   { name: "Orange", price: 27, quantity: 5 },
//   { name: "Kiwi", price: 30, quantity: 3 },
// ];

// const [firstFruit, ...rest] = allProdcuts;

// function calculateTotalPrice(allProdcuts, productName) {
//   let allPrice = 0;
//   for (let product of allProdcuts) {
//     if (product.name === productName) {
//       allPrice += product.price * product.quantity;
//     }
//   }
//   return allPrice;
// }

// for (let product of allProdcuts) {
//   const allPrice = calculateTotalPrice(allProdcuts, product.name);
//   console.log(`ціна ${product.name}: ${allPrice}грн`);
// }

//! 7

// const account = {
//     name: 'Amalia',
//     balance: 1000,
//     transactionHistory: [],

//     getBalance() {
//         return this.balance;
//     },

//     deposit(amount) {
//               if (amount > 0) {
//                 this.balance += amount;
//                 this.transactionHistory.push({ type: 'внесення', amount});
//                 return `Внесено ${amount} грн. Новий баланс: ${this.balance} грн.`;
//               }
//               return 'Сума повинна бути більше нуля.';
//             },

//     withdrawal(amount) { 
//         if (amount > 0 && amount <= this.balance){
//             this.balance -= amount;
//             this.transactionHistory.push({ type: 'зняття', amount});
//                 return `Знято ${amount} грн. Новий баланс: ${this.balance} грн.`; 
//         }
//         return 'Недостатньо коштів.Спробуйте ввести іншу суму';
//     },

//     getTransactionHistory() {
//         if (this.transactionHistory.length === 0) {
//                     return 'Історія транзакцій порожня.';
//                   }
//                   return this.transactionHistory.map((transaction, index) => {
//                     return `${index + 1}. ${transaction.type} на суму ${transaction.amount} грн.`;
//                   }).join('\n');
//                 },
//     }

//     const {name, balance, transactionHistory} = account;
//   console.log(account.getBalance());
//   console.log(account.deposit(500));
//   console.log(account.deposit(500));
//   console.log(account.withdrawal(200)); 
//   console.log(account.withdrawal(2200));
//   console.log(account.getTransactionHistory()); 