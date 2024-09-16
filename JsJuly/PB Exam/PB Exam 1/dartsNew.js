function darts(input) {

    let index = 0;
    let namePlayer = input[index++]

    let startingPoints = 301;

    let sucessfulShots = 0;
    let unsucessfulShots = 0;

    let points = 0

    while (index < input.length) {


        let currentIndex = input[index]

        if (currentIndex === 'Retire') {
            console.log(`${namePlayer} retired after ${unsucessfulShots} unsuccessful shots.`);
            break;
        }
        points = 0

        switch (currentIndex) {
            case `Triple`:
                ++index
                currentIndex = Number(input[index])
                points = currentIndex * 3

                break;
            case 'Double':
                ++index
                currentIndex = Number(input[index])
                points = currentIndex * 2

                break;
            case 'Single':
                ++index
                currentIndex = Number(input[index])
                points = currentIndex

                break;
        }



        if (points > startingPoints) {
            unsucessfulShots++
        } else  {
            startingPoints -= points
            sucessfulShots++
        }
        
       
    

    if (startingPoints === 0){
        console.log(`${namePlayer} won the leg with ${sucessfulShots} shots.`);
        break;
    }
    index++
}

}
darts(["Stephen Bunting",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "7",
    "Single",
    "12",
    "Double",
    "1",
    "Single",
    "1"])
    
    
    
/*Michael van Gerwen
Triple
20
Triple
19
Double
10
Single
3
Single
1
Triple
20
Triple
20
Double
20*/