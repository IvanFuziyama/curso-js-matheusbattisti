const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 2500, "testando")
})
Promise.all([promise1, promise2]).then((valores) => console.log(valores))