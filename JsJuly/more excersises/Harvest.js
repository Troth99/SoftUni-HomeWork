function harvest(input){

        let harvestM2 = Number(input[0]);
        let grapesPerM2 = Number(input[1]);
        let neededWine = Number(input[2]);
        let workers = Number(input[3]);

        let totalGrapes = harvestM2 * grapesPerM2;
        let totalWine = (totalGrapes *0.40) / 2.5;

        if (totalWine >= neededWine) {
            let wineLeft = Math.ceil(totalWine- neededWine);
            let winePerPerson = Math.ceil(wineLeft / workers);
            console.log(`Good harvest this year! Total wine: ${totalWine} liters.`);
            console.log(`${wineLeft} liters left -> ${winePerPerson} liters per person.`);
        
        }else {
            console.log(`It will be a tough winter! More ${Math.floor(neededWine - totalWine)} liters wine needed.`);
        }



       


}
harvest(["650","2" , "175" , "3"])
harvest(["1020" , "1.5" , "425" , "4"])