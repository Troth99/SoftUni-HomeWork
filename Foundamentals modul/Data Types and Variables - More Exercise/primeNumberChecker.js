function solve(number){

let isdivisible = true

for (let i = 2; i< number; i++){
    if(number % i === 0){
        isdivisible = false
    }
}

console.log(isdivisible);

}


solve(8)