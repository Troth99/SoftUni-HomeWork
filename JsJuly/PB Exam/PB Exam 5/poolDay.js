function pool (input){
    let index = 0
    let peopleNum = Number(input[index++])
    let taxEntry = Number(input[index++]);
    let shezlongPerOne = Number(input[index++]);
    let umbrella = Number(input[index++]);


    let entryTax = peopleNum * taxEntry

    let percentPeople = Math.ceil(peopleNum - peopleNum * 0.25)

    let shezlongsPrice = (percentPeople * shezlongPerOne)

    let percentUmbrella = Math.ceil(peopleNum - peopleNum * 0.50)

    let umbrellaPrice = (percentUmbrella * umbrella)

    let total = entryTax + shezlongsPrice + umbrellaPrice

    console.log(`${total.toFixed(2)} lv.`)
    




}
pool(["21",
    "5.50",
    "4.40",
    "6.20"])
    