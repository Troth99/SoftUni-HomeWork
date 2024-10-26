function muOnline(arr){


let initialHealth = 100

let currentHealth = 100
let bitcoins = 0

let joined = arr.join(``)
let cmdInfo = joined.split(`|`)
let roomCounter = 0
for (let room of cmdInfo){
    
    roomCounter++
    let cmdInfo = room.split(` `)

    let action = cmdInfo[0]
    let token = Number(cmdInfo[1])
    

    if (action === `potion`){

    
       let healedAmount = token
       
        if (currentHealth + token > 100){
            healedAmount = initialHealth - currentHealth
            currentHealth = initialHealth
        }else {
            currentHealth += healedAmount
        }

        console.log(`You healed for ${Math.abs(healedAmount)} hp.`);
        console.log(`Current health: ${currentHealth} hp.`);
        
     }else if ( action === `chest`){

            bitcoins += token

            console.log(`You found ${token} bitcoins.`);
            
     }else {

            currentHealth -= token

        if (currentHealth <= 0 ){
            console.log(`You died! Killed by ${action}.`);
            console.log(`Best room: ${roomCounter}`);
            
            return
        }else {
            console.log(`You slayed ${action}.`);
            
        }
     }

    
}

console.log(`You've made it!`);
console.log(`Bitcoins: ${bitcoins}`);
console.log(`Health: ${currentHealth}`);









}

muOnline(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
