function solve(char1, char2, char3){


let firstDigit = char1.charCodeAt()
let secondDigit = char2.charCodeAt()
let thirdDigit = char3.charCodeAt()
let concatenateSMassive = char1 + char2 + char3

let reverse = concatenateSMassive.split(``).reverse(``).join(``)

console.log(reverse)
console.log(`${thirdDigit} ${secondDigit} ${firstDigit}`);


}


solve('1',
`5`,
'p'
)