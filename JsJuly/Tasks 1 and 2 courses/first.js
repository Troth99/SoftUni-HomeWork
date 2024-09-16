function hello(input) {

    let dogs = Number(input[0]);
    let cats = Number(input[1]);
    let dogsTotal = dogs * 2.50;
    let catsTotal = cats *4;
    let finalResult = dogsTotal + catsTotal;

    console.log(`${finalResult} lv.`);


}
hello(["5","4"]);