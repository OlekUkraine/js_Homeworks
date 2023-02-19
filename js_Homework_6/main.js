// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('\n Знайти та вивести довижину стрінгових значень \n');
const arrStrLow = [
    'hello world',
    'lorem ipsum',
    'javascript is cool'
];
// const arrStrUpp = [
//     'HELLO WORLD',
//     'LOREM IPSUM',
//     'JAVASCRIPT IS COOL'
// ];
arrStrLow.forEach(value => console.log(value.length));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('\n Перевести до великого регістру \n');
const arrStrUpp = [];
arrStrLow.forEach(value => arrStrUpp.push(value.toUpperCase()));
console.log(arrStrUpp);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('\n Перевести до нижнього регістру \n');
arrStrUpp.forEach(value => arrStrLow.push(value.toLowerCase()));
console.log(arrStrLow);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('\n Є "брудна" стрінга let str = \' dirty string   \' . Почистити її від зайвих пробілів. \n');
let str = ' dirty string   ';
console.log(str.trim());


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log('\n Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів. \n');
let str1 = 'Ревуть воли як ясла повні';
const stringToArray = (str) => str.split(' ');
console.log(stringToArray(str1));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('\n є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об\'єкти в масиві на стрінгові. \n');
arrNumbers = [10,8,-7,55,987,-1011,0,1050,0];
arrNumbersStr = arrNumbers.map(value => value + '');
console.log(arrNumbersStr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log('\n створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction. \n');
let nums = [11,21,3];
function sortNums(nums, direction) {
     nums.sort((a, b) => {
        if(direction === 'ascending') {
            return a - b;
        }
        if(direction === 'descending') {
            return b - a;
        }
    })
}

sortNums(nums,'ascending');
console.log(nums);

sortNums(nums,'descending');
console.log(nums);



// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
console.log('\n є масив');
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
console.log('відсортувати його за спаданням за monthDuration \n');
const afterSort = coursesAndDurationArray.sort((elem1, elem2) => elem2.monthDuration - elem1.monthDuration);
console.log(afterSort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('\n відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців \n');
const afterFilter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(afterFilter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log('\n за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration} \n');
const afterMap = coursesAndDurationArray.map((value, index) => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    };
});
console.log(afterMap);




// =========================
//     описати колоду карт (від 6 до туза без джокерів)
console.log('\n описати колоду карт (від 6 до туза без джокерів) \n');
const playingCards = [
    {cardSuit: 'heart',value: '6',color:'red'},
    {cardSuit: 'heart',value: '7',color:'red'},
    {cardSuit: 'heart',value: '8',color:'red'},
    {cardSuit: 'heart',value: '9',color:'red'},
    {cardSuit: 'heart',value: '10',color:'red'},
    {cardSuit: 'heart',value: 'jack',color:'red'},
    {cardSuit: 'heart',value: 'queen',color:'red'},
    {cardSuit: 'heart',value: 'king',color:'red'},
    {cardSuit: 'heart',value: 'ace',color:'red'},
    {cardSuit: 'diamond',value: '6',color:'red'},
    {cardSuit: 'diamond',value: '7',color:'red'},
    {cardSuit: 'diamond',value: '8',color:'red'},
    {cardSuit: 'diamond',value: '9',color:'red'},
    {cardSuit: 'diamond',value: '10',color:'red'},
    {cardSuit: 'diamond',value: 'jack',color:'red'},
    {cardSuit: 'diamond',value: 'queen',color:'red'},
    {cardSuit: 'diamond',value: 'king',color:'red'},
    {cardSuit: 'diamond',value: 'ace',color:'red'},
    {cardSuit: 'spade',value: '6',color:'black'},
    {cardSuit: 'spade',value: '7',color:'black'},
    {cardSuit: 'spade',value: '8',color:'black'},
    {cardSuit: 'spade',value: '9',color:'black'},
    {cardSuit: 'spade',value: '10',color:'black'},
    {cardSuit: 'spade',value: 'jack',color:'black'},
    {cardSuit: 'spade',value: 'queen',color:'black'},
    {cardSuit: 'spade',value: 'king',color:'black'},
    {cardSuit: 'spade',value: 'ace',color:'black'},
    {cardSuit: 'clubs',value: '6',color:'black'},
    {cardSuit: 'clubs',value: '7',color:'black'},
    {cardSuit: 'clubs',value: '8',color:'black'},
    {cardSuit: 'clubs',value: '9',color:'black'},
    {cardSuit: 'clubs',value: '10',color:'black'},
    {cardSuit: 'clubs',value: 'jack',color:'black'},
    {cardSuit: 'clubs',value: 'queen',color:'black'},
    {cardSuit: 'clubs',value: 'king',color:'black'},
    {cardSuit: 'clubs',value: 'ace',color:'black'},
];
console.log(playingCards);

// - знайти піковий туз
console.log('\n знайти піковий туз \n');
const spadeAce = playingCards.find(element => element.cardSuit === 'spade' && element.value === 'ace');
console.log(spadeAce);

// - всі шістки
console.log('\n всі шістки \n');
const allSix = playingCards.filter(element => element.value === '6');
console.log(allSix);


// - всі червоні карти
console.log('\n всі червоні карти \n');
const allRedCards = playingCards.filter(element => element.color === 'red');
console.log(allRedCards);

// - всі буби
console.log('\n всі буби \n');
const allDiamondCards = playingCards.filter(element => element.cardSuit === 'diamond');
console.log(allDiamondCards);


// - всі трефи від 9 та більше
console.log('\n всі трефи від 9 та більше \n');
const allClubsCards = [];
// playingCards.forEach(element => {
//      if (element.cardSuit === 'clubs' &&
//          element.value !== '6' &&
//          element.value !== '7' &&
//          element.value !== '8') {
//          allClubsCards.push(element);
//     }
// });
// console.log(allClubsCards);
function clubsCard (obj) {
    const allClubs = obj.filter(elem => elem.cardSuit === 'clubs');
    const index = allClubs.findIndex(obj => obj.value === '9');
    for (let i = index; i < allClubs.length; i++) allClubsCards.push(allClubs[i]);
    return allClubsCards;
}
console.log(clubsCard(playingCards));

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log('\n Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об\'єкт \n');
const sortCard = playingCards.reduce((accumulator, value) => {
    if (value.cardSuit === 'spade') {
        accumulator.spades.push(value);
    }else if (value.cardSuit === 'diamond') {
        accumulator.diamonds.push(value);
    }else if (value.cardSuit === 'heart') {
        accumulator.hearts.push(value);
    }else if (value.cardSuit === 'clubs') {
        accumulator.clubs.push(value);
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})
console.log(sortCard);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
console.log('\n написати пошук всіх об\'єктів, в який в modules є sass \n');
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
const objWithSass = coursesArray.filter(value => value.modules.includes('sass'));
console.log(objWithSass);

// --написати пошук всіх об'єктів, в який в modules є docker
console.log('\n написати пошук всіх об\'єктів, в який в modules є docker \n');
const objWithDocker = coursesArray.filter(value => value.modules.includes('docker'));
console.log(objWithDocker);