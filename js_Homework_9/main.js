// - створити блок,
const div1 = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
div1.classList.add('wrap', 'collapse', 'alpha', 'beta');
div1.innerText = 'Перший блок';

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div1.style.backgroundColor = 'blue';
div1.style.color = 'yellow';
div1.style.fontSize = '40px';

// - додати цей блок в body.
document.body.appendChild(div1);

// - клонувати його повністю, та додати клон в body.
const cloneDiv1 = div1.cloneNode(true);
cloneDiv1.style.backgroundColor = 'yellow';
cloneDiv1.style.color = 'blue';
document.body.appendChild(cloneDiv1);


//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const arr = ['Main','Products','About us','Contacts'];
const ulForArr = document.createElement('ul');
for (const element of arr) {
    const li = document.createElement('li');
    li.innerText = element;
    ulForArr.appendChild(li);
}
document.body.appendChild(ulForArr);


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    const div2 = document.createElement('div');
    div2.innerText = `title: ${element.title} and monthDuration: ${element.monthDuration}`
    document.body.appendChild(div2);
}



// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const element of coursesAndDurationArray) {
    const div2 = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.innerText = element.title;
    p.innerText = element.monthDuration;

    div2.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');

    div2.append(h1, p);
    document.body.appendChild(div2);
}


// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створивши для кожного об'єкту  масиву <div class='member'> та наповнити його даними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpson of simpsons) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const img = document.createElement('img');

    img.setAttribute('alt', simpson.name);
    img.setAttribute('src', simpson.photo);
    h3.innerText = `Name: ${simpson.name},\n Surname: ${simpson.surname}`;
    h4.innerText = `Age - ${simpson.age}`;
    p.innerText = simpson.info;

    div.classList.add('member');

    div.append(img, h3, h4, p);
    document.body.appendChild(div);
}



// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [
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

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png який лежить в папці з поточним файлом
const sec1 = document.createElement('section');
sec1.classList.add('container');


function createBlockForElements (arrayElements) {
        for (const element of arrayElements) {
            const div = document.createElement('div');
            div.classList.toggle('card');

            for (const key in element) {
                const divIn = document.createElement('div');
                divIn.classList.toggle('inner');

                if (!Array.isArray((element[key]))) {
                    divIn.innerText = element[key];

                } else if (Array.isArray(element[key])){
                    const ul = document.createElement('ul');

                    for (const item of element[key]) {
                        const li = document.createElement('li');
                        li.innerText = item;
                        ul.appendChild(li);
                    }
                    divIn.appendChild(ul);
                }
                div.appendChild(divIn);
            }
            sec1.appendChild(div);
        }
    document.body.appendChild(sec1);
}
createBlockForElements(coursesArray);



// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const sec2 = document.createElement('section');
const paragraph = document.createElement('p');
const btnText = document.createElement('button');

sec2.classList.add('container', 'column');
paragraph.classList.add('pushMy')

paragraph.innerText = 'Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".';
btnText.innerText = 'Давай, натисни мене!';

sec2.append(paragraph, btnText);
document.body.appendChild(sec2);
btnText.addEventListener('click', function () {
    paragraph.classList.toggle('disappearance');
})


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const sec3 = document.createElement('section');
const form = document.createElement('form');
const label = document.createElement('label');
const input = document.createElement('input');
const button = document.createElement('button');
const outText = document.createElement('div');

sec3.classList.add('container', 'column');
outText.classList.add('outputText');

label.setAttribute('for', 'age');
input.setAttribute('id', 'age');
input.setAttribute('type', 'number');

label.innerText = 'How old are you?';
button.innerText = 'НАТИСНИ'

form.append(label, input, button);
sec3.append(form, outText);
document.body.appendChild(sec3);

button.addEventListener('click', function (ev) {
    ev.preventDefault();
    const age = form.age.value;
    if (age <= 0) {
            outText.innerText = `Помилка!`
        } else {
            age < 18? outText.innerText = `Ти ще маленький!`: outText.innerText = `Ти досить дорослий!`;
        }
})


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
const sec4 = document.createElement('section');
const form1 = document.createElement('form');
const btn = document.createElement('button');

sec4.classList.add('container', 'column');

btn.innerText = 'Створити таблицю';

const createInputs = (labelContent, allAttribute) => {
    const lab = document.createElement('label');
    const inp = document.createElement('input');

    lab.innerText = labelContent;
    lab.setAttribute('for', allAttribute);
    inp.setAttribute('id', allAttribute);
    form1.append(lab, inp);
}

createInputs('кількість рядків', 'count-row');
createInputs('кількість ячеєк', 'count-col');
createInputs('вміст ячеєк', 'what');

form1.appendChild(btn);
sec4.appendChild(form1);
document.body.appendChild(sec4);

//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
const sec5 = document.createElement('section');
sec5.classList.add('container', 'column');
btn.addEventListener('click', function (ev) {
    ev.preventDefault();

    const table = document.getElementsByTagName("table")[0];
    if (table) table.remove();


    if (form1[0].value && form1[1].value) {
        const table = document.createElement('table');

        for (let i = 0; i < form1[0].value; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < form1[1].value; j++) {
                const box = document.createElement('td');
                box.innerText = form1[2].value;

                row.appendChild(box);
            }

            table.appendChild(row);
        }
        sec5.appendChild(table);
    }else{
        console.log('Помилка')
    }
    document.body.appendChild(sec5);
})
