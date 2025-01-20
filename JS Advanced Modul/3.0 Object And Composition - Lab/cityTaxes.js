function cityTaxes(name, population, treasury) {
    population = Number(population);
    treasury = Number(treasury);

    const cityInfo = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor((this.population * percentage) / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor((this.treasury * percentage) / 100);
        }
    };

    return cityInfo;


}



// const city = result('Sofia', 2000000, 1000000);

// const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

