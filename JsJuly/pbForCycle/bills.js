function bills(input){

    let index = 0;
    let months = Number(input[index]);
    index++

    let electricityBill = 0;
    let waterBill = 20;
    let enthernetBill = 15;
    let others = 0;
    

    for (let bills = 0; bills < months; bills++){

        let currentSum = Number(input[index]);
        index++
        
       electricityBill += currentSum


        others += currentSum + waterBill + enthernetBill
    
    }

    others += others * 0.20
    waterBill *= months
    enthernetBill *= months

    let averaget = (electricityBill + waterBill + enthernetBill + others) / months

        console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
        console.log(`Water: ${waterBill.toFixed(2)} lv`);
        console.log(`Internet: ${enthernetBill.toFixed(2)} lv`);
        console.log(`Other: ${others.toFixed(2)} lv`);
        console.log(`Average: ${averaget.toFixed(2)} lv`);




}

bills([`5` , `68.63`,`89.25`,`132.53`,`93.53`,`63.22`,])