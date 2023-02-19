// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('\n створити функцію яка приймає три числа та виводить найменьше. \n');
const array = [
    7,
    3,
    18,
    9,
    15,
    33,
    2,
    12,
    0,
    38,
    35
];
const minNumber = (num1, num2, num3) => {
    if (num1 > num2) num1 = num2;
    if (num1 > num3) num1 = num3;
    return num1;
};
console.log(minNumber(5,3,8));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log('\n створити функцію яка приймає три числа та виводить найбільше. \n');
const maxNumber = (num1, num2, num3) => {
    if (num1 < num2) num1 = num2;
    if (num1 < num3) num1 = num3;
    return num1;
};
console.log(maxNumber(5,3,8));

// - створити функцію яка повертає найбільше число з масиву
console.log('\n створити функцію яка повертає найбільше число з масиву \n');
const maxNumArray = (arr) => {
    let max = arr[0];
    for (const item of arr) {
        if (max < item) max = item;
    }
    return max;
};
console.log(maxNumArray(array));

// - створити функцію яка повертає найменьше число з масиву
console.log('\n створити функцію яка повертає найменьше число з масиву \n');
const minNumArray = (arr) => {
    let min = arr[0];
    for (const item of arr) {
        if (min > item) min = item;
    }
    return min;
};
console.log(minNumArray(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log('\n створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. \n');
const sumArray = (arr) => {
    let sum = 0;
    for (const item of arr) sum += item;
    return sum;
};
console.log(sumArray([1,2,10]));


// - Дано натуральное число n. Выведите все числа от 1 до n.
console.log('\n Дане натуральне число n. Виведіть всі числа від 1 до n. ');
const var1 = (n) => {
    let str = ''
    for (let i = 1; i <= n; i++) {
        str += i + ' ';
    }
    return str
};
console.log('\n Перший варіант, за допомоги циклу:\n ' + '\n' + var1(13));



const var2 = (n) => {
    if (n <= 1) return 1;
    return var2(n - 1) + ' ' + n;
};
console.log('\n Другий варіант, за дапомоги рекурсії:\n ' + '\n' + var2(13));



// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
console.log('\n Дані два цілих числа A і В . Виведіть усі числа від A до B включно, в порядку зростання, якщо A < B, або в порядку зменшення в іншому випадку. \n');
const allNumbers = (a, b) => {
    if (a < b) {
        for (a; a <= b; a++) console.log(a);
    }else{
        for (a; a >= b; a--) console.log(a);
    }
};
allNumbers(3,14);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
console.log('\n функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1" \n');
const foo = (arr, i) => {
    const elem = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = elem;
    return arr;
};
console.log(foo([9,8,0,4], 0));
console.log(foo([9,8,0,4], 1));
console.log(foo([9,8,0,4], 2));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
console.log('\n Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень. \n');
const zeroEnd = (arr) => {
    const sortArray = [];
    for (const item of arr) {
        if (item !== 0) {
            sortArray[sortArray.length] = item;
        }
    }
    for (const item of arr) {
        if (item === 0) {
            sortArray[sortArray.length] = item;
        }
    }
    return sortArray;
};

console.log(zeroEnd([1,0,6,0,3]));
console.log(zeroEnd([0,1,2,3,4]));
console.log(zeroEnd([0,0,1,0]));
