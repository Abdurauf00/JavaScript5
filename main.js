// let user ={
//     name: 'Rauf',
//     age: 17,
//     working: true
// }

// user.city = 'Tashkent'
// user['language'] = 'JavaScript'


// console.log('name' in user);


// let phone = {
//     model: '14 pro',
//     price: 1000,
//     year: 2022,
//     avaliable: true
// }

// for(let key in phone){
//    //console.log(key); - Отдает только названия всех ключей в объекте
//    //console.log(phone[key]); - Отдает значение всех ключей в объекте
//    //console.log('Ключ ' + key + ' значение ключа ' + phone[key]);
//    //console.log(`Ключ ${key} значение ключа ${phone[key]}`);
// }

//Функция созданная внутри объекта называется методом

//let person = {
//    name: 'Rauf',
//    age: 17,
//    city:'Tashkent',
//    info(){
//        return alert(`Меня зовут ${this.name} мне ${this.age} лет`)
//    }
//}
//
//console.log(person);
//



//N1

let users = {};

for (let i = 1; i <= 10; i++) {
    users[i] = {
        name: prompt('Введите имя'),
        age: +prompt('Введите возраст')
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`Пользователь ${i}`)
    console.log(`Ваше имя - ${users[i].name}`)
    console.log(`Ваш возраст - ${users[i].age}`)
}

console.log(users);



//N2
let cart = receipt();
let text = 'Вы заказали ';
let delivery = 9000;

for (let key in cart) {
    text += `${key}`

    for (let aboba in cart[key]) {
        if (aboba == ['info']) {
            text +=  ` ${cart[key][aboba]}, `
        }
        if (aboba == ['price']) {
            delivery += cart[key][aboba];
        }
    }
}


console.log(`${text} | Общая стоимость ${delivery} сум с доставкой (9000)`);