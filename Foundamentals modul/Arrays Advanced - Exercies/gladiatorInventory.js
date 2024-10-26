function checkTheInventory(arr) {

    let petersInventory = arr.shift().split(` `)

    for (let command of arr) {

        let elements = command.split(` `)

        let action = elements[0]
        let token = elements[1]

        if (action === `Buy`) {

            if (petersInventory.includes(token)) {
                continue
            } else {
                petersInventory.push(token)
            }
        } else if (action === `Trash`) {

            if (petersInventory.includes(token)) {
                let findIndex = petersInventory.indexOf(token)
                petersInventory.splice(findIndex, 1)
            } else {
                continue
            }
        } else if (action === `Repair`) {

            if (petersInventory.includes(token)) {
                let findIndex = petersInventory.indexOf(token)
                petersInventory.splice(findIndex, 1)
                petersInventory.push(token)
            } else {
                continue
            }
        } else if (action === `Upgrade`) {

            let token1 = token.split(`-`)
            let firstElement = token1[0]
            let secondElement = token1[1]

            if (petersInventory.includes(firstElement)) {
                let findIndex = petersInventory.indexOf(firstElement)
                petersInventory.splice(findIndex + 1, 0, `${firstElement}:${secondElement}`)
            } else {
                continue
            }
        }
    }


    console.log(petersInventory.join(` `));


}

checkTheInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']

)