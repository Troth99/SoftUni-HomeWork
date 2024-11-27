function heroes(arr){
    let heroName = `name`;
    let numberOfHeroes = Number(arr.shift());
    let maxHP = 100;
    let maxMana = 200;

    let heroes = []

    for (let i = 0; i < numberOfHeroes; i++){

        let [heroName, HP, mana] = arr[i].split(` `);
        HP = Number(HP);
        mana = Number(mana);

        let heroesObj = {
            name: heroName,
            HP: HP,
            Mana: mana
         }

         heroes.push(heroesObj); 
    }

arr.splice(0, numberOfHeroes)

let command = arr.shift()

while (command !== `End`){

    let heroActions = command.split(` - `);

    let action = heroActions.shift().toLowerCase();

   
    if (action === `castspell`){

        let [hero, mpNeed, spellName] = heroActions;
        mpNeed = Number(mpNeed);
        let heroesObj = heroes.find(h => h[heroName] === hero);
        let heroMana = heroesObj.Mana;
        
        if (heroMana >= mpNeed){
            heroesObj.Mana -= mpNeed;
            console.log(`${hero} has successfully cast ${spellName} and now has ${heroesObj.Mana} MP!`);  
        }else {
            console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            
        }
        
    }else if (action === `takedamage`){

        let [hero, damage, attacker] = heroActions;
        damage = Number(damage);

        let heroObj = heroes.find(h => h[heroName] === hero);
        heroObj.HP -= damage;
        if (heroObj.HP > 0){
            console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroObj.HP} HP left!`);
        }else {
            heroes = heroes.filter(h => h.name !== hero);
            console.log(`${hero} has been killed by ${attacker}!`);
        };
    }else if (action === `recharge`){

        let [hero, amount] = heroActions;
        amount = Number(amount);
        let heroObj = heroes.find(h => h[heroName] === hero)
        let rechargeAmount = maxMana - heroObj.Mana
       if (heroObj.Mana + amount > maxMana){
        heroObj.Mana = maxMana;
        console.log(`${hero} recharged for ${rechargeAmount} MP!`);
       }else {
        heroObj.Mana += amount
        console.log(`${hero} recharged for ${amount} MP!`);
       }
    
       
    }else if (action === `heal`){
        let [hero, amount] = heroActions;
        amount = Number(amount);
        let heroObj = heroes.find(h=> h[heroName] === hero);
        let healedAmount = maxHP - heroObj.HP;
        if (heroObj.HP + amount > maxHP){
            heroObj.HP = maxHP;
            console.log(`${hero} healed for ${healedAmount} HP!`);
        }else {
            heroObj.HP += amount
            console.log(`${hero} healed for ${amount} HP!`);
        }
      
        
    };
    command = arr.shift() 
};

for (let hero of heroes){
    let name = hero.name;
    let hp = hero.HP;
    let mana = hero.Mana;
    console.log(name);
    console.log(`  HP: ${hp}`);
    console.log(`  MP: ${mana}`);
    
}

}


heroes([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]
    
    
    )