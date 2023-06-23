/* Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція повинна повернути Promise, робота якого завершується поверненням добутку елементів масиву, якщо вони є типу Numbers, або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.
Приклад застосування функції:
calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// "Error! Incorrect array!" */

// function calcArrProduct(arr) {
//     return new Promise((resolve, reject) => {
//       if (!Array.isArray(arr)) {
//         reject("Error! Incorrect array!");
//         return;
//       }
  
//       const product = arr.reduce((acc, curr) => {
//         if (typeof curr !== "number") {
//           reject("Error! Incorrect array!");
//           return;
//         }
  
//         return acc * curr;
//       }, 1);
  
//       resolve(product);
//     });
//   }

  /*In this implementation, we create a new Promise that takes a callback function with two parameters: resolve and reject. Inside the callback, we first check if the arr argument is an array. If it's not, we immediately reject the promise with the error message "Error! Incorrect array!".
If the arr argument is indeed an array, we use the reduce function to iterate over the array and calculate the product of its elements. However, during the iteration, if we encounter an element that is not of type number, we also reject the promise with the same error message.
Finally, if all elements are valid numbers, we resolve the promise with the calculated product.
Here's an example of how you can use the calcArrProduct function: */

// const array1 = [1, 2, 3, 4];
// calcArrProduct(array1)
//   .then(product => console.log("Product:", product))
//   .catch(error => console.log("Error:", error));

// const array2 = [1, 2, "3", 4];
// calcArrProduct(array2)
//   .then(product => console.log("Product:", product))
//   .catch(error => console.log("Error:", error));

/*Output
Product: 24
Error: Error! Incorrect array! */
/*In the example above, array1 contains only valid numbers, so the promise 
is resolved with the product of the elements (which is 24). However, 
array2 contains a non-number element, so the promise is rejected with the error message "Error! Incorrect array!".*/

/*3  Створіть наступний асинхронний ланцюжок promise:
new Promise(function (resolve, reject) {
   // Запитуємо у користувача number за допомогою prompt()
   // Якщо користувач ввів не число - викликаємо reject()
   // Якщо користувач ввів число- викликаємо resolve(number)
}).catch(function (error) {
   return new Promise(function (resolve, reject) {
      // Запитуємо у користувача number, до тих пір, поки він його не введе
      // Після вводу числа - викликаємо resolve(number)
   });
}).then(function (result) {
   // Вивід number у консоль
});*/

// new Promise(function (resolve, reject) {
//     // Ask the user for number using prompt()
//     let number = prompt("Give number");
//     // if the user did not enter a number - we call reject()
//     if (isNaN(number)){
//         reject(error);
//     } 
//      resolve(Number(number));
    
//     // if the user entered a number, we call resolve(number)
//  }).catch(function (error) {
//     return new Promise(function (resolve, reject) {
//        // Ask the user for a number until he enters it
//        // after entering the number - call resolve(number)
       
//        let number;
//        while (isNaN(number)) {
//            number = prompt("Give number");
//        }
//        resolve(Number(number));
//     });
//  }).then(function (result) {
//     // Print  number to the console
//     console.log(result);
//  });

// /* 3  Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом (від 0 до N мілісекунд). Використовуючи проміси потрібно змінити цикл так, щоб числа виводилися в строгій послідовності від 0 до 10. Наприклад, якщо виведення нуля займає 4 секунди, а одиниці 2 секунди, то одиниця повинна дочекатися виведення  нуля і тільки потім почати свій відлік (щоб дотримуватися послідовності).
// Для розв’язку задачі необзідно застосувати задану функцію delay(i, time), яка повертає проміс, який резолвиться поточним значенням числа-лічильника циклу і, яке виводиться через час time мілісекунд. */ 

// let delays = [300,200,100,150,500];
// function delay(time) {
//     return new Promise(resolve => setTimeout(resolve, time));
//   }
//   function showNumbers(i, time) {
//     delay(time).then(() => {
//         console.log(i);
//       });
//   }
   
//   for (let i = 0; i < delays.length; i++) {
//     showNumbers(i, delays[i]);
//   }



  
function sayH(){
    return "helloe";
}

console.log(sayH());

function sayhello(){
    return new Promise((resolve, reject) => {
        resolve("hello");
    })
}

// how it works - need then.
sayhello().then((result) => {
    console.log(result);
})


function sum(a, b) {
    return new Promise((resolve, reject) => {
        if (a > 0 && b > 0) {
            resolve(a + b);
        } else {
            reject("wrong operand");
        }
    })
}

sum(0, 5).then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log(error);
})