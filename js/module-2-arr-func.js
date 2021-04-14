// Module 2. Task №1 (Ранний возврат).
// Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//     let message;

//     message = age >= 18 ? 'Вы совершеннолетний человек' : 'Вы не совершеннолетний человек';

//   return message;
// };

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// function checkAge(age) {
//   if (age >= 18) { // Дополни эту строку
//     return 'Вы совершеннолетний человек';
//   }

//   return 'Вы не совершеннолетний человек';
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// Module 2. Task №2 (Ранний возврат).
// Функция checkPassword получает пароль пользователя в параметр password, 
// проверяет его на совпадение с паролем администратора в переменной 
// ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки

//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   };
  
//   return 'Доступ запрещен, неверный пароль!';
//   // Пиши код выше этой строки
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

// Module 2. Task №3
// Функция checkStorage проверяет возможность оформления заказа и 
// возвращает сообщение о результате.Она принимает два параметра, 
// значения которых будут задаваться во время её вызова.
// available - доступное количество товаров на складе;
// ordered - количество единиц товара в заказе.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки
//   let message;

//   if (ordered === 0) {
//     message = 'В заказе еще нет товаров';
//   } else if (ordered > available) {
//     message = 'Слишком большой заказ, на складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   }

//   return message;
//   // Пиши код выше этой строки
// };

// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки

//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   } if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   } return 'Заказ оформлен, с вами свяжется менеджер';
//   // Пиши код выше этой строки
// };

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// Module 2. Task №4
// Объяви переменную fruits и присвой ей массив фруктов - 
// строк 'яблоко', 'слива', 'груша' и 'апельсин'.

// Пиши код ниже этой строки
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// console.log(fruits);

// Module 2. Task №5
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement); // яблоко
// console.log(secondElement); // слива
// console.log(lastElement); // апельсин

// Module 2. Task №6
// Переопредели значения элементов с индексами 1 и 3. 
// Замени 'слива' на 'персик', а 'апельсин' на 'банан'.

// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// fruits[1] = 'персик';
// fruits[3] = 'банан';

// console.log(fruits); // ["яблоко", "персик", "груша", "банан"]

// Module 2. Task №7 (Длина массива).
// Объяви переменную fruitsArrayLength и присвой 
// ей длину массива fruits используя свойство length.

// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength); // 4

// Module 2. Task №8
// Объяви две перемнные:
// Имя переменной	Ожидаемое значение
// lastElementIndex	индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	значение последнего элемента массива

// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex); // 3
// console.log(lastElement); // банан

// Module 2. Task №9 (Крайние элементы массива).
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - 
// массив элементов произвольной длины.Функция должна возвращать массив из 
// двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//     // return array.slice(array[0], array[array.length]);
//     return array = [array[0], array[array.length - 1]];

//     // Пиши код выше этой строки
//   };

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));
// console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));

// Module 2. Task №10 (Метод split()).
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала 
// в переменной words результат разделения строки message по разделителю delimeter - 
// массив строк.

// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
//   words = message.split(delimeter);
  
//   // Пиши код выше этой строки
//   return words;
// };

// console.log(splitMessage('Манго спешит на поезд', ' ')); // ["Манго", "спешит", "на", "поезд"]
// console.log(splitMessage('Манго', '')); // ["М", "а", "н", "г", "о"]
// console.log(splitMessage('лучшее_за_неделю', '_')); // ["лучшее", "за", "неделю"]

// Module 2. Task №11 (Метод split()).
// Сервису гравировки украшений нужна функция, которая бы автоматически считала 
// цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). 
// Эта функция принимает строку, состоящую из слов разделённых только 
// пробелами(параметр message) и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   return message.split(" ").length * pricePerWord;
//   // Пиши код выше этой строки
// };

// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10)); // 50
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 20)); // 100 
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40)); // 160 
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20)); // 80

// Module 2. Task №12 (Метод  join()).
// Дополни код функции makeStringFromArray(array, delimeter) так, 
// чтобы она возвращала в переменной string результат соединения элементов 
// массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
 
//  string = array.join(delimeter);
 
//   // Пиши код выше этой строки
//   return string;
// };

// console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));
// console.log(makeStringFromArray(['М', 'а', 'н', 'г', 'о'], ''));
// console.log(makeStringFromArray(['лучшее', 'за', 'неделю'], '_'));

