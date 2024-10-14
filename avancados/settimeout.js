//settimeout => dps de um tempo executa algo, uma vez
function mostrarMensagem(){
    console.log("Essa mensagem será exibida após 3 segundos")
}
setTimeout(mostrarMensagem, 3000)
// 1000 = 1segundo

setTimeout(function() {
    console.log("bruh")
}, 5000)