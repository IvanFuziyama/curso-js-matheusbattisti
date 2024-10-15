//ex

//array: [5,10,15,20,25,30,35,40]
//Use a função filter() para criar um novo array que contenha apenas os números que são maiores que 20

const numeros = [5,10,15,20,25,30,35,40]
const maior20 = numeros.filter((num) => num > 20)
console.log(maior20)