// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area (a, b) {
    return a * b;
}
console.log('\n Площа прямокутника:');
console.log(area(4, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle (r) {
    return Math.PI * (r * r);
}
console.log('\n Площа кола:');
console.log(areaCircle(13));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder (h, r) {
    return 2 * Math.PI * (h + r);
}
console.log('\n Площа циліндру:');
console.log(areaCylinder(12, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
function arrayElem (arr) {
    for (let element of arr) {
        console.log (element);
    }
}
console.log('\n Створити функцію яка приймає масив та виводить кожен його елемент:');
arrayElem(coursesTitleArray);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('<h2>Функціюя яка створює параграф з текстом &#9759;</h2>');
function createParagraph (text) {
    document.write(`<p>${text}</p>`);
}
createParagraph('Цей текст заданий через аргумент функції яка створила параграф!');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('<h2>Функція яка створює "ul" з трьома елементами "li" &#9759;</h2>');
function createUl (text) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
createUl('Текст заданий через аргумент функції, яка створила три елемента "li", та в кожен елемент додала цей текст.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('<h2>Функція яка створює "ul" з трьома елементами "li" &#9759;</h2>');
function createUlAndLi (text, quantity) {
    document.write('<ul>');
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
createUlAndLi('Текст заданий через аргумент функції, яка створила три елемента "li" , та в кожен елемент додала цей текст. Кількість "li" визначається аргументом.', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('<h2>Функція яка приймає масив примітивних елементів, та будує для них список &#9759;</h2>');
function arrForUl (arr) {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}
arrForUl(coursesTitleArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write('<h2>Функція яка приймає масив об\'єктів з наступними полями id,name,age , та виводить їх в документ &#9759;</h2>');
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
function arrObjects(users) {
    document.write('<div class="container">');
    while (users.length % 4 !== 0) {
        users.push({name: 'advertising', id: '0000'});
    }
    for (const user of users) {
        if (user.name === 'advertising') {
            document.write(`<ul class="user">
                           <li><p>'Казино "..уярь <sub>р</sub>усню"'</p></li>
                           <li><p>Грай та вигравай!!!</p></li>
                           <li><p>...................</p></li>
                       </ul>`);
        }else{
            document.write(`<ul class="user">
                           <li><b>name: </b> <span>${user.name}</span></li>
                           <li><b>id: </b> <span>${user.id}</span></li>
                           <li><b>age: </b> <span>${user.age}</span></li>
                       </ul>`);
        }
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
function minNumber (arr) {
    return Math.min(...arr);
}
console.log('\n функція яка повертає найменьше число з масиву');
console.log(minNumber(arrNumber));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumNumbers = 0;
function sum (arr) {
    for (const num of arr) {
        if (typeof num === 'number') sumNumbers += num;
    }
    return sumNumbers;
}
console.log('\n функція яка приймає масив чисел, сумує значення елементів масиву та повертає його.');
console.log(sum([1,2,10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let num = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num;
    return arr;
}

console.log('\n Функція міняє місцями значення у відповідних індексах');
console.log(swap([11,22,33,44],0,1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const rates of currencyValues) {
        if (rates['currency'] === exchangeCurrency) {
            return sumUAH / rates['value'];
        }
    }
}

console.log('\n функція обміну валюти');
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42},{currency:'PLN',value:8.5}],'PLN'));