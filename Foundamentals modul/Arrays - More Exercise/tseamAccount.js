function solve(gamesAsArray) {

    let index = 0
    let command = gamesAsArray[index++]

    let game = command.split(` `)

    command = gamesAsArray[index++]
    while (command !== `Play!`) {


        let action = command.split(` `)

        let actionForGame = action[0]
        let gameForAction = action[1]

        if (actionForGame === `Install`) {

            if (!game.includes(gameForAction)) {
                game.push(gameForAction)

            }

        } else if (actionForGame === `Uninstall`) {

            if (game.includes(gameForAction)) {

                let indexGame = game.indexOf(gameForAction)
                game.splice(indexGame, 1)
            }
        } else if (actionForGame === `Update`) {

            if (game.includes(gameForAction)) {

                let gameForUpdate = game.indexOf(gameForAction)
                let takenGame = game.splice(gameForUpdate, 1).toString()
                game.push(takenGame)


            }
        } else if (actionForGame === `Expansion`) {


            let checkGame = gameForAction.split(`-`)
            let gameOne = checkGame[0]
            let expansion = checkGame[1]
            if (game.includes(gameOne)) {

                let indexGame = game.indexOf(gameOne)
                game.splice(indexGame + 1, 0, `${gameOne}:${expansion}`)



            }
        }

        command = gamesAsArray[index]
        index++
    }

    console.log(game.join(` `));



}


solve(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']


)