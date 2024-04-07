function randomNumber(count) {
    // Ініціалізуємо лічильники парних та непарних чисел
    let evenCount = 0;
    let oddCount = 0;
    let percentCount = 0;
    // Генеруємо випадкові числа та рахуємо кількість парних та непарних чисел
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        randomNumber % 2 === 0 ? evenCount++ : oddCount++
    }
    oddCount !== 0 ? percentCount = evenCount / oddCount * 100 : ""
    // Виводимо інформацію
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + evenCount);
    console.log("Непарних чисел: " + oddCount);
    console.log("Відсоток парних до непарних: " + percentCount + "% : ");
}

randomNumber(6)


function pad(str, symbol, length, padStart) {
    // Перевірка, чи треба додавати символи в початок чи в кінець рядка
    if (padStart) {
        // Додавання символів в початок рядка
        while (str.length < length) {
            str = symbol + str;
        }
        return str;
    } else {
        // Додавання символів в кінець рядка
        while (str.length < length) {
            str += symbol;
        }
        return str;
    }
}

// Приклад використання
console.log(pad('qwerty', '+', 8, true));  // Результат: ++++++++qwerty
console.log(pad('qwerty', '+', 8, false)); // Результат: qwerty++++

function myIsNaN(value) {
    // Перевіряємо, чи переданий аргумент не є числом
    // Якщо аргумент рівний самому собі та результат віднімання з нього нуля не є числом,
    // то значить переданий аргумент не є числом
    return value !== value - 0;
}

// Перевірка роботи функції
console.log(myIsNaN(5));  // false
console.log(myIsNaN('hello'));  // true
console.log(myIsNaN('5'));  // true
console.log(myIsNaN(NaN));  // true

