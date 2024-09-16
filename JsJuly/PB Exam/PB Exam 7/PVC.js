function PVC(input) {

    let numberOfOrders = Number(input[0]);
    let PVCType = input[1];
    let deliver = input[2];

    let pricePer = 0    //ЕД цена

    if (numberOfOrders < 10){
        console.log(`Invalid order`);
        return
    }
    switch (PVCType) {
        case `90X130`:
            pricePer = numberOfOrders * 110;
            if (numberOfOrders > 30 && numberOfOrders < 60) {
                pricePer = pricePer - pricePer * 0.05
            } else if (numberOfOrders > 60) {
                pricePer -= pricePer * 0.08
            }
            break;
            case `100X150`:
                pricePer = numberOfOrders * 140;
                if (numberOfOrders > 40 && numberOfOrders < 80) {
                    pricePer -= pricePer * 0.06
                } else if (numberOfOrders > 80) {
                    pricePer -= pricePer * 0.10
                }
                break;
            case `130X180`:
                pricePer = numberOfOrders * 190;
                if (numberOfOrders > 20 && numberOfOrders < 50)  {
                    pricePer -= pricePer * 0.07
                } else if (numberOfOrders > 50) {
                    pricePer -= pricePer * 0.12
                }
                break;
            case `200X300`:
                pricePer = numberOfOrders * 250;
                if (numberOfOrders > 25 && numberOfOrders <50) {
                    pricePer -= pricePer * 0.09
                } else if (numberOfOrders > 50) {
                    pricePer -= pricePer * 0.14
                }
                break;
    
        }
    
    switch (deliver) {
        case `Without delivery`:
            break;
        case `With delivery`:
            pricePer = pricePer + 60
            break;
    }

    if (numberOfOrders > 99) {
        pricePer = pricePer - pricePer * 0.04
    }

    console.log(`${pricePer.toFixed(2)} BGN`);
}



PVC(["105",
    "100X150",
    "With delivery"])
    
    
