function game(input){

    let index = 0;
    let moves = Number(input[index]);
    index++

    let startPoints = 0;

    let from0to9 = 0;
    let from10to19 = 0;
    let from20to29 = 0;
    let from30to39 = 0;
    let from40to50 = 0;
    let invalidNumber = 0;

    for (let game = 0; game <moves; game++){

        let currentNum = Number(input[index])
        index++

        if (currentNum >= 0 && currentNum <=9){
            startPoints += currentNum *0.20;
            from0to9++
        }else if (currentNum >= 10 && currentNum <=19){
            startPoints += currentNum * 0.30
            from10to19++
        }else if (currentNum >= 20 && currentNum <= 29){
            startPoints += currentNum * 0.40;
            from20to29++
        }else if (currentNum >= 30 && currentNum <= 39){
            startPoints += 50;
            from30to39++
        }else if (currentNum >= 40 && currentNum <= 50){
            startPoints +=100
            from40to50++
        }else {
            startPoints /=2;
            invalidNumber++
        }

    }

    let percentage0to9 = from0to9 / moves * 100
    let percentage10to19 = from10to19 / moves * 100
    let percentage20to29 = from20to29 / moves *100
    let percentage30to39 = from30to39 / moves *100
    let percentage40to50 = from40to50 / moves *100
    let invalidNumbersPer = invalidNumber / moves *100

    console.log(startPoints.toFixed(2))
    console.log(`From 0 to 9: ${percentage0to9.toFixed(2)}%`)
    console.log(`From 10 to 19: ${percentage10to19.toFixed(2)}%`)
    console.log(`From 20 to 29: ${percentage20to29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentage30to39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentage40to50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumbersPer.toFixed(2)}%`);

    




}

game([`10`,` 43`,` 57` ,` -12` ,` 23` ,` 12`,`0`,`50`,` 40`,` 30`,` 20`])
