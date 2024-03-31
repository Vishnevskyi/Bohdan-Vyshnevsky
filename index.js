// Задані значення (можна ввести користувачем за допомогою prompt)
var prompt = require("prompt")
prompt.start()
// Функція для переведення одиниць вимірювання
function convertUnits(unit, measure) {
    let result;

    // Використання switch для визначення переведення відповідно до введеної одиниці
    switch (unit) {
        case "км":
            result = `${measure} км це ${measure * 1000} м.`;
            break;
        case "год":
            result = `${measure} год це ${measure * 60} хв.`;
            break;
        case "кг":
            result = `${measure} кг це ${measure * 1000} гр.`;
            break;
        default:
            result = "Невідома одиниця виміру";
    }

    return result;
}

// Виведення результату
function getConvert() {
    prompt.get(['unit','measure'], function(err, value) {
        if (err) {
            console.log("Помилка");
        }
        else
        {
            console.log(convertUnits(value.unit, value.measure));
        }
    })
}
getConvert();
