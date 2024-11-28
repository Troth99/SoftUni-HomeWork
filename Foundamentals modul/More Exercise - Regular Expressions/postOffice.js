function postOffice(input) {
    input = input.toString()
    let [firstPart, secondPart, thirdPart] = input.split('|');
    let regexForFirstPart = /(\$([A-Z])+\$|\#[A-Z]+\#|\%[A-Z]+\%|\*[A-Z]+\*|\&[A-Z]+\&)/g
    let regexForSecondPart = /([7-8][0-9]|90|65|66|67|68|69):([0-1][1-9]|20|10)/g
 
    let capitalLetters = regexForFirstPart.exec(firstPart);

    capitalLetters = capitalLetters[1].split('');

    capitalLetters.shift();
    capitalLetters.pop();
    let lettersAndLengths = secondPart.match(regexForSecondPart);
    let myMap = new Map();
    for (let letter of capitalLetters) {
        myMap.set(letter, 0)
    }
    let unique = [];
    for (let combination of lettersAndLengths) {
        let [letterAsciiCode, length] = combination.split(':');
        letterAsciiCode = String.fromCharCode(letterAsciiCode);
        if (!unique.includes(letterAsciiCode)) {
            unique.push(letterAsciiCode);
        } else {
            continue;
        }
        length = Number(length) + 1;
        if (myMap.has(letterAsciiCode)) {
            myMap.set(letterAsciiCode, length);
        }
    }
    thirdPart = thirdPart.split(' ');
    for (let letter of capitalLetters) {
        for (let word of thirdPart) {
            if (letter === word[0] && word.length === myMap.get(letter)) {
                console.log(word);
            }
        }
    }
}

postOffice(`Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig`)