function vetParking(input){

let index = 0
let days = Number(input[index++])
let hours = Number(input[index++])

let dayTax = 0
let tax = 0
for (let i = 1; i <= days; i++){

    dayTax = 0
    for (let k = 1; k <= hours; k++){

        if (i % 2 !== 0){
            if (k % 2 !== 0){
                tax += 1
                dayTax += 1
            }else if (k % 2 === 0){
                tax += 1.25
                dayTax +=1.25
            }
        }else if (i % 2 === 0){
            if (k % 2 === 0){
                tax += 1
                dayTax += 1
            }else if (k % 2 !== 0){
                tax += 2.50
                dayTax += 2.50
            }
        }
    }
    console.log(`Day: ${i} - ${dayTax.toFixed(2)} leva`);
    
}
console.log(`Total: ${tax.toFixed(2)} leva`);
}


vetParking([`4`, `2`])