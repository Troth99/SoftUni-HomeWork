function multiplicationTable(number){

let str = ``
let result = 0
for (let i = 1; i <= 10; i++){
    result = number * i
    str += `${number} X ${i} = ${result}`
    console.log(str);
    str = ``
}
}

multiplicationTable(5)