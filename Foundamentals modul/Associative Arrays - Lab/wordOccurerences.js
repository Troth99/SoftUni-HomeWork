function wordOccurences(arr) {

    let wordOccuration = new Map()

    for (let word of arr) {


        if (wordOccuration.has(word)) {
            let occuration = wordOccuration.get(word) + 1
            wordOccuration.set(word, occuration)


        } else {
            wordOccuration.set(word, 1)

        }
    }

let sorted = Array.from(wordOccuration).sort((firstElement, secondElement) => secondElement[1] - firstElement[1])

for (let [word, occuration] of sorted){

    console.log(`${word} -> ${occuration} times`);
    
}
}



wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])