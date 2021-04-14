// Module 1. Task №1
// Объяви две переменные, productName для названия товара 
// и pricePerItem для хранения цены за штуку.При объявлении 
// присвой переменным следующие характеристики товара:
// название - строка 'Droid';
// цена за штуку - число 2000.

// Write your code under this line
// const productName = 'Droid';
// const pricePerItem = 2000;

  
// console.log(productName); // 'Droid'
// console.log(pricePerItem); // 2000

// Module 1. Task №2
// Имя товара изменили на 'Repair droid' и увеличили его цену на 1500 кредитов. 
// Переопредели значения переменных pricePerItem и productName после их объявления.

// Start code
// let productName = 'Droid';
// let pricePerItem = 2000;

// productName = 'Repair droid';
// pricePerItem += 1500;

// // Write your code under this line
// console.log(productName); // 'Repair droid'
// console.log(pricePerItem); // 3500

// Module 1. Task №3
// Объяви следующие переменные используя ключевое слово const или let 
// и присвой им соответствующие значения.
// topSpeed - число 160.
// distance - число 617.54.
// login - строка 'mango935'.
// isOnline - буль true.
// isAdmin - буль false.

// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// Module 1. Task №4
// Дополни код, присвоив переменной totalPrice выражение 
// для подсчёта общей суммы заказа.
// Переменная pricePerItem хранит цену одной единицы товара, 
// а orderedQuantity - количество единиц товара в заказе.

// Базовый код
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Пиши код ниже этой строки
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);

// Module 1. Task №5
// Объяви перемнную message и запиши в неё сообщение о покупке, 
// строку в формате: Вы выбрали < имя товара >, 
// цена за штуку < цена товара > кредитов.
// Где < имя товара > и < цена товара > это значения 
// переменных productName и pricePerItem.Используй синтаксис шаблонных строк.

// Базовый код
// const productName = 'Дроид';
// const pricePerItem = 3500;

// // Пиши код ниже этой строки
// const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;

// console.log(message);

// Module 1. Task №6
// Магазин по продаже ремонтных дроидов готов к открытию, 
// осталось написать скрипт для их заказа.
// Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800;
// orderedQuantity - количество дроидов в заказе, значение 6;
// deliveryFee - стоимость доставки, значение 50;
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки;
// message - сообщение о состоянии заказа в формате; 
// Вы заказали дроидов на сумму < сумма заказа > кредитов.
// Доставка(<цена доставки> кредитов) включена в сумму заказа.

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

// console.log(message);

// Module 1. Task №7
// Объяви функцию sayHi, внутри которой добавь console.log() 
// со строкой 'Привет, это моя первая функция!'.
// После объявления вызови функцию sayHi.

// Пиши код ниже этой строки
// function sayHi() {
// console.log('Привет, это моя первая функция!');
// };

// sayHi();

// Module 1. Task №8
// Функция add должна уметь складывать три числа и выводить результат в консоль. 
// Добавь функции add три параметра a, b и c, 
// которые будут получать значения аргументов при её вызове.
// Дополни console.log() так, чтобы он логировал строку 
// 'Результат сложения равен <результат>', 
// где < результат > это сумма переданных чисел.

// Пиши код ниже этой строки
// function add(a, b, c) {
//   console.log(`Результат сложения равен ${a + b + c}`);
//   // Пиши код выше этой строки
// }
  
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// Module 1. Task №9
// Дополни код функции add так, 
// чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// function add(a, b, c) {
//   //  Пиши код ниже этой строки
//     return a + b + c;
//   //  Пиши код выше этой строки
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10)); // 52
// console.log(add(10, 20, 30)); // 60
// console.log(add(5, 10, 15)); // 30

// Module 1. Task №10
// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. 
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка 
// Вы выбрали < имя товара >, цена за штуку < цена товара > кредитов, 
// где < имя товара > и < цена товара > это значения параметров name и price.
// Используй синтаксис шаблонных строк.

// function makeMessage (name, price) {
//   // Пиши код ниже этой строки
//    const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
//   // Пиши код выше этой строки
//   return message;
// };