// Module 2. Task №13 (Генератор slug).
// Напиши функцию slugify(title) которая принимает заголовок статьи, 
// параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.

// function slugify(title) {
//   // Пиши код ниже этой строки
//     return title.toLowerCase().split(" ").join("-");
 
//   // Пиши код выше этой строки
// };

// console.log(slugify('Массивы для новичков')); // массивы-для-новичков
// console.log(slugify('Английский для разработчика')); // английский-для-разработчика
// console.log(slugify('Десять секретов JavaScript')); // десять-секретов-javascript
// console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ')); // как-стать-junior-разработчиком-за-две-недели


// Module 2. Task №14 (Метод slice()).
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls); //  ["яблоко", "слива"]
// console.log(nonExtremeEls); //  ["слива", "груша", "апельсин"]
// console.log(lastThreeEls); // ["груша", "апельсин", "банан"]

// Module 2. Task №15 (Метод concat()). 
// Дополни код так, чтобы в переменной allClients получился массив 
// всех элементов массивов oldClients и newClients.

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку

// console.log(allClients);

// Module 2. Task №16 (Композиция массивов).
// Напиши функцию makeArray(firstArray, secondArray, maxLength) 
// для создания нового массива со всеми элементами двух исходных 
// firstArray и secondArray.Параметр maxLength содержит максимально 
// допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, 
// функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
  
// return firstArray.concat(secondArray).length > maxLength ? firstArray.concat(secondArray).slice(0, maxLength) : firstArray.concat(secondArray);
//     // Пиши код выше этой строки
//   };

// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3)); // ["Манго", "Поли", "Аякс"]
// console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4)); //  ["Манго", "Поли", "Хьюстон", "Аякс"]
// console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3)); // ["Манго", "Аякс", "Челси"]
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2)); // ["Земля", "Юпитер"]
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4)); // ["Земля", "Юпитер", "Нептун", "Уран"]
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0)); // []

// Module 2. Task №17 (Цикл for).
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне 
// от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// };

// Module 2. Task №18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) 
// и возвращает сумму всех целых чисел от единицы и до этого числа.Например, 
// если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let sum = 0;
// for (let i = 0; i <= number; i += 1) {
//     sum += i;
//     };
//     return sum;
//   // Пиши код выше этой строки
// };

// console.log(calculateTotal(1)); // 1
// console.log(calculateTotal(3)); // 6
// console.log(calculateTotal(7)); // 28
// console.log(calculateTotal(18)); // 171
// console.log(calculateTotal(24)); // 300
// console.log(calculateTotal(40)); // 820

// Module 2. Task №19 (Итерация по массиву).
// Дополни код цикла for так, чтобы он последовательно логировал 
// все элементы массива fruits.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// };

// Module 2. Task №20 (Подсчёт суммы покупки).
// Напиши функцию calculateTotalPrice(order), 
// которая принимает один параметр order - массив чисел, 
// и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, 
// которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// for (let i = 0; i < order.length; i += 1) {
// total += order[i]};
//   // Пиши код выше этой строки
//   return total;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// console.log(calculateTotalPrice([200, 500, 800, 300, 100])); // 1900

// Module 2. Task №21 (Поиск самого длинного слова).
// Напиши функцию findLongestWord(string) которая принимает произвольную строку 
// состоящую только из слов разделённых пробелом(параметр string) 
// и возвращает самое длинное слово в этой строке.

// 1 спосіб
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const newString = string.split(" ");
//   let longestWord = newString[0];
  
//   for (let i = 0; i < newString.length; i += 1) {
    
//   if(newString[i].length > longestWord.length) {
//     longestWord = newString[i];
//   };
//   };
//   return longestWord;
//   // Пиши код выше этой строки
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
// console.log(findLongestWord('Google do a roll')); // Google
// console.log(findLongestWord('May the force be with you')); // force

// 2 спосіб (тернарник)
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const newString = string.split(" ");
//   let longestWord = newString[0];
  
//   for (let i = 0; i < newString.length; i += 1) {
//       newString[i].length > longestWord.length ? longestWord = newString[i] : longestWord;
//   };
//   return longestWord;
//   // Пиши код выше этой строки
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
// console.log(findLongestWord('Google do a roll')); // Google
// console.log(findLongestWord('May the force be with you')); // force

