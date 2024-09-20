function solve(lostFights, helpmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0
    let shieldBreak = 0
    for (let i = 1; i <= lostFights; i++) {

       
        if (i % 2 === 0) {
            totalExpenses += helpmetPrice
        }
        if (i % 3 === 0) {
            totalExpenses += swordPrice
        }

        if (i % 2 === 0 && i % 3 === 0) {
            totalExpenses += shieldPrice
            shieldBreak++
            
            if (shieldBreak % 2 === 0) {
                totalExpenses += armorPrice
                shieldBreak = 0
            }
        }
       
      
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);

}

solve (23,
    12.50,
    21.50,
    40,
    200
)
/*solve(7,
    2,
    3,
    4,
    5)*/
