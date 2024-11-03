function legendaryFarming(arr){

let itemCollected = {
    motes: 0,
    shards: 0,
    fragments: 0
}


let legendaryItem = ``
let junks = {}
let spllitedMaterial = arr.split(` `)
for (let i = 0; i< spllitedMaterial.length; i+=2){

    
    let quantity = Number(spllitedMaterial[i])
    let mats = spllitedMaterial[i + 1].toLowerCase()
    if (mats === `motes`){
      
        itemCollected.motes += quantity
        
        if (itemCollected.motes >= 250){
            break;
        }
    }else if (mats === `shards`){
       

        itemCollected.shards += quantity
        
        if (itemCollected.shards >= 250){
            break;
        }
    }else if (mats === `fragments`){
        
        itemCollected.fragments += quantity
        
        if (itemCollected.fragments >= 250){
            break;
        }
        
    }else {
        
        if (junks[mats]){

            junks[mats] += quantity
        }else {
            junks[mats] = quantity
        }
    }


}
    if (itemCollected.motes >= 250){
        legendaryItem += `Dragonwrath`
        itemCollected.motes -= 250
    }else if (itemCollected.shards >= 250){
        legendaryItem += `Shadowmourne`
        itemCollected.shards -= 250
    }else if (itemCollected.fragments >= 250){
        legendaryItem += `Valanyr`
        itemCollected.fragments -= 250
     
    }



console.log(`${legendaryItem} obtained!`);

let sortedItems = Object.entries(itemCollected).sort((firstNumber, secondNumber) => secondNumber[1] - firstNumber[1] || firstNumber[0].localeCompare(secondNumber[0]))

for (let [item, quantity] of sortedItems){

    console.log(`${item.toLowerCase()}: ${quantity}`);
    
}

let sortedJunk = Object.entries(junks).sort((firstOrder, secondOrder) => firstOrder[0].localeCompare(secondOrder[0]))

for (let [junkItem, quantity] of sortedJunk){
    console.log(`${junkItem}: ${quantity}`);
    
}

}


legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')