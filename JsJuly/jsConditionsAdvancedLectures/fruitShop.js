function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let finalPrice = 0;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if (fruit === 'banana') {
                finalPrice = quantity * 2.50;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'apple') {
                finalPrice = quantity * 1.20;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'orange') {
                finalPrice = quantity * 0.85;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'grapefruit') {
                finalPrice = quantity * 1.45;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'kiwi') {
                finalPrice = quantity * 2.70;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'pineapple') {
                finalPrice = quantity * 5.50;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'grapes') {
                finalPrice = quantity * 3.85;
                console.log(finalPrice.toFixed(2))
            } else {
                console.log('error')
            };

            break;
        case 'Saturday':
        case 'Sunday':
            if (fruit === 'banana') {
                finalPrice = quantity * 2.70;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'apple') {
                finalPrice = quantity * 1.25;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'orange') {
                finalPrice = quantity * 0.90;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'grapefruit') {
                finalPrice = quantity * 1.60;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'kiwi') {
                finalPrice = quantity * 3.00;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'pineapple') {
                finalPrice = quantity * 5.60;
                console.log(finalPrice.toFixed(2))
            } else if (fruit === 'grapes') {
                finalPrice = quantity * 4.20;
                console.log(finalPrice.toFixed(2))
            } else {
                console.log('error')
            }

            break;
        default: console.log('error'); break;

    }
}

fruitShop(["apple", "Tuesday", "2"])