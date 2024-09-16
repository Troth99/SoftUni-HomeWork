function histogram(input){

    let num1 = Number(input[0]);
    let number;
    let p1 = 0;
    let p2= 0;
    let p3= 0;
    let p4 = 0;
    let p5 = 0;

   let counter1 = 0;
   let counter2 = 0;
   let counter3 = 0;
   let counter4 = 0;
   let counter5 = 0;

    for (let index = 1; index <= num1; index++){
        number = Number(input[index]);
        if (number <200){
            counter1 +=1;
            p1 = (counter1 / num1)*100;
        }else if (number >= 200 && number <= 399){
            counter2 +=1;
            p2 = (counter2 / num1) * 100
        }else if (number >= 400 && number <= 599){
            counter3 +=1;
            p3 = (counter3 / num1) * 100
        }else if (number >= 600 && number <= 799){
            counter4 +=1;
            p4 = (counter4 / num1) * 100
        }else if (number >= 800){
            counter5 +=1;
            p5 = (counter5 / num1) * 100
        }
    }
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);


}

//histogram(['3', "1" , "2" , "999"])



histogram(["14",
    "53",
    "7",
    "56",
    "180",
    "450",
    "920",
    "12",
    "7",
    "150",
    "250",
    "680",
    "2",
    "600",
    "200"])

