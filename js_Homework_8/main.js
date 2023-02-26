
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(`\nСтворюємо об'єкти User\n`);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
console.log(`\nСтворити функцію конструктор для об'єктів User з полями id, name, surname , email, phone\n`);

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surename = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log(`\nстворити пустий масив, наповнити його 10 об'єктами new User(....)`);

const users = [
    new User(14, 'mark', 'mak', 'marsod@jhgf.nu', '9993334455'),
    new User(8, 'gosha', 'dub', 'gosdu@jhgf.nu', '9994445566'),
    new User(3, 'ella', 'eli', 'ello@jhgf.nu', '9995552222'),
    new User(16, 'roman', 'romchello', 'romer@jhgf.nu', '9994442288'),
    new User(5, 'marta', 'martila', 'marmus@jhgf.nu', '9994445544'),
    new User(11, 'vova', 'vol', 'vovchik@jhgf.nu', '9994447711'),
    new User(18, 'pasha', 'pashan', 'push@jhgf.nu', '9995556677'),
    new User(2, 'vanya', 'vano', 'vanvan@jhgf.nu', '9994441122'),
    new User(1, 'alina', 'lina', 'alinok@jhgf.nu', '9994449988'),
    new User(10, 'vasya', 'vaslo', 'vaser@jhgf.nu', '9995551111')
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(`\nВзяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id`);

const evenId = users.filter(item => item.id % 2 === 0);
console.log(evenId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(`\nВзяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню`);

const sortId = users.sort((a, b) => a.id - b.id);
console.log(sortId);

console.log('--------------------------------------------------------');

console.log(`\nСтворюємо об'єкти Client\n`);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
console.log(`\nстворити пустий масив, наповнити його 10 об'єктами Client`);

const clients = [
    new Client(14, 'mark', 'mak', 'marsod@jhgf.nu', '9993334455', ['bread', 'milk', 'meat', 'water', 'wine']),
    new Client(8, 'gosha', 'dub', 'gosdu@jhgf.nu', '9994445566', ['potatoes', 'bread', 'butter', 'apples']),
    new Client(3, 'ella', 'eli', 'ello@jhgf.nu', '9995552222', ['bananas', 'pineapples', 'tomatoes']),
    new Client(16, 'roman', 'romchello', 'romer@jhgf.nu', '9994442288', ['milk', 'potatoes', 'bread', 'meat', 'tomatoes', 'butter']),
    new Client(5, 'marta', 'martila', 'marmus@jhgf.nu', '9994445544', ['wine', 'bread', 'butter']),
    new Client(11, 'vova', 'vol', 'vovchik@jhgf.nu', '9994447711', ['water','milk', 'wine']),
    new Client(18, 'pasha', 'pashan', 'push@jhgf.nu', '9995556677', ['pineapples', 'bananas']),
    new Client(2, 'vanya', 'vano', 'vanvan@jhgf.nu', '9994441122', ['bread']),
    new Client(1, 'alina', 'lina', 'alinok@jhgf.nu', '9994449988', ['potatoes', 'tomatoes']),
    new Client(10, 'vasya', 'vaslo', 'vaser@jhgf.nu', '9995551111', ['potatoes', 'meat', 'tomatoes', 'wine'])
];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(`\nВзяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.`);

const sortOrders = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortOrders);

console.log('--------------------------------------------------------');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(`\nСтворюємо об'єкт car\n`);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (let key in this) {
            console.log(key + ' - ' + this[key]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`Тепер максимальна швидкість складає ${this.maxSpeed} на годину`);
    };
    this.changeYear = function (newValue) {
        this.graduationYear = newValue;
        console.log(`Тепер рік випуску ${this.graduationYear}`);
    };
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`У цього автомобіля з'явився водій на ім'я ${this.driver.name}`);
    };
}
const car = new Car('A6', 'audi', '2010', 240, '2.4');
console.log(car);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
console.log(`\nДодаєм функцію яка виводить в консоль \`їдемо зі швидкістю "n"km на годину:\n`);

// Car.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`);
// }
car.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log(`\nДодаєм функцію яка виводить усю інформацію об'єкта\n`);

// Car.prototype.info = function () {
// for (let key in this) {
//     console.log(key + ' - ' + this[key]);
// }
// }
car.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
console.log(`\nДодаємо функцію за допомоги якої підвищуєм максимальну швидкість на 'n' значення:\n`);

// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     car.maxSpeed = newSpeed;
//     console.log(`Тепер максимальна швидкість складає ${this.maxSpeed} на годину`);
// }
car.increaseMaxSpeed('280');

// -- changeYear (newValue) - змінює рік випуску на значення newValue
console.log(`\nДодаємо функцію, за допомоги якої змінюємо рік:\n`);

// Car.prototype.changeYear = function (newValue) {
//     car.graduationYear = newValue;
//     console.log(`Тепер рік випуску ${this.graduationYear}`);
// }
car.changeYear('2015');

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(`\nДодаємо об'єкт "водій":\n`);

const newDriver = new User(33, 'tolik', 'tolik-alkogolik', 'tolkogol@nine.nu', 9991234567); // Водій

// Car.prototype.addDriver = function (driver) {
//     Car.prototype.driver = driver;
//     console.log(`У цього автомобіля з'явився водій на ім'я ${this.driver.name}`);
// }

car.addDriver(newDriver);
console.log(car.driver);

console.log(car);

