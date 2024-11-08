function arenaTier(arr) {

    let gladiatorsPool = {}

    for (let command of arr) {

        if (command === `Ave Cesar`) {
            break
        }

        let [gladiator, technique, skillPoints] = command.split(` -> `)
        skillPoints = Number(skillPoints)

        if (!command.includes(`vs`)) {
            if (!gladiatorsPool[gladiator]) {
                gladiatorsPool[gladiator] = {}
            }


            if (!gladiatorsPool[gladiator][technique]) {
                gladiatorsPool[gladiator][technique] = skillPoints
            } else {
                if (gladiatorsPool[gladiator][technique] < skillPoints) {
                    gladiatorsPool[gladiator][technique] = skillPoints
                }
            }

        }

        if (command.includes(`vs`)) {

            let [gladiatorOne, gladiatorTwo] = command.split(` vs `)


            if (gladiatorOne in gladiatorsPool && gladiatorTwo in gladiatorsPool) {

                let techhniquesOne = Object.keys(gladiatorsPool[gladiatorOne])
                let techniquesTwo = Object.keys(gladiatorsPool[gladiatorTwo])
            
                let commonTech = techhniquesOne.find(technique => techniquesTwo.includes(technique))

                if (commonTech){
                    let gladiatorOnePoints = Object.entries(gladiatorsPool[gladiatorOne]).reduce((acc, sum) => acc + sum[1], 0)
                    let gladiatorTwoPoints = Object.entries(gladiatorsPool[gladiatorTwo]).reduce((acc, sum) => acc + sum[1], 0)
                 
                    if (gladiatorOnePoints > gladiatorTwoPoints) {
                        delete gladiatorsPool[gladiatorTwo]
                    } else if (gladiatorTwoPoints > gladiatorOnePoints) {
                        delete gladiatorsPool[gladiatorOne]
                    }

                }
            

            }

        }

    }

let gladiatorsPoint = {}

let gladiators = Object.entries(gladiatorsPool)

for (let gladiator of gladiators){
    let totalPoints = 0
    
    let gladiatorName = gladiator[0]
    
    let value = Object.values(gladiator[1])
    
    for (let currentValue of value){
        totalPoints += currentValue
    }

   gladiatorsPoint[gladiatorName] = totalPoints
    
}
 
let sorted = Object.entries(gladiatorsPoint).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))


for (let [gladiatorName, points] of sorted){
    console.log(`${gladiatorName}: ${points} skill`);

      let entries = Object.entries(gladiatorsPool[gladiatorName]).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    
      for (let [skills, power] of entries){

        console.log(`- ${skills} <!> ${power}`);
        
       
    }
    
   

    
    
}
}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]

)