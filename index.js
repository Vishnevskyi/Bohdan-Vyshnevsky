function powNumber(x, y) {
    result = 1; // оголошую змінну, що буде зберігати кінцевий результат
    for (let i = 1; i <= y; i++) { // цикл який буде виконуватися відповідно степеня яке передали
        result *= x; // підносимо до степеня
    }
    return result; // повертаємо результат
}
console.log(powNumber(2, 4)); // передаю 3 як число, 4 - степінь

function oneHungred() {
    for (let i = 1; i <= 100; i++) { // роблю цикл до 100
        i % 3 !== 0 ? console.log(i) : ""; // якщо число яке ділимо на 3 немає залишку, тоді виводимо його (не кратне 3)
    }
}
oneHungred(); // виклик функції

function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) { 
        let row = '';
        for (let j = 1; j <= i; j++) { 
            row += symbol; // прибавляємо зірочку до рядка
        }
        console.log(row);
    }
}

drawTriangle(5, '*');