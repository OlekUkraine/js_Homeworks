// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area = (a, b) => a * b;
console.log('Площа прямокутника:');
console.log(area(4, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaCircle = (r) => Math.PI * (r * r);
console.log('\n Площа кола:');
console.log(areaCircle(21));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaCylinder = (h, r) => 2 * Math.PI * (h + r);
console.log('\n Площа циліндру:');
console.log(areaCylinder(85, 33));

// - створити функцію яка приймає масив та виводить кожен його елемент
let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

let arrayElem = (arr) => {
    for (let element of arr) {
        console.log (element);
    }
}
console.log('\n Створити функцію яка приймає масив та виводить кожен його елемент:');
arrayElem(coursesTitleArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('<h2 class="title">Функція яка створює параграф, текст додається через аргумент &#9759;</h2>')
let createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph('Цей текст був заданий через аргумент функції, яка створила цей параграф!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('<h2 class="title">Функція яка створює "ul" з трьома елементами "li" &#9759;</h2>');
let createUl = (text) => {
    document.write(`<ul class="ul"> 
                       <li>${text}</li>
                       <li>${text}</li>
                       <li>${text}</li>
                   </ul>`)
}
createUl('Текст заданий через аргумент функції, яка створила три елемента "li", та в кожен елемент додала цей текст.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('<h2 class="title">Функція яка створює "ul" з елементами "li", кількість елементів "li" задається через аргумент &#9759;</h2>');
let createUlAndLi = (text, quantity) => {
    document.write('<ul class="ul">');
    for (let i = 0; i < quantity; i++) document.write(`<li>${text}</li>`);
    document.write('</ul>');
}
createUlAndLi('Текст заданий через аргумент функції, яка створила три елемента "li" , та в кожен елемент додала цей текст. Кількість "li" визначається аргументом.', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('<h2>Функція яка приймає масив примітивних елементів, та будує для них список &#9759;</h2>');
let arrForUl = (arr) => {
    document.write('<ul class="ul">');
    for (const element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}
arrForUl(coursesTitleArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];
document.write('<h2>Функція яка приймає масив об\'єктів з наступними полями id,name,age , та виводить їх в документ &#9759;</h2>');
let arrObjects = (arr) => {
    document.write('<div class="container">');
    for (const user of arr) {
            document.write(`<ul class="user">
                           <li><b>name: </b> <p>${user.name}</p></li>
                           <li><b>id: </b> <p>${user.id}</p></li>
                           <li><b>age: </b> <p>${user.age}</p></li>
                       </ul>`);
    }
    document.write('</div>');
}
arrObjects(users);


// - створити функцію яка повертає найменьше число з масиву
let arrNumber = [
    45,
    14,
    56,
    23,
    91,
    2,
    39,
    201,
    74,
    1,
    352,
    55,
    83,
    69,
    40
];

let minNumber = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}
console.log('\n Функція яка повертає найменьше число з масиву');
console.log(minNumber(arrNumber));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumNumbers = 0;
let sum = (arr) => {
    for (const num of arr) (typeof num !== 'number') || (sumNumbers += num);
    return sumNumbers;
};
console.log('\n Функція яка приймає масив чисел, сумує значення елементів масиву та повертає його.')
console.log(sum(arrNumber));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let elem = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = elem;
    return arr;
};
console.log('\n Функція міняє місцями значення у відповідних індексах');
console.log('\n До: ' + [11,22,33,44] + '\n Після: ' + swap([11,22,33,44],0,1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues,exchangeCurrency) => {
    let sum = 0;
    for(const whatCurrency of currencyValues) {
        if(exchangeCurrency === whatCurrency['currency']) return sum = sumUAH / whatCurrency['value'];
    }
}
console.log('\n Функція обміну валюти');
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42},{currency: 'PLN',value: 8.5}],'PLN'));