console.log('--------------------------------------------------------');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('\n Тепер все робимо за допомоги "class", \n створили автомобіль \n');
// - (Те саме, тільки через клас)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class NewCar {
    constructor(model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.graduationYear = graduationYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    };
    // drive () {
    //     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    // };
    // info () {
    //     console.log(` модель - ${this.model},
    //     \n виробник - ${this.manufacturer},
    //     \n рік випуску - ${this.graduationYear},
    //     \n максимальна швидкість - ${this.maxSpeed},
    //     \n об'єм двигуна - ${this.engineCapacity}`);
    // };
    // increaseMaxSpeed (newSpeed) {
    //     this.maxSpeed = newSpeed;
    //     console.log(`Тепер максимальна швидкість складає ${this.maxSpeed} на годину`);
    // };
    // changeYear (newValue) {
    //     this.graduationYear = newValue;
    //     console.log(`Тепер рік випуску ${this.graduationYear}`);
    // };
    // addDriver (driver) {
    //     this.driver = driver;
    //     console.log(`У цього автомобіля з'явився водій на ім'я ${this.driver.name}`);
    // };
}
const car1 = new NewCar('cr-v', 'honda', '2005', 200, '2.0');
console.log(car1);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
console.log(`\nДодаєм функцію яка виводить в консоль \`їдемо зі швидкістю "n"km на годину:\n`);
class DriveCar extends NewCar {
    constructor(model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
        super(model, manufacturer, graduationYear, maxSpeed, engineCapacity);
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`);
    };
}

const car2 = new DriveCar('cr-v', 'honda', '2005', 200, '2.0');
car2.drive();

// car1.drive();


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log(`\nДодаєм функцію яка виводить усю інформацію об'єкта:\n`);
class InfoCar extends DriveCar {
    constructor(model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
        super(model, manufacturer, graduationYear, maxSpeed, engineCapacity);

    }
    info () {
            for (let key in this) {
                console.log(key + ' - ' + this[key]);
            }
    };
}

const car3 = new InfoCar('cr-v', 'honda', '2005', 200, '2.0');
car3.info();

// car1.info();


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
console.log(`\nДодаємо функцію за допомоги якої підвищуєм максимальну швидкість на 'n' значення:\n`);
class MaxSpeedCar extends InfoCar {
    constructor(model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
        super(model, manufacturer, graduationYear, maxSpeed, engineCapacity);

    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Тепер максимальна швидкість складає ${this.maxSpeed} на годину`);
    };
}

const car4 = new MaxSpeedCar('cr-v', 'honda', '2005', 200, '2.0');
car4.increaseMaxSpeed(20);

// car1.increaseMaxSpeed('220');


// -- changeYear (newValue) - змінює рік випуску на значення newValue
console.log(`\nДодаємо функцію, за допомоги якої змінюємо рік:\n`);
class ChangeYearCar extends MaxSpeedCar {
    constructor(model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
        super(model, manufacturer, graduationYear, maxSpeed, engineCapacity);

    }
    changeYear (newValue) {
        this.graduationYear = newValue;
        console.log(`Тепер рік випуску ${this.graduationYear}`);
    };
}

const car5 = new ChangeYearCar('cr-v', 'honda', '2005', 200, '2.0');
car5.changeYear('2009');

// car1.changeYear('2009');


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(`\nДодаємо об'єкт "водій"\n`);
class NewDriverCar extends MaxSpeedCar {
    constructor(model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
        super(model, manufacturer, graduationYear, maxSpeed, engineCapacity);

    }
    addDriver (driver) {
        this.driver = driver;
        console.log(`У цього автомобіля з'явився водій на ім'я ${this.driver.name}`);
    };
}
const car6 = new NewDriverCar('cr-v', 'honda', '2005', 200, '2.0');

car6.addDriver(newDriver);
console.log(newDriver);

console.log(`\nКінцевий об'єкт:\n`);
console.log(car6);

// car1.addDriver(newDriver);


console.log('--------------------------------------------------------');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('\n Створюємо попелюшку та принца...\n');
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
console.log(`\nстворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок:`);

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
    speak() {
        console.log(`I'm ${this.name} and I am ${this.age} years old`);
    }
}
const cinderellas = [
    new Cinderella('anita', 19, 35),
    new Cinderella('evelina', 15, 32),
    new Cinderella('olena', 22, 36),
    new Cinderella('eleonora', 24, 37),
    new Cinderella('iryna', 16, 31),
    new Cinderella('nadia', 16, 33),
    new Cinderella('marta', 28, 39),
    new Cinderella('alina', 17, 34),
    new Cinderella('mila', 26, 38),
    new Cinderella('olga', 29, 40),
];
console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
console.log(`\nСторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов:`);

class Prince {
    constructor(name, age, shoeFound) {
        this.name = name;
        this.age = age;
        this.shoeFound = shoeFound;
    };
    speak () {
        console.log(`Hi! I'm prince and my name is ${this.name}. I found this shoe in size ${this.shoeFound}`);
    };
    shoeFitting (girls) {
        for (const girl of girls) {
            if (girl.footSize === this.shoeFound) return girl.name;
        }
    };
    searchCinderella (name, girls) {
        return girls.find(girl => name === girl.name);
    };
}
const princeAlbert = new Prince('Albert', 25, 39);

console.log(princeAlbert);
princeAlbert.speak();

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log(`\nЗа допомоги циклу знайти яка попелюшка повинна бути з принцом:`);

const nameCinderella = princeAlbert.shoeFitting(cinderellas);
console.log(`Ось, дізнались ім'я тієї "потіряшкі" ${nameCinderella.toUpperCase()} її звуть!`);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(`\nДодатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку:`);

const girl = princeAlbert.searchCinderella(nameCinderella, cinderellas);
console.log(`Знайшли її, це ${girl.name.toUpperCase()}, їй ${girl.age} років, а її розмір ноги ${girl.footSize}`);