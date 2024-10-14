//callback = função
function cumprimentar(nome, callback){
    console.log("Olá, "+nome)
    callback()
}

function mostrarSaudacao(){
    console.log("Como você está?")
}

cumprimentar("Matheus", mostrarSaudacao)


