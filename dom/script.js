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
const novoElemento = document.createElement("div")
console.log(novoElemento)
novoElemento.textContent = "Minha div de Javascript"
console.log(novoElemento)
document.body.appendChild(novoElemento) //acrescenta no final

document.body.insertBefore(novoElemento, pai)

//document.body.removeChild(element) remove o elemento #meuId

//Eventos
//click
const botao = document.querySelector("button")
botao.addEventListener("click", function(){
    console.log("botão clicado")
} )

//mouse
const elemento5 = document.querySelector("#meuFormulario")
elemento5.addEventListener("mouseover", function(){
    console.log("O mouse passou aqui")
})

//teclado
const campoInput = document.querySelector("#meuInput")
campoInput.addEventListener("keydown", function(){
    console.log("Tecla pressionado")
})

//formulario
const form = document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("Formulário enviado")
})

//propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function(){
    console.log("clique capturado no pai")
})

document.querySelector("#elementoFilho").addEventListener("click", function(event){
    event.stopPropagation()
    console.log("clique capturado no filho")
})