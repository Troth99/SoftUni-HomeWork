function listOfnames(input) {

    let sortedNames = input.sort((a, b) => a.localeCompare(b));

    for (let i = 1; i <= sortedNames.length; i++) {
        console.log(`${i}.${sortedNames[i - 1]}`);

    }
}

listOfnames(["John", "Bob", "Christina", "Ema"])