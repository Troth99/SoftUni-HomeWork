function cinemaTicket(input) {
    let index = 0;

    let totalStudents = 0;
    let totalStandard = 0;
    let totalKids = 0;
    let totalTickets = 0;

    while (index < input.length) {
        let movieName = input[index];

        if (movieName === 'Finish') {
            break;
        }

        index++;
        let places = Number(input[index++]);
        let ticketsCurrent = 0;

        while (index < input.length) {
            let ticketType = input[index];

            if (ticketType === 'End') {
                let sum = (ticketsCurrent * 100) / places;
                console.log(`${movieName} - ${sum.toFixed(2)}% full.`);
                index++;
                break;
            }

            if (ticketType === 'Finish') {
        break;
            }

            switch (ticketType) {
                case 'student':
                    totalStudents++;
                    break;
                case 'standard':
                    totalStandard++;
                    break;
                case 'kid':
                    totalKids++;
                    break;
            }

            totalTickets++;
            ticketsCurrent++;
            index++;

            if (ticketsCurrent === places) {
                let sum = (ticketsCurrent * 100) / places;
                console.log(`${movieName} - ${sum.toFixed(2)}% full.`);
                break;
            }
        }
    }

    let sumPercentageStudents = (totalStudents * 100) / totalTickets;
    let sumStandardPercentage = (totalStandard * 100) / totalTickets;
    let sumTotalKids = (totalKids * 100) / totalTickets;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${sumPercentageStudents.toFixed(2)}% student tickets.`);
    console.log(`${sumStandardPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${sumTotalKids.toFixed(2)}% kids tickets.`);
}






cinemaTicket(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
    
