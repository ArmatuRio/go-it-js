// 2-1-------------



// function checkAge(age) {

//   if (age>=18) { // Дополни эту строку

//     return 'Вы совершеннолетний человек';

//   }

//   return 'Вы не совершеннолетний человек';

// }



// 2-2-------------



// function checkPassword(password) {

//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   // Пиши код ниже этой строки





//   if (password === ADMIN_PASSWORD) {

//     return 'Добро пожаловать!';

//   }

//     return 'Доступ запрещен, неверный пароль!';

//   }



// 2-3-------------



// function checkStorage(available, ordered) {

//   // Пиши код ниже этой строки




//   if (ordered === 0) {

//     return'В заказе еще нет товаров';

//   }

//   if (ordered > available) {

//     return'Слишком большой заказ, на складе недостаточно товаров!';




//   }



//   return 'Заказ оформлен, с вами свяжется менеджер';

//   // Пиши код выше этой строки

// }



// 2-4-------------

// const fruits=['яблоко','слива','груша','апельсин'];



// 2-5-------------



// Стартовый код

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// // Пиши код ниже этой строки

// const firstElement = fruits[0];

// const secondElement = fruits[1];

// const lastElement = fruits[3];



// 2-6-------------



// Стартовый код

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// // Пиши код ниже этой строки



// fruits[1]='персик';

// fruits[3]='банан';





// 2-7-------------



// // Стартовый код

// const fruits = ['яблоко', 'персик', 'груша', 'банан'];

// // Пиши код ниже этой строки

// const fruitsArrayLength = fruits.length;



// 2-8-------------

// const fruits = ['яблоко', 'персик', 'груша', 'банан'];

// // Пиши код ниже этой строки



// const lastElementIndex = fruits.length-1;

// const lastElement=fruits[lastElementIndex];

// console.log(lastElement);

// 2-9-------------

// function getExtremeElements(array) {

//     // Пиши код ниже этой строки

//  const lastElementIndex = array.length-1;

// const lastElement=array[lastElementIndex];

// const firstElement=array[0];

// return [firstElement,lastElement]



//     // Пиши код выше этой строки

//   }



// 2-10-------------



// function splitMessage(message, delimeter) {

//   let words;

//   // Пиши код ниже этой строки

//   return world = message.split(delimeter);





//   // Пиши код выше этой строки

//   return words;

// }



// 2-11-------------



// function calculateEngravingPrice(message, pricePerWord) {

//   // Пиши код ниже этой строки





// let array = message.split(' ');

// let wordCount = array.length;

// let price = wordCount*pricePerWord;

// return price;





//   // Пиши код выше этой строки

// }



// 2-12-------------



// function makeStringFromArray(array, delimeter) {

//   let string;

//   // Пиши код ниже этой строки


//  string = array.join(delimeter);


//   // Пиши код выше этой строки

//   return string;

// }



// 2-13-------------

// function slugify(title) {
//   // Пиши код ниже этой строки
//  return slug = title.toLowerCase().split(' ').join('-');


//   // Пиши код выше этой строки
// }

// 2-14-------------

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls =fruits.slice(0,2) ;
// const nonExtremeEls =fruits.slice(1,4) ;
// const lastThreeEls = fruits.slice(-3);

// 2-15-------------

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients =oldClients.concat(newClients) ;

// 2-16-------------

// 2-16-------------



// function makeArray(firstArray, secondArray, maxLength) {

//     // Пиши код ниже этой строки

// const allPlanets = firstArray.concat(secondArray);





// return allPlanets.slice(0,maxLength);



//     // Пиши код выше этой строки

//   }





// 2-17-------------



// const start = 3;

// const end = 7;



// for (let i = start; i <= end; i += 1) { // Дополни эту строку

//   console.log(i);

// }



// 2-18-------------



// function calculateTotal(number) {

//   // Пиши код ниже этой строки

// let total = 0;



// for (let i=0; i <= number; i +=1){

//   total+=i;

// }

// return total;





//   // Пиши код выше этой строки

// }



// 2-19-------------



// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];



// for (let i = 0;i < fruits.length; i+= 1) { // Дополни эту строку

//   const fruit = fruits[i]; // Дополни эту строку

//   console.log(fruit);

// }



// 2-20-------------



// function calculateTotalPrice(order) {

//   let total = 0;

//   // Пиши код ниже этой строки

//  for (let i=0; i < order.length; i +=1){

//    total+=order[i];

//  }

//   // Пиши код выше этой строки

//   return total;

// }



// 2-21-------------



// function findLongestWord(string) {

//   // Пиши код ниже этой строки

//   let total=[];

//   string = string.split(' ');

//   for(const word of string){

//   if(word.length>=total.length){

//   total = word;

//   }

//   }

//   return total;



//   // Пиши код выше этой строки

// }


// 2-22-------------

