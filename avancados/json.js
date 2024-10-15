//JSON (Javascript Object Notation)
// {nome: "teste"} => {"nome": "teste"}
//padroniza a comunicação
// front-end e back-end em uma linguagem só
const objeto = {nome: "João", idade: 30}
const jsonString = JSON.stringify(objeto)

console.log(jsonString)
console.log(typeof(jsonString))

console.log("////////////////")

const json = '{ "nome": "João", "idade": 30}'
const objeto2 = JSON.parse(json)
console.log(json)
console.log(objeto2)
