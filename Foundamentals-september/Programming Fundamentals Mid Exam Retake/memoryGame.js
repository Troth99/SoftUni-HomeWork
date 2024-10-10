function memoryGame(sequenceElement) {
    
    let sequence = sequenceElement.shift().split(' '); 
    let commands = sequenceElement; 
    let moves = 0;

    for (let index = 0; index < commands.length; index++) {
        let currentCommand = commands[index];

        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        if (currentCommand === 'end') {
            if (sequence.length > 0) {
                console.log(`Sorry you lose :(`);
                console.log(sequence.join(' '));
            }
            break;
        }

        let [firstIndex, secondIndex] = currentCommand.split(' ').map(Number);
        
        if (firstIndex < 0 || secondIndex < 0 || firstIndex >= sequence.length || secondIndex >= sequence.length || firstIndex === secondIndex) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let middleIndex = Math.floor(sequence.length / 2);
            let elementToAdd = `-${++moves}a`;
            sequence.splice(middleIndex, 0, elementToAdd, elementToAdd);
            continue;
        }

        moves++;

        if (sequence[firstIndex] === sequence[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);
          
            if (firstIndex > secondIndex) {
                sequence.splice(firstIndex, 1);
                sequence.splice(secondIndex, 1);
            } else {
                sequence.splice(secondIndex, 1);
                sequence.splice(firstIndex, 1);
            }
        } else {
            console.log(`Try again!`);
        }
    }
}











memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    
    )
