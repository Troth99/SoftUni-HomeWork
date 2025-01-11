function addAndRemove(input) {

    const numbers = [];
    let initialNumber = 1
    for (let i = 0; i < input.length; i++) {

        let command = input[i].toLowerCase()
        if (command === 'add') {
            numbers.push(initialNumber);
            initialNumber++
        } else if (command === `remove`) {
            let index = numbers.indexOf(initialNumber - 1)
            numbers.splice(index, 1)
            initialNumber++
        };
    }

    if (numbers.length > 0) {
       for (const number of numbers) {
         console.log(number);
       }
    } else {
        console.log(`Empty`);

    }

}


addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']
)