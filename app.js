console.log('*****js-basico*****')
console.log('*****operadores*****')
//operaciones
var number1 = 60;
var number2 = 30;
console.log('*****en la suma de ' + number1 + ' y ' + number2 + '*****')
const result = number1 + number2;
console.log('el resultado es' + ' ' + result)
console.log('*****en la resta de ' + number1 + ' y ' + number2 + '*****')
const resta = number1 - number2;
console.log('el resultado es' + ' ' + resta)
console.log('*****en la multiplicacion de ' + number1 + ' y ' + number2 + '*****')
const multiplicacion = number1 * number2;
console.log('el resultado es' + ' ' + multiplicacion)
const cociente = number1 / number2;
console.log('*****en la division de ' + number1 + ' y ' + number2 + '*****')
console.log('el resultado es' + ' ' + cociente)
//concatenaciones
console.log('*****concatenaciones*****')
var name = 'armando';
var lastname = 'caja';

const persona = name +' '+ lastname;
console.log('el nombre del oficial es' + ' ' + persona)

console.log('*****comparaciones*****')
//comparaciones
console.log('si a es 60 y b es 30')
var number1 = 60;
var number2 = 30;

const diferencia1 = number1 > number2;
console.log('es a mayor de b ? :' + ' ' + diferencia1)
const diferencia2 = number1 < number2;
console.log('es a menor de b ? :' + ' ' + diferencia2)

console.log('*****condicionales*****')
//condicionales
var number1 = 80;
var number2 = 40;
console.log('*****si a es ' + number1 + ' y b es ' + number2+'*****')
if (number1 == number2) {
    console.log('*****a es igual a b*****')
}
else {
    if (number1 > number2) {
        console.log('*****a es mayor que b*****')
    }else
    {
        console.log('*****a es menor que b*****')
    }
}



var password = 'qq';
var input = 'vv';
console.log('*****si la contraseña es ' + password + ' y digitaste ' + input + '*****')
if (password == input){
    console.log('*****la contraseña es correcta*****')
}
else {
    console.log('*****la contraseña es incorrecta*****')
}

