function tradeCommisions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let totalSales = 0;

    if (sales < 0) {
        console.log('error');
        return;
    }

    switch (town) {
        case "Sofia":
            if (sales <= 500) {
                totalSales = 0.05;
            } else if (sales <= 1000) {
                totalSales = 0.07;
            } else if (sales <= 10000) {
                totalSales = 0.08;
            } else {
                totalSales = 0.12;
            }
            break;
        case "Varna":
            if (sales <= 500) {
                totalSales = 0.045;
            } else if (sales <= 1000) {
                totalSales = 0.075;
            } else if (sales <= 10000) {
                totalSales = 0.10;
            } else {
                totalSales = 0.13;
            }
            break;
        case "Plovdiv":
            if (sales <= 500) {
                totalSales = 0.055;
            } else if (sales <= 1000) {
                totalSales = 0.08;
            } else if (sales <= 10000) {
                totalSales = 0.12;
            } else {
                totalSales = 0.145;
            }
            break;
        default:
            console.log('error');
            return;
    }

    let total = totalSales * sales;
    console.log(total.toFixed(2));
}
tradeCommisions(["Sofia", "1500"])