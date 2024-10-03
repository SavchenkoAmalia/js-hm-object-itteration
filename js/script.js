//! 1

const user ={
    name: 'Bob',
    age: 30,
    hobby: 'play voleyball',
    premium: true
}

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (let key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

//! 2

const user1 ={
    name: 'Bob',
    age: 30,
    hobby: 'play voleyball',
    premium: true,
}

function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps(user1))

//! 3

const employees = {
    Maksim: 23,
    oleg: 14,
    Bob: 28,
    Pavlo: 18,
    Oleksandr: 26
}

function findBestEmployee(employees){
    let maxTasks = 0;
    let bestEmployee = '';

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }

    return `${bestEmployee}: ${maxTasks}`;
}
console.log(findBestEmployee(employees));

//! 4

const employees = {
    Maksim: 23000,
    oleg: 14000,
    Bob: 28000,
    Pavlo: 18000,
    Oleksandr: 26000
}

function countTotalSalary(employees){
    let allSume = 0;
    for(let value in employees){
        allSume += employees[value];
    }
    return allSume;
}

console.log(`загальна сума всіх зарплат: ${countTotalSalary(employees)}`)

//! 5

let arr = [
    { name: 'Amalia', age: 14},
    { name: 'Denis', age: 12},
    { name: 'Sacha', age: 16},
    { name: 'Maksim', age: 10}
]

function getAllPropValues(arr, prop) {
    const values = [];
    for(let obj of arr){
        values.push(obj[prop]);
    }
    return values;

}

console.log(getAllPropValues(arr, 'age'));

//! 6

const allProdcuts = [
  { name: "Banana", price: 50, quantity: 10 },
  { name: "Apple", price: 45, quantity: 14 },
  { name: "Orange", price: 27, quantity: 5 },
  { name: "Kiwi", price: 30, quantity: 3 },
];

function calculateTotalPrice(allProdcuts, productName) {
  let allPrice = 0;
  for (let product of allProdcuts) {
    if (product.name === productName) {
      allPrice += product.price * product.quantity;
    }
  }
  return allPrice;
}

for (let product of allProdcuts) {
  const allPrice = calculateTotalPrice(allProdcuts, product.name);
  console.log(`ціна ${product.name}: ${allPrice}грн`);
}
