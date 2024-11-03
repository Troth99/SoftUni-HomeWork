function cardGame(arr){


let players = {}
let cardPowers = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
    'J': 11, 'Q': 12, 'K': 13, 'A': 14
}
let  cardTypes = {
 
        'S': 4, 'H': 3, 'D': 2, 'C': 1
    
}
for (let cardInfo of arr){

    let [name, card] = cardInfo.split(`: `)
    let cardList = card.split(`, `)

    if (!players[name]){
        players[name] = new Set()
    }

    for (let j = 0; j < cardList.length; j++){
        players[name].add(cardList[j])
    }
}

let result = {}

for (let name in players){
    let cards = players[name]
    let totalValue = 0

    for (let card of cards){
        let power = card.slice(0, -1)
        let type = card.slice(-1)

        let cardValue = cardPowers[power] * cardTypes[type]
        totalValue +=cardValue
    }

    result[name] = totalValue
}

for (let name in result){
    console.log(`${name}: ${result[name]}`);
    
}

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )