let myObject = {
    name: 'Bohdan',
    age: 21,
    city: 'Kyiv',
    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};

// Виводимо інформацію про об'єкт
myObject.getInfo();

// Додаємо нову властивість до об'єкта
myObject.newProperty = 'Нова властивість!';

// Виводимо інформацію про об'єкт з урахуванням нової властивості
myObject.getInfo();

var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн",
    price()
    {
        let priceCount = 0;
        let numbers = this.checkFunction(this) // отримуємо масив чисел 
        for (let i = 0; i < numbers.length; i++)
        {
            priceCount += numbers[i] // додаємо числа масиву
        }
        return priceCount
    },
    minPrice()
    {
       let numbers = this.checkFunction(this) // отримуємо масив чисел
       let minPrice = numbers[0] // встановлюємо мінімальним перше значення масиву
       for (let i = 0; i < numbers.length; i++)
       {
        if (numbers[i] < minPrice) // якщо перше значення більше за інше присвоюємо останнє в змінну
        {
            minPrice = numbers[i]
        }
       }
       return minPrice
    },
    maxPrice()
    {
        let numbers = this.checkFunction(this) // отримуємо масив чисел
        let maxPrice = numbers[0]; // встановлюємо максимальним перше значення масиву
        for (let i = 0; i < numbers.length; i++)
        {
         if (maxPrice < numbers[i]) // якщо перше значення менше за інше присвоюємо останнє в змінну
         {
            maxPrice = numbers[i]
         }
        }
        return maxPrice
    },
    checkFunction(arg) //приймаємо this
    {
        let prices = [] // масив який будемо повертати
        for (let key in arg) 
        {
            if (typeof arg[key] !== 'function') //перевірка на те що тип не функція
            {
              prices.push(parseInt(arg[key])) // додавання значень перетворених в int в масив
            }
        }
        return prices
    }
};
services['Розбити скло'] = "200 грн"; // додаємо новий ключ в об'єкт
console.log(services.price()); // 440
console.log(services.minPrice()); // 60
console.log(services.maxPrice()); // 220