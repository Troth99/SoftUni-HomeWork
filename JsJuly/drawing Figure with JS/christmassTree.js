function christmassTree(input){

let n = Number(input)
for (let i = 0; i <= n; i++){
    console.log(`${" ".repeat(n - i)}${"*".repeat(i)} | ${'*'.repeat(i)}`)
}



}


christmassTree([`2`])