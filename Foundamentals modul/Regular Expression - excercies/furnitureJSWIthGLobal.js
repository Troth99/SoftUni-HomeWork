function furniture(arr) {


    let arrAsString = arr.join(` `)

    let checkValid = />>(?<furniture_name>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)\!(?<quantity>\d+)/g

    let totalPrice = 0
    let matched = arrAsString.match(checkValid)


    let boughtItems = []

    if (matched !== null) {


        for (let furniture of matched) {


            let exec = checkValid.exec(arrAsString)
            if (furniture === `Purchase`) {
                break;
            }
            let furnitureName = exec.groups.furniture_name
            let price = Number(exec.groups.price)
            let quantity = Number(exec.groups.quantity)

            boughtItems.push(furnitureName)
            totalPrice += price * quantity

        }
    }


    console.log(`Bought furniture:`);

    for (let items of boughtItems) {
        console.log(items);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
    )