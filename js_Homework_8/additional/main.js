// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const arrayClasses = [];
function classNamesSearch (element) {
    const children = element.children
    for (const child of children)
        !child.className? classNamesSearch(child): arrayClasses.push(child.className);
}
classNamesSearch(document.body);
console.log(arrayClasses);