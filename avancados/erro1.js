//exceções e tratamentos de erros
const idade = 15

try{
   if(idade < 18){
    throw new Error("Você deve ter pelo menos 18 anos")
}
}catch(error){
 console.log(error.message)
}


console.log("continuar o programa")