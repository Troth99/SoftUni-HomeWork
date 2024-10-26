function login(input){

let index = 0
let userName = input[index++]
let counter = 0

while (index < input.length){
    counter++

  
    let currentPassword = input[index++]

    let reversed = currentPassword.split(``).reverse().join(``)
    if ((counter === 4) && reversed !== userName){
        console.log(`User ${userName} blocked!`)
        break;
    }
    if (reversed === userName){
        console.log(`User ${reversed} logged in.`)
        break;
    }else if (reversed !== userName){
        console.log(`Incorrect password. Try again.`)
    }

}

}


login(['sunny','rainy','cloudy','sunny','not sunny'])