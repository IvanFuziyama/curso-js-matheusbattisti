//ex

//string: " Bom dia, mundo!  "
//remova os espações em brancos no início e no final da string, em seguida divida a string em palavras

const frase = "      Bom dia, mundo!  "
const fraseSemEspaco = frase.trim()
const palavras = frase.trim().split(" ")

console.log(frase)//sem ateração

console.log(fraseSemEspaco)
console.log(palavras)

