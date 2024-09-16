function oscars(input){

    let index = 0;
    let actorName = input[index];
    index++
    let academyPoints = Number(input[index]);
    index++
    let judge = Number(input[index]);
    index++

    for (let i = 0; i < judge; i++){

        let currentActorName = input[index];
        index++
        let currentPoints = Number(input[index])
        index++

        academyPoints += currentActorName.length * currentPoints / 2

        if(academyPoints > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }

  }
  if (academyPoints <= 1250.5){
    console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`)
  }



}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
    