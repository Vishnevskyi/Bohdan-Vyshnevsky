function myIsNaN(value) {
    // Перевіряємо, чи переданий аргумент не є числом
    // Якщо аргумент рівний самому собі та результат віднімання з нього нуля не є числом,
    // то значить переданий аргумент не є числом
    return value !== value - 0;
}

console.log(myIsNaN(5));  // false
console.log(myIsNaN('hello'));  // true
console.log(myIsNaN('5'));  // true
console.log(myIsNaN(NaN));  // true



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
console.log(pad('qwerty', '+', 8, true));  // Результат: ++qwerty
console.log(pad('qwerty', '+', 8, false)); // Результат: qwerty++


function numbersGeneric(countNumber) {
    let eventCount = 0; // парні числа
    let oddCount = 0; // непарні числа
    let percentCount; 
    for (let i = 0; i < countNumber; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100) + 100) // отримуємо рандомні числа
        randomNumber % 2 === 0 ? eventCount++ : oddCount++ // визначаємо чи парні чи непарні
    }
    percentCount = eventCount / oddCount; // ділимо парну кількість на непарну
    //виводимо результат
    console.log("Кількість згенерованих чисел: " + countNumber);
    console.log("Парних чисел: " + eventCount);
    console.log("Непарних чисел: " + oddCount);
    console.log("Відсоток парних до не парних: " + percentCount);
}
numbersGeneric(3)