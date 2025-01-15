function cityRecord(name, population, treasury){
population = Number(population);
treasury = Number(treasury);


let cityInfo = {
    name: name,
    population : population,
    treasury: treasury
}

return cityInfo

}

console.log(cityRecord('Tortuga',
7000,
15000
));