// Module 2. Task №22 (Метод push()).
// Дополни код функции createArrayOfNumbers(min, max) так, 
// чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
// for (let i = min; i <= max; i += 1) {
// numbers.push(i);
// }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]
// console.log(createArrayOfNumbers(20, 40)); // [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

// Module 2. Task №23
// Напиши функцию filterArray(numbers, value), 
// которая принимает массив чисел(параметр numbers) и возвращает новый массив, 
// в котором будут только те элементы массива numbers, 
// которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// let filterArray = [];
  
//   for(let i = 0; i < numbers.length; i += 1) {
//     numbers[i] > value ? filterArray.push(numbers[i]) : filterArray; 
//   };

// return filterArray;
//   // Пиши код выше этой строки
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Module 2. Task №24 (Метод includes()).
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), 
// и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// return fruits.includes(fruit);
//   // Дополни эту строку
// };

// console.log(checkFruit('слива'));
// console.log(checkFruit('мандарин'));
// console.log(checkFruit('груша'));
// console.log(checkFruit('Груша'));
// console.log(checkFruit('яблоко'));

// Module 2. Task №25 (Общие элементы).
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. 
// они присутствуют в обоих исходных массивах.А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины 
// в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, 
// которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// let newArray = [];
//   for(const element of array1) {
//     array2.includes(element) ? newArray.push(element) : newArray;
//   };
//   return newArray;
//   // Пиши код выше этой строки
// };

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// Module 2. Task №26 (Цикл for...of).
// Выполни рефакторинг кода функции calculateTotalPrice(order) 
// заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

// //   for (let i = 0; i < order.length; i += 1) {
// //     total += order[i];
// //   }
  
//   for(const element of order) {
//     total += element;
//   };

//   // Пиши код выше этой строки
//   return total;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138 
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// console.log(calculateTotalPrice([])); // 0

// Module 2. Task №27
// Выполни рефакторинг функции filterArray(numbers, value) 
// заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

// //   for (let i = 0; i < numbers.length; i += 1) {
// //     const number = numbers[i];

// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   }
  
//   for(const number of numbers) {
//     number > value ? filteredNumbers.push(number) : filteredNumbers;
//   };

//   return filteredNumbers;
//   // Пиши код выше этой строки
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Module 2. Task №28 (Оператор %).
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
// Объявлена переменная a.
// Значение переменной a это число 0.
// Объявлена переменная b.
// Значение переменной b это число 1.
// Объявлена переменная c.
// Значение переменной c это число 3.
// Объявлена переменная d.
// Значение переменной d это число 5.
// Объявлена переменная e.
// Значение переменной e это число 2.

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a, b, c, d, e)


// Module 2. Task №29 (Чётные числа).
// Напиши функцию getEvenNumbers(start, end) которая возвращает 
// массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка.

// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//   const array = [];
 
// for(let i = start; i <= end; i += 1) {
//   i % 2 === 0 ? array.push(i) : array;
// };
  
//   return array;
//     // Пиши код выше этой строки
//   };

// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // [8]
// console.log(getEvenNumbers(7, 7)); // []

// Module 2. Task №30 (Оператор break).
// Дополни код так, чтобы в переменную number записывалось первое число 
// от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number); // 10

// Module 2. Task №31 (Оператор break vs return в функции).
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

//   // Пиши код выше этой строки
// }

// console.log(findNumber(2, 6, 5)); // 5
// console.log(findNumber(8, 17, 3)); // 9
// console.log(findNumber(6, 9, 4)); // 8
// console.log(findNumber(16, 35, 7)); // 21

// Module 2. Task №32 (Функция includes()).
// Напиши функцию includes(array, value), которая делает тоже самое, 
// что и метод массива массив.includes(значение) - проверяет, 
// есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   // Пиши код ниже этой строки
//     for (const element of array) {
//         if (element === value) {
//             return true;
//         };
//     };
//     return false;
//   // Пиши код выше этой строки
//     };
  
//   console.log(includes([1, 2, 3, 4, 5], 3));
//     console.log(includes([1, 2, 3, 4, 5], 17));
//     console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
//     console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));  
//   console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
//     console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));


