function towns (arr){

class Towns {
    constructor(townName, latitude, longtitude){
        this.town = townName
        this.latitude = latitude
        this.longtitude = longtitude
    }

    print (){
        console.log(`{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longtitude}' }`);
        
    }
}

for (let command of arr){
    let cmdInfo = command.split(` | `)
    let name = cmdInfo[0]
    let latitude = Number(cmdInfo[1]).toFixed(2)
    let longtitude = Number(cmdInfo[2]).toFixed(2)

    let towns = new Towns(name, latitude, longtitude)
    towns.print()  
  
    
}



}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )