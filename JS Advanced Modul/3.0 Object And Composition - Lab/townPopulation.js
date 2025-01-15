function townPopulation(input){

let townPopulation = {};

for (const element of input) {
    let [town, population] = element.split(` <-> `)
    population = Number(population);

    if (town in townPopulation){
        townPopulation[town] += population;
    }else {
        townPopulation[town] = population;
    }
 
}

for (const town in townPopulation) {
    console.log(`${town} : ${townPopulation[town]}`);
    
}
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
    
    )