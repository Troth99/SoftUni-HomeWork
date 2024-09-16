function calculateDate(input){

    let depositSum = Number(input[0]);
    let term = Number(input[1]);
    let annualInterestRate = Number(input[2]) /100;

    let sum = depositSum + term * ((depositSum * annualInterestRate) / 12);
    console.log(sum);

}


/*От конзолата се четат 3 реда:
1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]
*/

calculateDate(["200 ", "3 ", "5.7 "])