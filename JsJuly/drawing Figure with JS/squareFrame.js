function squareFrame(input){

let n = Number(input)
    console.log(`+ ${"- ".repeat(n-2)}+`)
    for (let i = 1; i <= n- 2; i++){
        console.log(`| ${"- ".repeat(n-2)}|`)
    }
    console.log(`+ ${"- ".repeat(n-2)}+`)
}


squareFrame([`6`])