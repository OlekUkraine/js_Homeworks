const sec5 = document.getElementById('sec5');
const timeVisit = JSON.parse(localStorage.getItem('timeVisit'));

timeVisit.forEach(elem => {
    const div = document.createElement('div');
    const lastSession = elem.split(',');

    div.classList.add('container');

    div.innerText = `Останнє відвідування сторінки \n День: ${lastSession[0]} \n Час ${lastSession[1]}`;
    sec5.appendChild(div);
})



