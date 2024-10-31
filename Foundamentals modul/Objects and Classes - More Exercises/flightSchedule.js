function flight(arr) {

    let allFLights = arr[[0]]
    let newlyChangedStatus = arr[[1]]
    let flightStatus = arr[[2]]


    let flights = {}
    let flightsIn = []

    for (let flight of allFLights) {

        let cmdInfo = flight.split(` `)
        let sector = cmdInfo[0]
        let destination = cmdInfo.slice(1).join(` `)

        flights = {
            Sector: sector,
            Destination: destination,
        }

        flightsIn.push(flights)

    }

    let canceledFlights = {}
    let canceledArr = []
    let outPutFlights = {}



    for (let status of newlyChangedStatus) {

        let cmd = status.split(` `)
        let sectorToCheck = cmd[0]
        let isItCancel = cmd[1]

        for (let i = 0; i < flightsIn.length; i++) {

            let flight = flightsIn[i]
            let sector = flight.Sector


            if (sector === sectorToCheck) {
                let canceled = flightsIn.splice(i, 1)
                let destinationName = flight.Destination
                canceledFlights = {
                    Destination: destinationName,
                    Status: `Cancelled`
                }
                canceledArr.push(canceledFlights)
            }

        }

    }


    let outPutFlightsArr = []
    if (flightStatus[0] === `Ready to fly`) {

        for (let readyToFly of flightsIn) {

            let destiNationName = readyToFly.Destination
            outPutFlights = {
                Destination: destiNationName,
                Status: `Ready to fly`
            }
            outPutFlightsArr.push(outPutFlights)
        }
    }
    let sortedCanceledFly = canceledArr.sort((a, b) => a.Destination.localeCompare(b.Destination))
    if (flightStatus[0] === `Ready to fly`) {
        for (let print of outPutFlightsArr) {

            console.log(print);

        }
    } else {
        for (let printCanel of sortedCanceledFly) {
            console.log(printCanel);

        }
    }
}



flight([["WN269 Delaware","FL2269 Oregon","WN498 Las vegas","WN3145 Ohio","WN612 Alabama","WN4010 New York","WN1173 California","DL2120 Texas","KL5744 Illinois","WN678 Pennsylvania"],["DL2120 Cancelled","WN612 Cancelled","WN1173 Cancelled","SK330 Cancelled"],["Ready to fly"]])