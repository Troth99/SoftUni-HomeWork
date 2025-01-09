function fruitCaluclation(fruit, grams, KilogramPrice){

let kilograms = grams / 1000
let money = kilograms * KilogramPrice
console.log(`I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);

}

fruitCaluclation('apple', 1563, 2.35)