function solve(arr) {

    let pirateShip = arr.shift().split(`>`).map(number => Number(number));
    let warShip = arr.shift().split(`>`).map(number => Number(number));

    let shipHealth = Number(arr.shift())

    let result = `stalemate`

    for (let command of arr) {

        if (command === `Retire`) {
            break;
        }

        let indexInfo = command.split(` `)
        let action = indexInfo[0]
        if (action === `Fire`) {

            let index = Number(indexInfo[1]);
            let damage = Number(indexInfo[2])

            if (index >= 0 && index < warShip.length) {

                warShip[index] -= damage

                if (warShip[index] <= 0) {
                    result = `We`
                    break
                }
            } 

            
        } else if (action === `Defend`) {

            let startIndex = Number(indexInfo[1]);
            let endIndex = Number(indexInfo[2]);
            let damage = Number(indexInfo[3])

            if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {


                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage

                    if (pirateShip[i] <= 0) {
                        result = `they`
                        break;

                    }
                }
            }
            

        } else if (action === `Repair`) {

            let index = Number(indexInfo[1]);
            let health = Number(indexInfo[2]);

            if (index >= 0 && index < pirateShip.length) {

                let currentHealth = pirateShip[index] += health
                if (currentHealth > shipHealth){
                    pirateShip[index] = shipHealth
                    
                }
            } 
            
        } else if (action === `Status`) {

            let countTorepair = 0

            for (let status = 0; status < pirateShip.length; status++) {

              if ( pirateShip[status] < (shipHealth * 0.20)){
                countTorepair++
              }
            }
            console.log(`${countTorepair} sections need repair.`);

        }

    }


    if (result === `We`){
        console.log(`You won! The enemy ship has sunken.`);
    }else if (result === `they`){
        console.log(`You lost! The pirate ship has sunken.`);
    }else if (result === `stalemate`){

        let pirateShipStatus = pirateShip.reduce((acc , current) => acc + current, 0)
        console.log(`Pirate ship status: ${pirateShipStatus}`);
        let warShipStatus = warShip.reduce((acc , curr) => acc + curr, 0)
        console.log(`Warship status: ${warShipStatus}`);
        
        
    }



}


solve(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])



/*solve(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Defend 0 3 5",
    "Status",
    "Retire"])*/