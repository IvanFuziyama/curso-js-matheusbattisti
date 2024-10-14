const promessa = new Promise((resolve, reject) => {
    const cond = true
    if(cond){
        resolve("A condição é verdadeira")
    }else{
        reject("A condição é falsa")
    }
})
promessa
.then((mensagem) => {
    console.log(mensagem)
})
.catch((erro) => {
    console.log(erro)
})