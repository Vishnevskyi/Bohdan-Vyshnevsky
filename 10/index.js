// var str = 'bcdefg';
// var str2 = 'ABCDEF';
// var re = /^(?!.*[Aa]).{6,}$/;
// console.log(str.search(re)); // 0 (позиція першого знайденого збігу)
// console.log(str2.search(re)); // -1 (не знайдено збігу)


var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для перевірки email
var emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:gmail\.com|yahoo\.com)$/;

// Фільтруємо масив за умовою
var trustedEmails = arr.filter(obj => emailRegex.test(obj.email));

console.log(trustedEmails);
