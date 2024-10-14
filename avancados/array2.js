// map, filter, reduce -> arrow function
const numeros = [1,2,3,4,5,6]

//find => retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0)
console.log(numeroPar)

//filter => retorna todos os elementos que coincidem com o critério
const numerosPares = numeros.filter((num) => num % 2 === 0)
console.log(numerosPares)