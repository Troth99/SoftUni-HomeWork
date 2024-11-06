function armies(arr){
    let armiesObj = {}

    for (let armyInfo of arr){


        if (armyInfo.includes(`arrives`)){
            let [leaderName] = armyInfo.split(` arrives`)

           armiesObj[leaderName] = {}
           continue
            
        }

        let [leader, armyName, armyCount] = armyInfo.split(`:`).join(`,`).split(`, `)
       
        if (leader in armiesObj){
            armiesObj[leader][armyName] = Number(armyCount)
        }

        if (armyInfo.includes(`+`)){
            let [armyName, power] = armyInfo.split(` + `)
            power = Number(power)
          for (let leader in armiesObj){
            if (armyName in armiesObj[leader]){
                armiesObj[leader][armyName] += power
            }
          }
            
        }
        
        

        if (armyInfo.includes(`defeated`)){

            let [leaderName] = armyInfo.split(` defeated`)

            if (leaderName in armiesObj){
                delete armiesObj[leaderName]
            }        
        }
        
    }

    let leaderArmyPower = {};
    let armyPower = Object.entries(armiesObj);

    for (let power of armyPower) {
        let leader = power[0];
        let values = Object.values(power[1]);
        let calculation = values.reduce((sum, val) => sum + val, 0); 
        leaderArmyPower[leader] = calculation;
    }


    let leadersSorted = Object.entries(leaderArmyPower).sort((a, b) => b[1] - a[1]);

    for (let [leader, power] of leadersSorted) {
        console.log(`${leader}: ${power}`);

        let armies = Object.entries(armiesObj[leader]); 
        let sortedArmies = armies.sort((a, b) => b[1] - a[1]); 
        for (let [armyName, powerValue] of sortedArmies) {
            console.log(`>>> ${armyName} - ${powerValue}`);
        }
    }
}



armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 
    'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 
    'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])