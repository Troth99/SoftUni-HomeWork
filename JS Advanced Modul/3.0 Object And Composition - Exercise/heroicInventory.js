function heroicInventory(input) {
    const result = [];
    for (const el of input) {
        let [name, level, items] = el.split(` / `)
        level = Number(level);

        if (!name || !level){
            continue;
        }
        let spllitedItems = items ? items.split(`, `): []
       
        result.push({ name, level, items: spllitedItems })


    }

    console.log(JSON.stringify(result));

}


// heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 /  BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']
// )
heroicInventory([`Jake / 1000 / Gauss, HolidayGrenade`])