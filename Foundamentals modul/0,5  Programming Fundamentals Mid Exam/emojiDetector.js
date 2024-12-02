function emojiDetector(arr){
let inputString = arr.toString();
let threeshold = 1;
let pattern = /(::|\*\*)(?<animal>[A-Z][a-z]{2,})\1/g
let patternDigits = /[\d]+/g

let matchedDigits = inputString.match(patternDigits).map(n => n.trim());
if (matchedDigits){
   let stringOfDigits =  matchedDigits.toString().split(`,`).join(``)
    for (const digit of stringOfDigits) {
        let currentDigit = +digit
         threeshold *= currentDigit
    }
}

let matchesAnimas = pattern.exec(inputString);
let allAnimals = []
let storedAnimals = [];
while (matchesAnimas !== null){
    let asciiSum = 0;
    let animal = matchesAnimas.groups.animal;
    
    for (let char of animal){
        let code = char.charCodeAt();    
        asciiSum += code;
    };
    if (asciiSum > threeshold){
        storedAnimals.push(matchesAnimas[0])
    }
    allAnimals.push(animal)
    matchesAnimas = pattern.exec(inputString);
}

console.log(`Cool threshold: ${threeshold}`);
console.log(`${allAnimals.length} emojis found in the text. The cool ones are:`);

for (let animal of storedAnimals){
    console.log(animal);
    
};


};

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])