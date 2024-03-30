const prompt = require('prompt');

prompt.start();

function getAge() {
    prompt.get(['Введіть кількість років'], function(err, value) {
        year = value['Введіть кількість років'] / 1 // якщо значення має нечисловий тип, то ділення не відбудеться та отримаю NaN;
        if (year !== year) //NaN не дорівнює жодному іншому значенню
        {
            console.log("Введіть число");
            getAge()
        }
        else
        {
            let lastDigit = year % 10; // остання цифра
            let lastTwoDigits = year % 100; // останні дві цифри
            if (lastDigit === 1 && lastTwoDigits !== 11) { // якщо остання цифра завершується на 1, а передостанні не = 11 то виводимо рік. Наприклад: 1 -> 1 рік
                console.log(year + " рік");
            } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) { //якщо остання цифра в діапазоні від 2 до 4, та дві останні в діапазоні від 10 до 20, то виводимо роки. Наприклад: 2 -> 2 роки
                console.log(year + " роки");
            } else { // в усіх інших випадках років. Наприклад: 5 -> 5 років. остання цифра/цифри завершується на 5
                console.log(year + " років");
            }
        }
    })
}
getAge()