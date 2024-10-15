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