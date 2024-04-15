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










// function myBlend(arr) {
//     arr.forEach((value, index) => {
//         const randomIndex = Math.floor(Math.random() * arr.length); // визначаємо за допомогою функції випадковий індекс в межах розмірах масиву
//         [arr[index], arr[randomIndex]] = [arr[randomIndex], value]; // для кожного елементу обмінюємо поточний з тим який знаходиться на випадковому місці в масиві
//     });
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// myBlend(arr);
// console.log(arr); // Перемішаний масив


const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function findValueByKey(companyName) {
    function search(company) {
        if (company.name = companyName) {
            return company
        }       
        if (company.clients) {
            for (let i = 0; i < company.clients.length; i++) {
                const client = company.clients[i];
                const found = search(client);
                if (found)
                {
                    return found
                }
            }
        }
        return null;
    }

    return search(company);
}

// Приклад використання
const subCompany = findValueByKey('Клієнт 1.2.3');
console.log(subCompany);