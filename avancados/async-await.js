async function obterValor() {
    const promessa = new Promise ((resolve, reject) => {
        setTimeout(() => resolve("Valor obtido"), 2000)
    })

    const valor = await promessa
    console.log(valor)
}
obterValor()

////////////////////////////////////////


async function obterValorComErro() {
    try {
        const promessa = new Promise((resolve,reject) => {
            setTimeout(() => reject("Valor com erro"),2000)
        })
        const valor = await promessa
        console.log(valor)
    } catch (error) {console.log(error)}
}obterValorComErro()