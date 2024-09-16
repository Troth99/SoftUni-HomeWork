function barcodeGenerator(input){

let start = input[0]
let end = input[1]

let str = ``

for (let i = Number(start[0]); i<= Number(end[0]); i++){
    for (let k = Number(start[1]); k <= Number(end[1]); k++){
        for (let y = Number(start[2]); y <= Number(end[2]); y++){
            for (let b = Number(start[3]); b <= Number(end[3]); b++){

                if (i % 2 !==0 && k % 2 !== 0 && y % 2 !== 0 && b % 2 !== 0){

                    str += `${i}${k}${y}${b} `
                    
                    
                }
            }
        }
    }
   
    
}

console.log(str);

}
barcodeGenerator(["3256",
    "6579"])
    
    


