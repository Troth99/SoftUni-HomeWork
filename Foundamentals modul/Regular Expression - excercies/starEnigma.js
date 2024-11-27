function starEnigma(arr){

    let numberOfMsg = Number(arr.shift());
    let encryptedMsg = [];

    let patternForEncrypt = /[star]/gi;

for (let i = 0; i < numberOfMsg; i++){

    let matches = arr[i].match(patternForEncrypt);
    let matchesLenght = matches ? matches.length : 0;
    let msg = ``
    for (let letter of arr[i]){

        let code = letter.charCodeAt();
        let result = code - matchesLenght;
        let charFromRes = String.fromCharCode(result);
        msg += charFromRes;
        
        
    }  
    encryptedMsg.push(msg);
}

let patternPlanet = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<action>[AD])![^@\-!:>]*->\d+/

let planetsAttacked = []
let planetsDestroyed = []

for (let planet of encryptedMsg){

    let matches = patternPlanet.exec(planet)

    if (matches){
        let namePlanet = matches.groups.name
        
        let action = matches.groups.action

        if (action === `A`){
            planetsAttacked.push(matches);
        }else if (action ===`D`){
            planetsDestroyed.push(matches);
        }
      
    };
};

let sortedPlanetsA = planetsAttacked.sort((a,b) => a[1].localeCompare(b[1]));
let sortedPlanetsD = planetsDestroyed.sort((a,b) => a[1].localeCompare(b[1]));

console.log(`Attacked planets: ${sortedPlanetsA.length}`);
for (const planet of sortedPlanetsA) {
console.log(`-> ${planet[1]}`);

}

console.log(`Destroyed planets: ${sortedPlanetsD.length}`);

for (const destoyedPlanet of sortedPlanetsD) {
    console.log(`-> ${destoyedPlanet[1]}`);
    
}




}
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
    
    )