// console.log(makeMessage ('Радар', 6150));
// console.log(makeMessage ('Сканер', 3500));
// console.log(makeMessage ('Реактор', 8000));
// console.log(makeMessage('Двигатель', 4070));

// Module 1. Task №11
// Функция calculateTotalPrice считает и возвращает общую сумму покупки. 
// Она принимает два параметра, значения которых будут задаваться во время её вызова.
// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, 
// результат умножения кол - ва товаров на цену одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Пиши код ниже этой строки
//   const totalPrice = orderedQuantity * pricePerItem;
//   // Пиши код выше этой строки
//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice (8, 60)); // 480
// console.log(calculateTotalPrice (3, 400)); // 1200
// console.log(calculateTotalPrice (1, 3500)); // 3500
// console.log(calculateTotalPrice (12, 70)); // 840
// console.log(calculateTotalPrice (100, 3)); // 300

// Module 1. Task №12
// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) 
// составляет и возвращает сообщение о покупке ремонтных дроидов.
// Она объявляет три параметра, значения которых будут задаваться во время её вызова.
// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате 
// Вы заказали дроидов на сумму < сумма заказа > кредитов.
// Доставка(<цена доставки> кредитов) включена в сумму заказа. 
// Не забудь о цене доставки при вычислениях общей стоимости.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Пиши код ниже этой строки

//   const message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

//   // Пиши код выше этой строки
//   return message;
// };

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));


// Module 1. Task №13
// Функция isAdult объявляет один параметр age (возраст), 
// значение которого будет задаваться во время её вызова.
// Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие.
// Человек считается совершеннолетним в возрасте 18 лет и старше.

// function isAdult(age) {
//   // Пиши код ниже этой строки
//   const passed = age >= 18;

//   // Пиши код выше этой строки
//   return passed;
// };

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// Module 1. Task №14
// Функция `isValidPassword(password)` проверяет равенство сохранённого и введённого паролей 
// и возвращает результат проверки - буль`true` или`false`.
// Переменная`SAVED_PASSWORD` хранит значение ранее сохраненного пароля.
// Введённый пароль передаётся в параметр`password`.
// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. 
// Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
//   const isMatch = password === SAVED_PASSWORD;

//   // Пиши код выше этой строки
//   return isMatch;
// };

// console.log(isValidPassword('mangodab3st'));
// console.log(isValidPassword('kiwirul3z'));
// console.log(isValidPassword('jqueryismyjam'));

// Module 1. Task №15
// Добавь выражение проверки совершеннолетия пользователя, 
// значения параметра age, в условие для инструкции if.
// Если пользователь совершеннолетний, должен выполняться 
// блок if и в переменную message записывается строка 'Вы совершеннолетний человек'.
// В противном случае должен выполняться блок else и 
// записывается строка 'Вы не совершеннолетний человек'.

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Дополни эту строку
//     message = 'Вы совершеннолетний человек';
//   } else {
//     message = 'Вы не совершеннолетний человек';
//   }

//   return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));
// console.log(checkAge(5));

// Module 1. Task №16
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа 
// и возвращает сообщение о результате.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова:
// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:
// Если в заказе указано число, превышающее количество товаров на складе, 
// в переменную message записывается строка 'На складе недостаточно товаров!'.
// В противном случае записывается строка 'Заказ оформлен, с вами свяжется менеджер'.

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if (ordered > available) {
//     message = 'На складе недостаточно товаров!';}
//   else { message = 'Заказ оформлен, с вами свяжется менеджер' };
//   // Пиши код выше этой строки
//   return message;
// };

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 80));

// Module 1. Task №17 (оператор присвоения).
// Замени выражения со стандартными математеческими операторами 
// на комбинированный оператор присвоения с добавлением, 
// вычитанием, умножением и делением.

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Пиши код ниже этой строки
// a += 2 // a = a + 2;
// b -= 4 // b = b - 4;
// c *= 3 // c = c * 3;
// d /= 10 // d = d / 10;

// console.log(a, b, c, d); // 7 6 45 2

// Module 1. Task №18
// Станция по продаже ремонтных дроидов готова к запуску, 
// осталось написать программное обеспечение для отдела продаж.
// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) 
// выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции.
// Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// pricePerDroid - цена одного дроида;
// orderedQuantity - кол-во заказанных дроидов;
// customerCredits - сумма средств на счету клиента.
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и 
// присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, 
// запиши в переменную message строку 'Недостаточно средств на счету!';
// в противном случае, вычти сумму покупки со счёта клиента и 
// запиши в переменную message сообщение: 'Вы купили <число> дроидов, 
// на счету осталось < число > кредитов'.

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
// const totalPrice = pricePerDroid * orderedQuantity;
//   message = totalPrice > customerCredits ? 'Недостаточно средств на счету!' : `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;
  
//   // Пиши код выше этой строки
//   return message;
// };

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// Module 1. Task №19
// Функция checkPassword(password) получает пароль пользователя в параметр password, 
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD 
// и возвращает сообщение о результате сравнения, хранящееся в переменной message.
// Если значение параметра password равно null, 
// значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, 
// в переменную message присваивается строка 'Добро пожаловать!'.
// Если ни одно из предыдущих условий не выполнилось, 
// в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Дополни эту строку
//     message =  'Отменено пользователем!';
//   } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// };

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

// Module 1. Task №20
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа 
// и возвращает сообщение о результате.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:
// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, 
// в переменную message присваивается строка В заказе еще нет товаров.
// Eсли товаров в заказе больше чем доступно товаров на складе, 
// то в переменную message присваивается строка 'Слишком большой заказ, на складе недостаточно товаров!'.
// В противном случае в переменную message присваевается строка 'Заказ оформлен, с вами свяжется менеджер'.

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if (ordered === 0) {
// message = "В заказе еще нет товаров";}
//   else if(ordered > available) {
//   message = 'Слишком большой заказ, на складе недостаточно товаров!';}
//   else {message = 'Заказ оформлен, с вами свяжется менеджер'};
//   // Пиши код выше этой строки
//   return message;
// };

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// Module 1. Task №21
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. 
// Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number 
// в числовой промеждуток от srart до end.То есть число должно быть больше либо 
// равно start и меньше либо равно end.Результатом выражения проверки будет буль true или false.

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // дополни эту строку

//   return isInRange;
// };

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(10, 30, 76));

// Module 1. Task №22
// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. 
// Проверка происходит по типу подписки.Получить доступ могут только пользователи с подпиской pro или vip.
// Присвой переменной canAccessContent выражение проверки подписки. 
// Если значение параметра subType равно строкам 'pro' или 'vip', 
// пользователь получит доступ.Результатом выражения проверки будет буль true или false.

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку

//   return canAccessContent;
// };

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent('starter'));
// console.log(checkIfCanAccessContent('vip'));
// console.log(checkIfCanAccessContent('free'));

// Module 1. Task №23
// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. 
// То есть число должно быть меньше либо равно start и больше либо равно end.
// Результатом выражения проверки будет буль true или false.
// Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения 
// переменной isInRange используя оператор!.

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Дополни эту строку

//   return isNotInRange;
// };

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// Module 1. Task №24
// Функция getDiscount(totalSpent) определяет значение скидки 
// в зависимости от общей суммы потраченных денег(параметр totalSpent) 
// в магазине за всё время(партнёрская программа).Скидка записывается 
// в переменную discount и возвращается из функции как результат её работы.
// Используя ветвления и логические операторы, дополни код функции.
// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах 
// BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Пиши код ниже этой строки
// if (totalSpent >= 50000) {
// discount = GOLD_DISCOUNT;} 
//   else if(totalSpent >= 20000 && totalSpent < 50000) {
//   discount = SILVER_DISCOUNT;}
//   else if (totalSpent >= 5000 && totalSpent < 20000) {
//   discount = BRONZE_DISCOUNT;}
//   else {discount = BASE_DISCOUNT};
//   // Пиши код выше этой строки
//   return discount;
// };

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// Module 1. Task №25 (тернарный оператор)
// Выполни рефакторинг решения задачи «Склад товаров», 
// заменив инструкцию if...else тернарным оператором.

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
// //   if (ordered > available) {
// //     message = 'На складе недостаточно товаров!';
// //   } else {
// //     message = 'Заказ оформлен, с вами свяжется менеджер';
// //   }

