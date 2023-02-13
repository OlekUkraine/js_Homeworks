// --створити масив з:
// - з 5 числових значень
let arrNumbers = [37, 12, 51, 2, 111];

// - з 5 стічкових значень
let arrStrings = ['one', 'two', 'three', 'four', 'five'];

// - з 5 значень стрічкового, числового та булевого типу
let arrMix = [11, 'book', 'ready', 4, true];

// - та вивести його в консоль
console.log('Array numbers:');
console.log(arrNumbers);

console.log('Array strings:');
console.log(arrStrings);

console.log('Array mix:');
console.log(arrMix);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
console.log('\n')
let newArray = [];
newArray[0] = 2;
newArray[1] = 16;
newArray[2] = 'dog';
newArray[3] = true;
newArray[4] = false;
console.log(newArray);


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arrNoName = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
console.log('\n (while)');
let i = 0;
while (i < arrNoName.length) {
    const num = arrNoName[i];
    i++;
    console.log(num);
}

// 2. перебрати його циклом for
console.log('\n (for)');
for (i = 0; i < arrNoName.length; i++) {
    console.log(arrNoName[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('\n (while) числа тільки з непарним індексом');
i = 0;
while (i < arrNoName.length) {
    const num = arrNoName[i];
    if(i % 2 !== 0) console.log(num);
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('\n (for) числа тільки з непарним індексом');
for (i = 0; i < arrNoName.length; i++) {
    const num = arrNoName[i];
    if(i % 2 !== 0) console.log(num);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('\n (while) числа тільки парні  значення');
i = 0;
while (i < arrNoName.length) {
    const num = arrNoName[i];
    i++;
    if(num % 2 === 0) console.log(num);
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('\n (for) числа тільки парні  значення');
for (i = 0; i < arrNoName.length; i++) {
    const num = arrNoName[i];
    if (num % 2 === 0) console.log(num);
}

// 7. замінити кожне число кратне 3 на слово "okten"
console.log('\n замінити кожне число кратне 3 на слово "okten"');
for (i = 0; i < arrNoName.length; i++) {
    if (arrNoName[i] % 3 === 0) arrNoName[i] = "okten";
    console.log(arrNoName[i])
}

// 8. вивести масив в зворотньому порядку.
console.log('\n вивести масив в зворотньому порядку');
for (i = arrNoName.length - 1; i >= 0; i--) {
    console.log(arrNoName[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// --- ? ---


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrTenNumElements = [
    50,
    33,
    120,
    1,
    154,
    87,
    3,
    90,
    23,
    10
];
console.log('\n 10 числових елементів');
for (let num of arrTenNumElements) {
    console.log(num);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrTenStrElements = [
    'dog',
    'cat',
    'tree',
    'window',
    'box',
    'pen',
    'shark',
    'ball',
    'phone',
    'circle'
];
console.log('\n 10 строкрових елементів');
for (let str of arrTenStrElements) {
    console.log(str);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrTenMixElements = [
    'water',
    41,
    'long',
    'right',
    327,
    4,
    true,
    'row',
    false,
    8
];
console.log('\n 10 елементів будь-якого типу');
for (let mix of arrTenMixElements) {
    console.log(mix);
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrTenMixElementsBool = [
    54,
    true,
    'white',
    'later',
    'const',
    3,
    33,
    'open',
    false,
    9
];
console.log('\n тільки булеві елементи');
for (let mixBoo of arrTenMixElementsBool) {
    if (typeof mixBoo === "boolean") {
        console.log(mixBoo);
    }
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrTenMixElementsNum = [
    'door',
    4,
    'cat',
    'food',
    82,
    true,
    1,
    16,
    'sun',
    'black'
];
console.log('\n вивести тільки числові елементи');
for (let mixNum of arrTenMixElementsNum) {
    if (typeof mixNum === "number") {
        console.log(mixNum);
    }
}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrTenMixElementsStr = [
    'door',
    4,
    'cat',
    'food',
    82,
    true,
    1,
    16,
    'sun',
    'black'
];
console.log('\n вивести тільки рядкові елементи');
for (let mixStr of arrTenMixElementsStr) {
    if (typeof mixStr === "string") {
        console.log(mixStr);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrTenMixElementsIndex = [];

console.log('\n Створити порожній масив. Наповнити його 10 елементами.');
arrTenMixElementsIndex[0] = 34;
arrTenMixElementsIndex[1] = 'five';
arrTenMixElementsIndex[2] = 'eight';
arrTenMixElementsIndex[3] = true;
arrTenMixElementsIndex[4] = 2;
arrTenMixElementsIndex[5] = 43;
arrTenMixElementsIndex[6] = 89;
arrTenMixElementsIndex[7] = 1;
arrTenMixElementsIndex[8] = 'red';
arrTenMixElementsIndex[9] = false;

for (let mixBoo of arrTenMixElementsBool) {
        console.log(mixBoo);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(`\n Створити цикл for на 10  ітерацій з кроком 1`);
document.write(`<h3>Створити цикл for на 10  ітерацій з кроком 1</h3>
                <div class='steps'>`);
for (let i = 1; i <= 10; i++) {
    console.log(`Step-${i}`);
    document.write(`<div class='step'>step-${i}</div>`);
}
document.write('</div> <br>');

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(`\n Створити цикл for на 100 ітерацій з кроком 1`);
document.write(`<h3>Створити цикл for на 100 ітерацій з кроком 1</h3> 
                <div class='steps'>`);
for (let i = 1; i <= 100; i++) {
    console.log(`Step-${i}`);
    document.write(`<div class='step'>step-${i}</div> `);
}
document.write('</div> <br>');

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log(`\n Створити цикл for на 100 ітерацій з кроком 2`);
document.write(`<h3>Створити цикл for на 100 ітерацій з кроком 2</h3>
                <div class='steps'>`);
let step = 1;
for (let i = 1; i <= 100; i += 2) {
    console.log(`Step-${step}`);
    document.write(`<div class='step'>step-${step} (${i})</div>`);
    step++;
}
document.write('</div> <br>');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log(`\n Створити цикл for на 100 ітерацій. Вивести тільки парні кроки`);
document.write(`<h3>Створити цикл for на 100 ітерацій. Вивести тільки парні кроки</h3>
                <div class='steps'>`);
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`Step-${i}`)
        document.write(`<div class='step'>step-${i}</div>`);
    }
}
document.write('</div> <br>');


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log(`\n Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки`);
document.write(`<h3>Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки</h3>
                <div class='steps'>`);
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(`Step-${i}`)
        document.write(`<div class='step'>step-${i}</div>`);
    }
}
document.write('</div> <br>');



// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {   name: 'Рок-н-рол',
        pages: 416,
        authors: ['Сергій Мартинюк'],
        genres: ['Сучасна проза України']
    },
    {   name: 'Harry Potter and the Philosopher’s Stone',
        pages: 456,
        authors: ['J. K. Rowling'],
        genres: [
            'fantasy',
            'adventure'
        ]
    },
    {   name: 'The Good Grammar Book',
        pages: 256,
        authors: [
            'Michael Swan',
            'Catherine Walter'
        ],
        genres: [
            'educational literature'
        ]
    },
    {   name: 'Winnie-the-Pooh',
        pages: 160,
        authors: [
            'Alan Alexander Milne',
            'Ernest Howard Shepard'
        ],
        genres: [
            'Children\'s literature',
            'adventure', 'children\'s story'
        ]
    }
]
console.log(books);

// -знайти наібльшу книжку.
let biggestBook;
let max = 0;
for (const book of books) {
        if (book['pages'] > max) {
            max = book['pages'];
            biggestBook = book;
        }
}
console.log(biggestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
let biggestGenres;
max = 0;
for (const book of books) {
    if (book['genres'].length > max) {
        max = book['genres'].length;
        biggestGenres = book;
    }
}
console.log(biggestGenres);

// - знайти книжку/ки з найдовшою назвою
let biggestName;
max = 0;
for (const book of books) {
    if (book['name'].length > max) {
        max = book['name'].length;
        biggestName = book;
    }
}
console.log(biggestName);

// - знайти книжку/ки які писали 2 автори
let twoAuthors = [];
for (const book of books) {
    if (book['authors'].length === 2) {
        twoAuthors.push(book);
    }
}
console.log(twoAuthors);

// - знайти книжку/ки які писав 1 автор
let oneAuthors = [];
for (const book of books) {
    if (book['authors'].length === 1) {
        oneAuthors.push(book);
    }
}
console.log(oneAuthors);