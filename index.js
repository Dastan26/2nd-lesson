// let age = 20;

//  if ( age >= 14 && age <= 90) {
//      console.log(true)
//  } else console.log(false)


// let age = 10;

// if ( age >= 14 && age <= 90) {
//     console.log(true)
// } else console.log(false);

// let logIn = prompt('Введите логин', '');
// let AdminPassword = 'password';


// if (logIn === 'admin') {
//     enterPassword = prompt('Введите пароль', '') 
// }    else if (logIn === null || logIn === '') {
//         alert('Отменено')
//     }   else if (logIn !== 'admin') 
//             alert('Я вас не знаю');

// if (enterPassword === AdminPassword) {
//     alert('Добро пожаловать!')
// } else if (enterPassword === null || enterPassword === '') {
//     alert('Отменено')
// } else alert('Пароль неверный')


// let number = prompt('Your number', '');

// if (isNaN(number) === true){
//     alert('Variable is not a number')
// } else alert('Variable is a valid number')


// let num1 = 9;
// let num2 = 5;

// if (num1 > num2) {
//     alert('num1 is a largest')
// } else if (num1 < num2) {
//     alert('num2 is a largest')
// } else alert('num1 and num2 are equal');


// let num3 = 4;

// if (num1 > num2 && num1 > num3) {
//     alert('num1 is a largest')
// } else if (num2 > num3) {
//     alert('num2 is a largest')
// } else alert('num3 is a largest');


let num1 = 5;
let num2 = 9;

operationName = prompt('enter the operation');
switch (operationName) {
    case 'add':
        alert(num1 + num2);
        break;

    case 'subtract':
        alert(num1 - num2);
        break;

    case 'multiply':
        alert(num1 * num2);
        break;

    case 'devide':
        alert(num1 / num2);
        break;

    case 'modulus':
        alert(num1 % num2);
        break;

    default:
        alert('invalid operation');
}


let name = "Ilya";

alert(`hello ${1}`);

alert(`hello ${"name"}`);

alert(`hello ${name}`);


let userName;

userName = prompt('Как вас зовут?');
alert('Привет' + ' ' + userName);

const number = 9;
alert(number ** 2);





