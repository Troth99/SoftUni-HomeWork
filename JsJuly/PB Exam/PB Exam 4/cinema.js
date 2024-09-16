function cinema(input) {
    let index = 0;
    let capacityStudio = Number(input[index]);
    index++;

    let seats = 0;
    let income = 0;
    const ticketPrice = 5;

    while (index < input.length) {
        let currentInput = input[index];

        if (currentInput === "Movie time!") {
            let totalSeatsLeft = capacityStudio - seats;
            console.log(`There are ${totalSeatsLeft} seats left in the cinema.`);
            console.log(`Cinema income - ${income} lv.`);
            return;
        }

        let currentSeats = Number(currentInput);
        index++;

        if (seats + currentSeats > capacityStudio) {
            console.log("The cinema is full.");
            console.log(`Cinema income - ${income} lv.`);
            return;
        }

        if (currentSeats % 3 === 0) {
            income += ticketPrice * currentSeats - 5;
        } else {
            income += ticketPrice * currentSeats;
        }

        seats += currentSeats;
    }

    if (seats <= capacityStudio) {
        let totalSeatsLeft = capacityStudio - seats;
        console.log(`There are ${totalSeatsLeft} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${income} lv.`);
}

/*cinema(["60",
    "10",
    "6",
    "3",
    "20",
    "15",
    "Movie time!"])*/
cinema(["50",
    "15",
    "15",
    "10",
    "9",
    "9"])
/*cinema(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"])*/
    
    
    