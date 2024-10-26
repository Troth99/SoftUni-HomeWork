function solve(arr) {

    class Heroes {
        constructor(hero, level, items) {
            this.Hero = hero
            this.level = level
            this.items = items
        }

        logHeroes() {
            console.log(`Hero: ${this.Hero}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.items}`);



        }
    }

    let heroes = []

    for (let i = 0; i < arr.length; i++) {

        let cmd = arr[i]
        let cmdInfo = cmd.split(` / `)

        let hero = cmdInfo.shift()

        let level = Number(cmdInfo.shift())


        let items = cmdInfo.join(``)

        heroes.push(new Heroes(hero, level, items))




    }

    heroes.sort((lowerLevel, higherLevel) => lowerLevel.level - higherLevel.level)

    for (let hero of heroes) {
        hero.logHeroes()
    }

}



solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]

)