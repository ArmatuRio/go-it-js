
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


// 1--19 --------------------------------------------


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password===null) { // Дополни эту строку
//     message =  'Отменено пользователем!';
//   } else if (password===ADMIN_PASSWORD) { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }

// 1--20 --------------------------------------------


// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if(ordered === 0) {
// message = 'В заказе еще нет товаров' ;
// }
//   else if (ordered>available) {
// message = 'Слишком большой заказ, на складе недостаточно товаров!'
// } else { 
// message = 'Заказ оформлен, с вами свяжется менеджер'
// }
//   // Пиши код выше этой строки
//   return message;
// }

// 1--21 --------------------------------------------

// function isNumberInRange(start, end, number) {
//   const isInRange =number>=start&&number<=end ; // дополни эту строку

//   return isInRange;
// }


// 1-22-------------



// function checkIfCanAccessContent(subType) {

//   const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку



//   return canAccessContent;

// }



// 1-23-------------

// function isNumberNotInRange(start, end, number) {

//   const isInRange = number >= start && number <= end;

//   const isNotInRange =!isInRange; // Дополни эту строку



//   return isNotInRange;

// }



// 1-24-------------



// function getDiscount(totalSpent) {

//   const BASE_DISCOUNT = 0;

//   const BRONZE_DISCOUNT = 0.02;

//   const SILVER_DISCOUNT = 0.05;

//   const GOLD_DISCOUNT = 0.1;

//   let discount;

//   // Пиши код ниже этой строки

// if (totalSpent>=50000){

// discount = GOLD_DISCOUNT;

//  } else if (totalSpent>=20000 &&50000){

// discount = SILVER_DISCOUNT;

//  } else if (totalSpent>=5000&&20000){

// discount = BRONZE_DISCOUNT;

//  } else {

// discount = BASE_DISCOUNT;


//  }



//   // Пиши код выше этой строки

//   return discount;





// 1-25-------------



// function checkStorage(available, ordered) {

//   let message;

//   // Пиши код ниже этой строки





// message = ordered>available?'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер';

//   // Пиши код выше этой строки

//   return message;

// }



// 1-26-------------



// function checkPassword(password) {

//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   let message;

//   // Пиши код ниже этой строки

// message = password === ADMIN_PASSWORD ? 'Доступ разрешен':'Доступ запрещен, неверный пароль!';

//   // Пиши код выше этой строки

//   return message;

// }



// 1-27-------------



// function getSubscriptionPrice(type) {

//   let price;

//   // Пиши код ниже этой строки



//  switch (type) { // Дополни эту строку

//     case 'starter' : // Дополни эту строку

//       price = 0; // Дополни эту строку

//       break;



//     case 'professional': // Дополни эту строку

//       price = 20; // Дополни эту строку

//       break;



//     case 'organization': // Дополни эту строку

//       price = 50; // Дополни эту строку

//       break;

//   }



//   // Пиши код выше этой строки

//   return price;

// }



// 1-28-------------

// function checkPassword(password) {

//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   let message;





//   switch (password){

//   case null:

//     message ='Отменено пользователем!';

//     break;

//     case ADMIN_PASSWORD:

//     message ='Добро пожаловать!';

//     break;

//   default:

//    message = 'Доступ запрещен, неверный пароль!';

// }


//   return message;

// }





// 1-29-------------



// function getShippingCost(country) {

//   let message;

//   // Пиши код ниже этой строки

// switch(country){

//   case  'Китай':

//   message = 'Доставка в Китай будет стоить 100 кредитов';

//   break;

//   case 'Чили' :

//   message = 'Доставка в Чили будет стоить 250 кредитов';

//   break;

//   case 'Австралия':

//   message = 'Доставка в Австралия будет стоить 170 кредитов';

//   break;



//   case 'Ямайка':

//   message = 'Доставка в Ямайка будет стоить 120 кредитов';

//   break;



//   default:

//   message = 'Извините, в вашу страну доставки нет';

// }

//   // Пиши код выше этой строки

//   return message;

// }



// 1-30-------------



// function getNameLength(name) {

//   const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку



//   return message;

// }



// 1-31-------------



// const courseTopic = 'JavaSript для начинающих';

// // Пиши код ниже этой строки



// const courseTopicLength = courseTopic.length;



// const firstElement = courseTopic[0];





// const lastElement = courseTopic[courseTopic.length-1];





// 1-32-------------



// function getSubstring(string, length) {

//   const substring = string.slice(0,length); // Дополни эту строку



//   return substring;

// }



// 1-33-------------



// function formatMessage(message, maxLength) {

//   let result;

// // Пиши код ниже этой строки

//  if (message.length<=maxLength){

//    result = message;

//  } else {

//  message.length > maxLength;

//    result = message.slice(0,maxLength)+"...";

//  }





// // Пиши код выше этой строки

//   return result;

// }





// 1-34-------------



// function normalizeInput(input) {

//   const normalizedInput = (input.toLowerCase()); // Дополни эту строку

//   return normalizedInput;

// }



// 1-35-------------



// function checkForName(fullName, name) {

//  const result =(fullName.includes(name));// Дополни эту строку

//   return result;

// }



// 1-36-------------



// function checkForSpam(message) {

//   let result;

//   // Пиши код ниже этой строки

//  message= message.toLowerCase();

//   result = message.includes('sale')||message.includes('spam');

//   // Пиши код выше этой строки

//   return result;

// }


