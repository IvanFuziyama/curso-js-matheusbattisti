//ex

//array: [3,7,14,21,29,36,42]
//use a função find() para encontrar o primeiro número que é divisível por 7 e maior que 10

const numeros = [3,7,14,21,29,36,42]
const div7 = numeros.find((num) => num % 7 === 0 && num > 10)
console.log(div7)