// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [
    2014,
    'rusnyahuinya',
    3,
    2,
    2023,
    -129030,
    true,
    'slavazsu',
    1.5,
    {name:'Serhii', age:34}
];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let objBook1 = {
    title: 'Колобок',
    pageCount: 6,
    genre: 'Екшин'
}
let objBook2 = {
    title: 'Курка Ряба',
    pageCount: 5,
    genre: 'Драма'
}
let objBook3 = {
    title: 'Ріпка',
    pageCount: 6,
    genre: 'Пригоди'
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let objBook4 = {
    title: 'Енеї́да',
    pageCount: 440,
    genre: 'Поема',
    autors: [
        {name:'Котляревський', age: 29},
        {name:'Тільки Котляревський', age: 29}
    ]
}
let objBook5 = {
    title: 'Прості речі',
    pageCount: 264,
    genre: 'мемуари і біографії',
    autors: [
        {name: 'Тетяна Терен', age: 36},
        {name: 'Анна Липківська', age: 36}
    ]
}
let objBook6 = {
    title: 'То є Львів',
    pageCount: 240,
    genre: 'Пригоди',
    autors: [
        {name:'Мар’яна Савка', age: 49},
        {name:'Юрій Андрухович', age: 62},
        {name:'Костянтин Москалець', age: 59}
    ]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrUsers = [
    {name: 'Vasya', username: 'VaS', password: 22334455},
    {name: 'Vova', username: 'VoV', password: 12345678},
    {name: 'Sasha', username: 'SaS', password: 87654321},
    {name: 'Kostya', username: 'KoS', password: 43434343},
    {name: 'Victor', username: 'ViK', password: 55555555},
    {name: 'Olga', username: 'OlG', password: 56745687},
    {name: 'Svetlana', username: 'SvT', password: 90987890},
    {name: 'Sergei', username: 'SeR', password: 23412323},
    {name: 'Tomash', username: 'ToM', password: 80241054},
    {name: 'Kuzya', username: 'Kuz', password: 78231453}
]
console.log('Passwords:')
console.log(arrUsers[0].password);
console.log(arrUsers[1].password);
console.log(arrUsers[2].password);
console.log(arrUsers[3].password);
console.log(arrUsers[4].password);
console.log(arrUsers[5].password);
console.log(arrUsers[6].password);
console.log(arrUsers[7].password);
console.log(arrUsers[8].password);
console.log(arrUsers[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;

if (x !== 0) {
    console.log('В і р н о')
}else{
    console.log('Н е в і р н о')
}

x = 0;
if (x !== 0) {
    console.log('В і р н о')
}else{
    console.log('Н е в і р н о')
}

x = -3;
if (x !== 0) {
    console.log('В і р н о')
}else{
    console.log('Н е в і р н о')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 35;
if (time > 0 && time < 15) {
    console.log(`${time} хвилина це перша четверть години`)
}else if (time >= 15 && time < 30) {
    console.log(`${time} хвилина це друга четверть години`)
}else if (time >= 30 && time < 45) {
    console.log(`${time} хвилина це третя четверть години`)
}else if (time >= 45 && time <= 59) {
    console.log(`${time} хвилина це четверта четверть години`)
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 14;
if (day <= 10) {
    console.log(`Ваш день ${day} припадає на першу декаду місяця!`)
}else if (day > 10 && day <= 20) {
    console.log(`Ваш день ${day} припадає на другу декаду місяця!`)
}else if (day > 20 && day <= 31) {
    console.log(`Ваш день ${day} припадає на третю декаду місяця!`)
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = +prompt('Який день тижня обираєш, від 1 до 7?')
switch (dayOfWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log(`unknown day: '${dayOfWeek}'!`);
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let firstNumber = +prompt('Введіть перше число для порівнняння');
let lastNumber = +prompt('Введіть друге число для порівнняння');

if (firstNumber > lastNumber) {
    console.log(`Число ${firstNumber} більше`);
}else if (firstNumber < lastNumber) {
    console.log(`Число ${lastNumber} більше`);
}else if (firstNumber === lastNumber) {
    console.log(`${firstNumber} = ${lastNumber}`);
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

x = 0;
console.log(x || "default");

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let durationOfStudy = coursesAndDurationArray[0];
if (durationOfStudy['monthDuration'] > 5) {
    console.log(`${durationOfStudy['title']} Супер`);
}

durationOfStudy = coursesAndDurationArray[1]
if (durationOfStudy['monthDuration'] > 5) {
    console.log(`${durationOfStudy['title']} Супер`);
}

durationOfStudy = coursesAndDurationArray[2]
if (durationOfStudy['monthDuration'] > 5) {
    console.log(`${durationOfStudy['title']} Супер`);
}

durationOfStudy = coursesAndDurationArray[3]
if (durationOfStudy['monthDuration'] > 5) {
    console.log(`${durationOfStudy['title']} Супер`);
}

durationOfStudy = coursesAndDurationArray[4]
if (durationOfStudy['monthDuration'] > 5) {
    console.log(`${durationOfStudy['title']} Супер`);
}

durationOfStudy = coursesAndDurationArray[5] ['monthDuration']
if (durationOfStudy['monthDuration'] > 5) {
    console.log(`${durationOfStudy['title']} Супер`);
}