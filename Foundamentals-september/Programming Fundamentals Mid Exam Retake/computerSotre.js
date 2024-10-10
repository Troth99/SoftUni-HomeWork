function computerSotre(commands) {

    let index = 0

    let totalPriceWihtoutTax = 0
    let finalPrice = 0
    let taxes = 0
    let command = commands[index]
    while (index < commands.length) {


        command = commands[index++]

        if (command === `special`) {

            if (totalPriceWihtoutTax === 0) {
                console.log(`Invalid order!`);
                break;

            }

            finalPrice = finalPrice - finalPrice * 0.1

            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${totalPriceWihtoutTax.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${finalPrice.toFixed(2)}$`);


            break;
        }

        if (command === `regular`) {

            if (totalPriceWihtoutTax === 0) {
                console.log(`Invalid order!`);
                break;

            }

            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${totalPriceWihtoutTax.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${finalPrice.toFixed(2)}$`);
            break;
        }

        let price = Number(command)

        if (price < 0) {
            console.log(`Invalid price!`);

        } else {

            taxes += price * 0.2
            totalPriceWihtoutTax += price

            finalPrice = taxes + totalPriceWihtoutTax
        }









    }


}

/*computerSotre(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
)*/

/*computerSotre([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])*/

    computerSotre([`regular`])
