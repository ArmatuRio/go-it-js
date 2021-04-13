
// 1--1 ---------------------------------------------
// const productName = 'Droid'; 
// const pricePerItem = 2000; 

  
//  console.log(productName);
// // 'Droid'

//  console.log(pricePerItem);
// // 2000


//1--2 -----------------------------------------------

// let productName = 'Droid';
// let pricePerItem = 2000;

//  productName = 'Repair droid';
//  pricePerItem = 3500;


//1--3 -----------------------------------------------

// const topSpeed =160;
// const distance =617.54;
// const login ='mango935';
// const isOnline  = true;
// const isAdmin = false;


// 1--4 ---------------------------------------------

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

// 1--5 ---------------------------------------------

// const productName = 'Дроид';
// const pricePerItem = 3500;

// const message =`Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;

// 1--6 ---------------------------------------------

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee  = 50;

// const totalPrice = (pricePerDroid*orderedQuantity+deliveryFee);

// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`; 

// 1--7 ---------------------------------------------
 
// function sayHi(){
// console.log('Привет, это моя первая функция!');
// }
// sayHi();

// 1--8 ---------------------------------------------

// function add(a,b,c) {
//   console.log(`Результат сложения равен ${a+b+c}`);
// }
  
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// 1--9 ---------------------------------------------

// function add(a, b, c) {
  
//  return a+b+c;
  
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// 1--10 ---------------------------------------------

// function makeMessage (name, price) {
  
//    const message =`Вы выбрали ${name}, цена за штуку ${price} кредитов`;
  
//   return message;
// };

// 1--11 ---------------------------------------------

// function calculateTotalPrice (orderedQuantity, pricePerItem) {

//   const totalPrice = orderedQuantity*pricePerItem;

//   return totalPrice;
// };

// 1--12 ---------------------------------------------

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  
// let sum = orderedQuantity * pricePerDroid + deliveryFee;
//  let message =`Вы заказали дроидов на сумму ${sum} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

//   return message;
// }

// 1--13 ---------------------------------------------





// 1--18 --------------------------------------------
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   // Пиши код ниже этой строки
// const totalPrice = pricePerDroid * orderedQuantity
//   let message =  (totalPrice > customerCredits) ? 'Недостаточно средств на счету!':`Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits-totalPrice} кредитов`;
//   // Пиши код выше этой строки
//   return message;
// }