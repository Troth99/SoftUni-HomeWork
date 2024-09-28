function dungeon(input) {

    let room = 0
    let totalHealth = 100
    let coins = 0
    let currentHeal = 0
    let arr = `${input}`
    let separateElement = arr.split(`|`)

    let monsterName = []
    for (let i = 0; i < separateElement.length; i++) {


        room++
        let parts = separateElement[i].split(` `)
        parts[1] = Number(parts[1]);
        let name = separateElement[i].split(` `)[0];
        let currentNumber = +separateElement[i].split(` `)[1]

        if (totalHealth > 0 && name !== `potion` && name !== `chest`) {
            totalHealth -= currentNumber
            currentHeal = totalHealth


            monsterName = []
            if (totalHealth > 0) {
                console.log(`You slayed ${name}.`);

            } else if (totalHealth <= 0) {
                console.log(`You died! Killed by ${name}.`);
                console.log(`Best room: ${room}`);

                return;

            }
        }

        if (name === `potion`) {
            totalHealth += currentNumber
            if (totalHealth > 100) {
                totalHealth = 100
                let amountHealed = Math.min(totalHealth, 100 - currentHeal)

                console.log(`You healed for ${amountHealed} hp.`);
                console.log(`Current health: ${totalHealth} hp.`);
            } else {
                console.log(`You healed for ${currentNumber} hp.`);
                console.log(`Current health: ${totalHealth} hp.`);
            }

        }
        if (name === `chest`) {
            coins += currentNumber
            console.log(`You found ${currentNumber} coins.`);

        }



    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${totalHealth}`);



}




dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])