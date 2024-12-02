function solve(arr){
function plundering(town, people, gold){
    let obj = storedInformation.find (x => x.city === town);
    obj.population -= people;
    obj.gold -= gold
    console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
    return 
}

function deleteIt(town){
    storedInformation = storedInformation.filter(x => x.city !== town);
    console.log(`${town} has been wiped off the map!`);
    return storedInformation
}
function increaseTheGold(town, gold){
    let objToIncreaseGold = storedInformation.find(x => x.city === town)
    objToIncreaseGold.gold += gold
    console.log(`${gold} gold added to the city treasury. ${town} now has ${objToIncreaseGold.gold} gold.`);
    return 

}
let commandToObj = arr.shift();
let storedInformation = []

while (commandToObj !== `Sail`){

    let [cityName, population, gold] = commandToObj.split(`||`);
    population = Number(population);
    gold = Number(gold)
    
    let objInfo = {
      city: cityName,
      population: population,
      gold: gold
    };
    let obj = storedInformation.find (x => x.city === cityName);
    if (obj){
        obj.population += population;
        obj.gold += gold;
    }else {
        storedInformation.push(objInfo)
    }
    commandToObj = arr.shift();  
}

let infoTillEnd = arr.shift()

while (infoTillEnd !== `End`){
    let tokens = infoTillEnd.split(`=>`);
    let action = tokens.shift().toLowerCase();
    
    if (action === `plunder`){
        let town = tokens[0];
        let people = Number(tokens[1]);
        let gold = Number(tokens[2]);
         plundering(town, people, gold);
         let obj = storedInformation.find (x => x.city === town);
         if (obj.population <= 0 || obj.gold <= 0){
            deleteIt(town)
         }
        
    }else if (action === `prosper`){
        let town = tokens[0];
        let gold = Number(tokens[1]);

        if (gold < 0){
            console.log(`Gold added cannot be a negative number!`);
            infoTillEnd = arr.shift()
           continue
        }
        increaseTheGold(town, gold);
    }

    infoTillEnd = arr.shift()
}


if (storedInformation.length !== 0){
    console.log(`Ahoy, Captain! There are ${storedInformation.length} wealthy settlements to go to:`);
storedInformation.forEach(element => {
    console.log(`${element.city} -> Population: ${element.population} citizens, Gold: ${element.gold} kg`);
});
}else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    
}



}


solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
    
    
    