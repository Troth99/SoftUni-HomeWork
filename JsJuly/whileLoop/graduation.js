function graduation(input) {

    let name = input[0];
    let index = 1


    let grade = 0;
    let badGrade = 0
    let currentGrade = 0

    while (index <= 12) {

        currentGrade++
        let currentElement = Number(input[index])

        index++

        if (currentElement < 4) {
            badGrade++
        }
        if (badGrade > 1) {
            console.log(`${name} has been excluded at ${currentGrade -1} grade`);
            break;

        }

        grade += currentElement


    }
    if (badGrade < 2) {
        let averageGrade = grade / 12
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);

    }
}




graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
/*graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])*/

