function easterLunch(input){
    let kozunak = Number(input[0]);
    let eggs = Number(input[1]);
    let kiloKurabii = Number(input[2]);

    kozunakPrice = 3.20;
    eggsPrice = 4.35;
    kurabiiPrice = 5.40;
    eggsPaint = 0.15;

    let kozunakSum = kozunak * kozunakPrice;
    let eggsSum = eggs * eggsPrice;
    let kurabiiSum = kiloKurabii * kurabiiPrice;

    let priceEggsPaint = eggs * 12 * eggsPaint;

    let totalSum = kozunakSum + eggsSum + kurabiiSum + priceEggsPaint;

    console.log(totalSum.toFixed(2));

}

easterLunch(["3", "2" , "3"])