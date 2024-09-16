function depositCalculator(input){

    let deposit = Number(input[0]);
    let depositMonth = Number(input[1]);
    let interestPerYearPercentage = Number(input[2]);;
    let totalDeposit = deposit + depositMonth * ((deposit * interestPerYearPercentage/100) / 12);

    console.log(`Общата сума е ${totalDeposit} лв.`)


}   

depositCalculator(["200", "3","5.7"])