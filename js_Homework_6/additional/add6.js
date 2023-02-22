// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln('<h3>Напишіть функцію, яка ділить рядок на підрядки, що складаються з n символів.</h3></br>');
const cutString = (str, n) => {
    const res = [];
    for (let i = 0; i < str.length; i += n) {
        res.push(str.slice(i, (i + n)))
    }
    return res;
};
document.writeln(cutString('наслаждение',3) + '</br>'); // [нас,лаж,ден,ие]

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
document.writeln('</br> <h3>Напишіть функцію, яка повертає підрядок, що складається із зазначеної кількості символів.</h3></br>');
let str = 'Каждый охотник желает знать';
const delete_characters = (str, length) => str.substring(0, length);
document.writeln(delete_characters(str, 7) + '</br>');  // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
document.writeln('</br> <h3>Напишіть функцію, яка приймає рядок як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.</h3></br>');
let str1 = "HTML JavaScript PHP";
const insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase();
document.writeln(insert_dash(str1) + '</br>'); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
document.writeln('</br> <h3>Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.</h3></br>');
const transformUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);
document.writeln(transformUpperCase('hallo Harry Potter') + '</br>');

// - Дано список імен.
document.writeln('</br><h3>Дано список імен.</h3>');
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//  let n1 = 'Harry Potter'
//  let n2 = 'Ron Whisley'
//  let n3 = 'Hermione Granger'
document.writeln('</br> <h3>Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд</h3></br>');
const normaliseName = (str) => {
    str = str.trim().replace(/[.\-_\W]+/g, " ")
    return str;
};
document.writeln(normaliseName(n1) + '</br>');
document.writeln(normaliseName(n2) + '</br>');
document.writeln(normaliseName(n3) + '</br>');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
console.log('\n створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.');
const generationRandomNums = (countNumbers) => {
    const arrRandomNums = [];
    for (let i = 0; i < countNumbers; i++) {
        arrRandomNums.push(Math.floor(Math.random() * 100));
    }
    return arrRandomNums;
};
const ranNums = generationRandomNums(15);
console.log(ranNums);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log('\n згенерувати, за допомоги попередньої функції масив рандомних цілих числових значень. Відсортувати його за допомоги sort');
const sortingNumbers = (arrayOfNumbers) => {
    return arrayOfNumbers.sort((a, b) => a - b)
};
console.log(sortingNumbers(ranNums));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log('\n згенерувати, за допомоги попередньої функції масив рандомних цілих числових значень. відфільтрувати  його, залишивши тільки парні числа (без 0!)');
const searchPairedNumbers = (arrayOfNumbers) => {
    return arrayOfNumbers.filter(elem => elem % 2 === 0 && elem !== 0)
};
console.log(searchPairedNumbers(ranNums));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
console.log('\n Напишіть функцію, яка повертає рядок, у якому кожне слово починається з великої літери.');
const capitalize = (str) => {
    const words = str.split(' ');
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
console.log(capitalize(str));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
console.log('\n Створити функцію-валідатор для адрес електронної пошти.');
const validatorForMail = (mail) => {
    const dot = mail.lastIndexOf('.');
    const snail = mail.indexOf('@');

    if(mail.includes('@') && mail.includes('.')) {
        snail > 2 && dot > (snail + 2) && dot < (mail.length - 2) && isNaN(Number(mail.substring(dot + 1))) ? console.log('good'): console.log('Крапка та равлик є, але щось не на своєму місті...')
    }else if(mail.includes('.')){
        console.log('Нема равлика.')
    }else if(mail.includes('@')){
        console.log('Нема крапки.')
    }else {
        console.log('Це взагалі не схоже на електронну пошту!')
    }
};
// Протестувати на значеннях
// someemail@gmail.com
validatorForMail('someemail@gmail.com');
// someeMAIL@gmail.com
validatorForMail('someeMAIL@gmail.com');
// someeMAIL@i.ua
validatorForMail('someeMAIL@i.ua');
// some.email@gmail.com
validatorForMail('some.email@gmail.com');
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - є масив
console.log('\n є масив');
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log('  відсортувати його в спадаючому порядку за кількістю елементів в полі modules');
const sortArray = (arr) => arr.sort((a, b) => b.modules.length - a.modules.length);
console.log(sortArray(coursesArray));

// - Напишіть функцію count(str, stringSearch), яка повертає кількість символів stringSearch у рядку str.
console.log('\n Напишіть функцію, яка повертає кількість символів stringSearch у рядку str.');
let symb = "о", str3 = "Астрономия это наука о небесных объектах";
const count = (str, stringSearch) => str.indexOf(stringSearch) + 1;
console.log(count(str3, symb)); // 5

// - Напишіть функцію cutStringSecond(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
console.log('\n Напишіть функцію, яка видаляє зайві слова з рядка str, залишивши у ній n слів.');
const str4 = "Сила тяжести приложена к центру масс тела";
const cutStringSecond = (str, n) => str.split(' ').slice(0, n).join(' ');
console.log(cutStringSecond(str4, 5)); // 'Сила тяжести приложена к центру'


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
console.log('\n стоврити масив книжок (назва, кількість сторінок, автори , жанри).');
const books = [
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
];
console.log(books);

// -знайти наібльшу книжку.
console.log('\n знайти наібльшу книжку.');
const biggestBook = (arrBooks) => {
    let maxPagesBook = arrBooks[0];
    arrBooks.forEach(book => {
        if (book.pages > maxPagesBook.pages) maxPagesBook = book
    });
    return maxPagesBook;
}
console.log(biggestBook(books));

// - знайти книжку/ки з найбільшою кількістю жанрів
console.log('\n знайти книжку/ки з найбільшою кількістю жанрів');
const biggestGenres = (arrBooks) => {
    let maxGenres = arrBooks[0];
    arrBooks.forEach(book => {
        if (book.genres.length > maxGenres.genres.length) maxGenres = book
    });
    return maxGenres;
}
console.log(biggestGenres(books));


// - знайти книжку/ки з найдовшою назвою
console.log('\n знайти книжку/ки з найдовшою назвою');
const theLongestName = (arrBooks) => {
    let maxName = arrBooks[0];
    arrBooks.forEach(book => {
        if (book.name.length > maxName.name.length) maxName = book
    });
    return maxName;
}
console.log(theLongestName(books));


// - знайти книжку/ки які писали 2 автори
console.log('\n знайти книжку/ки які писали 2 автори');
const twixAuthors = (arrBooks) => arrBooks.filter(book => book.authors.length === 2);
console.log(twixAuthors(books));

// - знайти книжку/ки які писав 1 автор
console.log('\n знайти книжку/ки які писав 1 автор');
const onceAuthors = (arrBooks) => arrBooks.filter(book => book.authors.length === 1);
console.log(onceAuthors(books));


// - вісортувати книжки по кількості сторінок по зростанню
console.log('\n вісортувати книжки по кількості сторінок по зростанню');
const increasingPages = (arrBooks) => arrBooks.sort((a, b) => a.pages - b.pages);
console.log(increasingPages(books));