//   // Пиши код выше этой строки
//   return message;
// };

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// Module 1. Task №26
// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) 
// с сохранённым паролем администратора(константа ADMIN_PASSWORD) 
// и возвращает строку с сообщением о результате.
// Используя тернарный оператор дополни функцию так, что:
// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Доступ разрешен'.
// В противном случае, присвой message строку 'Доступ запрещен, неверный пароль!'.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Пиши код ниже этой строки
// message = password === ADMIN_PASSWORD ? 'Доступ разрешен' : 'Доступ запрещен, неверный пароль!';
//   // Пиши код выше этой строки
//   return message;
// };

// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));
// console.log(checkPassword('r3actsux'));

// Module 1. Task №27
// Функция getSubscriptionPrice(type) получает строку 
// с типом подписки пользователя(параметр type), проверяет её на совпадение 
// с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся 
// в переменной price.
// Если значение параметра type это строка:
// 'starter' - цена подписки 0 кредитов.
// 'professional' - цена подписки 20 кредитов.
// 'organization' - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// if (type === 'starter') {
//   price = 0;
// } else if (type === 'professional') {
//   price = 20;
// } else if (type === 'organization') {
//   price = 50;
// }

// После рефакторинга инструкция if..else была заменена на switch. 
// Дополни код инструкции switch, чтобы функция работала правильно.

// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case 'starter': // Дополни эту строку
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

//  console.log(getSubscriptionPrice('professional'));
//  console.log(getSubscriptionPrice('organization'));
//  console.log(getSubscriptionPrice('starter'));

// Module 1. Task №28
// Функция checkPassword(password) получает пароль в параметр password, 
// проверяет его на совпадение с паролем администратора в переменной 
// ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
// Если значение параметра password:
// равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Отменено пользователем!';
//       break;
      
//     case ADMIN_PASSWORD:
//       message = 'Добро пожаловать!';
//       break;
      
//     default:
//       message = 'Доступ запрещен, неверный пароль!';
//   };
      
      
// //   if (password === null) {
// //     message = 'Отменено пользователем!';
// //   } else if (password === ADMIN_PASSWORD) {
// //     message = 'Добро пожаловать!';
// //   } else {
// //     message = 'Доступ запрещен, неверный пароль!';
// //   }

//   return message;
// };

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

// Module 1. Task №29
// Функция getShippingCost(country) должна проверять возможность доставки товара 
// в страну пользователя(параметр country) и возвращать сообщение о результате 
// хранящееся в переменной message.Обязательно используй инструкцию switch.
// Формат возвращаемой строки Доставка в <страна> будет стоить <цена> кредитов, 
// где вместо < страна > и < цена > необходимо подставить соотвествующие значения.
// Список стран и стоимость доставки:
// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Ямайка - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, 
// то функция должна вернуть строку 'Извините, в вашу страну доставки нет'

// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
// switch (country) {
//   case "Китай":
//     message = `Доставка в ${country} будет стоить ${100} кредитов`;
//     break;
    
//     case 'Чили':
//     message = `Доставка в ${country} будет стоить ${250} кредитов`;
//     break;
    
//   case 'Австралия':
//     message = `Доставка в ${country} будет стоить ${170} кредитов`;
//     break;
    
//   case 'Ямайка':
//     message = `Доставка в ${country} будет стоить ${120} кредитов`;
//     break;
    
//   default:
//     message = 'Извините, в вашу страну доставки нет';
// };
    
    
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(getShippingCost('Австралия'));
// console.log(getShippingCost('Германия'));
// console.log(getShippingCost('Китай'));
// console.log(getShippingCost('Чили'));
// console.log(getShippingCost('Ямайка'));
// console.log(getShippingCost('Швеция'));

