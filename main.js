/*IGNACIO WAINER- CURSO JAVASCRIPT*/
/*
Conversor Entero a Binario entre 0 y 9999
*/

function esValido(numero) {
    let flag = true;
    if (numero != null && !isNaN(numero) && numero < 9999)  flag = false; // si el valor ingresado es null / nan o un numero mayor a 9999 devuelve false
    return flag}
/*Funcion que recibe un parametro y evalua si es nan o null, en caso afirmativo devuelve true*/

function convertir(numero){
    let  resultado =0;
    let resto = 0;
    let contador = 0;
    while (numero != 0){
        resto = numero % 2;
        numero = Math.trunc(numero / 2); 
        resultado = resultado + resto * (10 ** contador);
        contador += 1;}
    return resultado;}
// Funcion que recibe un numero entero de parametro y lo convierte a binario


function conversor(numero){
    let resultado = 0; 
    while (esValido(numero)){
        alert('La entrada ingresada no es correcta, por favor intentalo denuevo');
        numero = parseInt(prompt('Por favor ingresa un número entero entre 0 y 9999 a convertir: '));}
        resultado = convertir(numero);
        console.log(numero +' -------> '+ resultado);
    return resultado;}
/*Funcion que recibe un parametro y evalua si se puede comvertir, en caso afirmativo realiza la conversion y la devuelve*/
    

// programa pricipal 

alert('Hola, bienvenido al conversor entero a binario'); 
let numero = parseInt(prompt('por favor ingresa un número entero entre 0 y 9999 a convertir: '));
let resultado = conversor(numero);
alert('El resultado es : ' + resultado);


while (confirm('Deseas realizar otra operación?')){
    numero = parseInt(prompt('por favor ingresa un número entero entre 0 y 9999 a convertir: '));
    resultado = conversor(numero);
    alert('El resultado es : ' + resultado);}
    
alert('Gracias!');



