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