// Module 1. Task №30 (Длинга строки).
// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, 
// в которой указана его длина.Дополни шаблонную строку в переменной message 
// длиной строки из параметра name.

// function getNameLength(name) {
//   const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

//   return message;
// };

//  console.log(getNameLength('Poly')); // 4
// console.log(getNameLength('Harambe')); // 7
// console.log(getNameLength('Billy')); // 5
// console.log(getNameLength('Joe')); // 3


// Module 1. Task №31
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим 
// элементам или свойствам строки в переменной course.
// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.

// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Пиши код выше этой строки

// console.log(courseTopicLength); // 24
// console.log(firstElement); // J
// console.log(lastElement); // x

// Module 1. Task №32 (Метод slice()).
// Функция getSubstring(string, length) принимает строку и возвращает 
// подстроку от начала и до length символов.
// Она объявляет два параметра, значения которых 
// будут задаваться во время её вызова:
// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной 
// length символов(от начала) из строки string.

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Дополни эту строку

//   return substring;
// };

// console.log(getSubstring('Привет мир', 3)); // При
// console.log(getSubstring('Привет мир', 6)); // Привет
// console.log(getSubstring('Привет мир', 8)); // Привет м
// console.log(getSubstring('Привет мир', 10)); // Привет мир
// console.log(getSubstring('Привет мир', 0)); // 

// Module 1. Task №33
// Функция formatMessage(message, maxLength) принимает строку (параметр message) 
// и форматирует её, если длина превышает значение в параметре maxLength.
// Дополни код функции так, что если длина строки:
// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и 
// добавляет в конец троеточие '...', после чего возвращает укороченную версию.

// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
// result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
// // Пиши код выше этой строки
//   return result;
// };

// console.log(formatMessage('Curabitur ligula sapien', 16)); // Curabitur ligula...
// console.log(formatMessage('Curabitur ligula sapien', 23)); // Curabitur ligula sapien
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // Vestibulum facilisis...
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // Vestibulum facilisis purus nec
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // Nunc sed turpis...
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // Nunc sed turpis a felis in nunc fringilla

// Module 1. Task №34 (Методы toLowerCase() и toUpperCase()).
// Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, 
// но в нижнем регистре.Присвой переменной normalizedInput 
// выражение создания строки в нижнем регистре из параметра input.

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Дополни эту строку
//   return normalizedInput;
// };

// console.log(normalizeInput('Привет мир')); // привет мир
// console.log(normalizeInput('Это НЕ СпаМ')); // это не спам
// console.log(normalizeInput('Большие СКИДКИ')); // большие скидки

// Module 1. Task №35
// Функция checkName(fullname, name) принимает два параметра и 
// возвращает буль true или false - результат проверки вхождения подстроки name 
// в строку fullname.
// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), 
// в полное имя(параметр fullname).Пусть функция строго относится к регистру букв, 
// то есть «Петя» и «петя» для неё разные имена.

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Дополни эту строку
//   return result;
// }; 

// console.log(checkForName('Егор Колбасов', 'Егор')); // true
// console.log(checkForName('Егор Колбасов', 'егор')); // false
// console.log(checkForName('Егор Колбасов', 'егОр')); // false
// console.log(checkForName('Егор Колбасов', 'Женя')); // false
// console.log(checkForName('Вадим Некрасов', 'Вадим')); // true
// console.log(checkForName('Вадим Некрасов', 'вадим')); // false
// console.log(checkForName('Вадим Некрасов', 'Дима')); // false

// Module 1. Task №36
// Функция checkForSpam(message) принимает строку (параметр message), 
// проверяет её на содержание запрещенных слов spam и sale, 
// и возвращает результат проверки.Слова в строке параметра message 
// могут быть в произвольном регистре, например SPAM или sAlE.
// Если нашли запрещенное слово (spam или sale) 
// то функция возвращает буль true.
// Если в строке нет запрещенных слов, 
// функция возвращает буль false.

// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
// result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") ? true : false;
 
//   // Пиши код выше этой строки
//   return result;
// };

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));


