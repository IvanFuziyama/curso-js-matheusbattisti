let data = new Date()
let hora24 = data.getHours()
let min = data.getMinutes()
console.log(`${hora24}:${min}`)
let hora12 = hora24 % 12
    if(hora24 <= 12 && min == 0){
        console.log(`${hora12}:${min} AM`)
    }else{
        console.log(`${hora12}:${min} PM`)
    }