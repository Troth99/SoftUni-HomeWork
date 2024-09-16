function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;
    let counter = 0;

    while (base > 2) {
        counter++;
        height++;

   
        let stoneArea = (base - 2) * (base - 2);
        let outerLayerPerimeter = (base * 4) - 4; 
        
        stone += stoneArea * increment; 


        if (counter % 5 === 0) {
            lapisLazuli += outerLayerPerimeter * increment;
        } else {
            marble += outerLayerPerimeter * increment;
        }


        base -= 2;
    }

    height++;
    if (base === 2) {
        gold = 4 * increment;
    } else if (base === 1) {
        gold = 1 * increment;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}



solve(12, 1)