// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.forms[0];
const sec1 = document.getElementById('sec1');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const div = document.querySelector('.user');
    const divForUser = document.createElement('div');

    divForUser.classList.add('user');

    if (form.name.value && form.surname.value && form.age.value) {
        divForUser.innerHTML = `Name: ${form.name.value} </br> Surname: ${form.surname.value} </br> Age: ${form.age.value}`;
        sec1.appendChild(divForUser);
    }else{
        console.log('Форма не заповнена!');
        return;
    }

    if (div) div.remove();
    for (let i = 0; i < form.length; i++) {
        form[i].value = '';
    }
})




// ==========================
// є сторінка, на якій є блок, у якому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const divNumber = document.getElementById('num');
const btnReset = document.getElementById('reset');

let num = 1 + JSON.parse(localStorage.getItem('saveNum')) || 0;
btnReset.addEventListener('click', function (e) {
    console.log(e);
    localStorage.removeItem('saveNum');
    divNumber.innerText = '0';
})
divNumber.innerText = num;
localStorage.setItem('saveNum', JSON.stringify(num));




// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
window.addEventListener('load', function (e) {
    console.log(e);
    const allTimeVisited = JSON.parse(localStorage.getItem('timeVisit')) || [];
    if (allTimeVisited.length >= 10) allTimeVisited.shift();
    allTimeVisited.push(new Date().toLocaleString());

    localStorage.setItem('timeVisit', JSON.stringify(allTimeVisited));
})

 console.log(JSON.parse(localStorage.getItem('timeVisit')));



// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
const sec3 = document.getElementById('sec3');
const divBox = document.getElementById('box');
const btnPrev = document.createElement('button');
const btnNext = document.createElement('button');

btnPrev.classList.add('prev', 'btn');
btnNext.classList.add('next', 'btn');

let users = [];
for (let i = 1; i <= 100; i++) {
    let user = {
        name: `User ${i}`,
        age: Math.floor(Math.random() * 50) + 10,
        status: Math.random() < 0.5 ? 'true' : 'false',
        email: `user${i}@dupe.com`
    };
    users.push(user);
}


// При завантаженні сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let numList = 0;
const stepCount = 10;

function wrapper (count) {

    for (let i = count; i < count + stepCount; i++) {
        const divContainer = document.createElement('div');
        const divName = document.createElement('div');
        const divAge = document.createElement('div');
        const divStatus = document.createElement('div');
        const divEmail = document.createElement('div');

        divContainer.classList.add('container');
        divName.classList.add('user-name');
        divAge.classList.add('user-age');
        divStatus.classList.add('user-status');
        divEmail.classList.add('user-email');

        divName.innerText = `Name: ${users[i].name}`;
        divAge.innerText = `Age: ${users[i].age}`;
        divStatus.innerText = `Status: ${users[i].status}`;
        divEmail.innerText = `Email: ${users[i].email}`;

        divContainer.append(divName, divAge, divStatus, divEmail);
        divBox.appendChild(divContainer);
    }
}
wrapper(numList);
btnNext.addEventListener('click', function () {
    if ((users.length - stepCount) > numList) {
        for (let i = divBox.children.length - 1; i >= 0; i--) {
            const child = divBox.children[i];
            if (child.tagName === "DIV") child.remove();
        }
        wrapper(numList += stepCount);
    }
});

btnPrev.addEventListener('click', function () {
    if (numList > 0) {
        for (let i = divBox.children.length - 1; i >= 0; i--) {
            const child = divBox.children[i];
            if (child.tagName === 'DIV') child.remove();
        }
        wrapper(numList -= stepCount);
    }
});

btnPrev.innerHTML = 'prev';
btnNext.innerHTML = 'next';
sec3.append(btnPrev, btnNext);


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
const sec4 = document.getElementById('sec4');
const lastForm = document.forms.last;
const inputs = {
    rows: document.createElement('input'),
    cells: document.createElement('input'),
    content: document.createElement('input'),
    submit: document.createElement('button')
};

function createForm (form, contForm) {
    for (const key in contForm) {
        const elem = contForm[key];
        if (elem.tagName !== 'BUTTON') {
            elem.setAttribute('placeholder', key);
            key !== 'content' ? elem.setAttribute('type', 'number') : elem.setAttribute('type', 'text');
        }else {
            elem.innerText = key
        }
        elem.name = key;
        form.append(elem);
    }
}
createForm(lastForm, inputs);

lastForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const table = document.getElementsByTagName("table")[0];
    if (table) table.remove();

    const tableCreate = document.createElement('table');
    const arrInputs = lastForm.getElementsByTagName('input');

    tableCreate.classList.add('tab');

    for (let i = 0; i < arrInputs.rows.value; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < arrInputs.cells.value; j++) {
            const cell = document.createElement('td');
            cell.innerText = arrInputs.content.value;

            row.appendChild(cell);
        }
        tableCreate.appendChild(row);
    }
    sec4.appendChild(tableCreate);

    for (let i = 0; i < lastForm.length; i++) {
        lastForm[i].value = '';
    }
})






