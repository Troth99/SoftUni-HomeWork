function pwGenerator(arr){

let volews = [`a`,`e`,`i`,`o`,`u`]

let concatenatedWord = arr[0].concat(arr[1])

let word = arr.pop()
let counter = 0
for (let letter of concatenatedWord){

   
    if (counter >= word.length){
        counter = 0
    }
    if (volews.includes(letter)){
        concatenatedWord = concatenatedWord.replace(letter, word[counter].toUpperCase())
        counter++

    }
    
   
    
}

let reversedPw = concatenatedWord.split(``).reverse().join(``)
console.log(`Your generated password is ${reversedPw}`);

}

pwGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )