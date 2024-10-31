function wordsTracker(arr){

let lookingForWords = arr.shift().split(` `)

let occurenced = new Map()

for (let occuration of lookingForWords){
    occurenced.set(occuration, 0)
}

for (let word of arr){

    if (occurenced.has(word)){
        let value = occurenced.get(word)
        let newValue = value += 1
        occurenced.set(word, newValue)
    }

}

let sortedWords = Array.from(occurenced).sort((a, b) => b[1] - a[1])

for (let occurations of sortedWords){

    console.log(`${occurations[0]} - ${occurations[1]}`);
    
}

}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    )