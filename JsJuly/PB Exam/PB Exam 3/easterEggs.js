function easterEggs(input){

    let index = 0
    let eggsNumber = Number(input[index]);
    index ++;

    let orange = 0;
    let blue = 0;
    let green = 0
    let red = 0

    for (let i = 0; i <eggsNumber; i++){

        let currentIndex = input[index];
       
        index++

        switch (currentIndex){
            case "red":
                red++
                break;
            case 'blue':
                blue++
                break;
            case "green":
                green++
                break;
            case 'orange':
                orange++
                break;
            
        }

}
let maxEggs = Math.max(red, orange, blue, green);
let maxColor = ""

if (maxEggs === red){
  maxColor = 'red'

}else if (maxEggs ===  orange){
  maxColor = `orange`
}else if (maxEggs === blue){
  maxColor = 'blue'
}else if (maxEggs === green){
  maxColor = `green`
}
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxColor}`);
 
  
}

easterEggs(["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"])
    