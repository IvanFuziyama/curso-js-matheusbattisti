//ex

//string: "O rato roeu a roupa do rei de Roma"
//Verifique se a string começa com a palavra "O" e termina com a palavra Roma

const frase = "O rato roeu a roupa do rei de Roma"
const fraseInicio = frase.startsWith("O")
const fraseFim = frase.endsWith("Roma")

console.log(frase)

console.log(`A frase começa com O? ${fraseInicio}`)
console.log(`A frase termina com Roma? ${fraseFim}`)
