let youFirstName = prompt(`what's your first name?`);
let youLastName = prompt(`what's your last name?`);
let youAge = Number(prompt(`How old are you?`));

if (youFirstName && youLastName && youAge) {
    console.log(`name: ${youFirstName}, last name: ${youLastName}, your age: ${youAge}`);
} else {
    console.log('Вибачте, але Ви не все заповнили!');
}