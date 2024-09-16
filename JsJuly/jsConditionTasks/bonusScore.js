function bonusScore(input){

    let bonusScore = Number(input[0]);
    let bonus = 0.0;

    if (bonusScore <= 100){
        bonus = 5;
    } else if ((bonusScore >100) && (bonusScore <=1000)){
        bonus = bonusScore *0.20;
    } else {
        bonus = bonusScore  *0.10;
    }
    if(bonusScore % 2===0) {
        bonus += 1;
    } else if (bonusScore% 10 ==5){
        bonus +=2;
    }
    console.log(bonus);
    console.log(bonusScore+bonus)

}

bonusScore(["175"])