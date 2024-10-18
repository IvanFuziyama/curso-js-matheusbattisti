// DOM - Document Object Model

//manipular conteúdo de texto
const element = document.querySelector('#meuId')
console.log(element.textContent)

setTimeout(() =>
element.textContent = "Mudei de texto"
,2000)

//trabalhando com atributos
const link = document.querySelector('a')
console.log(`link antigo: ${link.getAttribute("href")}`)
link.setAttribute("href", "https://horadecodar.com.br/cursos")
console.log(`link novo: ${link.getAttribute("href")}`)

console.log(link.hasAttribute("target"))
link.removeAttribute("target")

//manipulação de classes do CSS
const elemento = document.querySelector("#meuId")
element.classList.add("novaClasse")
element.classList.remove("minhaClasse")//tirei a class .minhaClasse
element.classList.toggle("outraClasse")//se não existe adiciona
element.classList.toggle("outraClasse")// se existe remove

//manipulação de CSS
const elemento3 = document.querySelector("#meuId")
elemento3.style.color  = "blue"
elemento3.style.backgroundColor = "red"

//navegação entre nós
const element4 = document.querySelector("#meuInput")
const pai = element4.parentNode
console.log(pai)

//obter o primeiro filho
const primeiroFilho = pai.firstChild
console.log(primeiroFilho)

const ultimoFilho = pai.lastChild
console.log(ultimoFilho)

//manipulação de estrutura do DOM