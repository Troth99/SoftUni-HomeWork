function numberModification(number) {

    let sumOfAll = 0

    let splittedNumb = number.toString().split(``)

    function findAverage(number) {

        let sum = 0
        for (let i = 0; i < splittedNumb.length; i++) {

            let number = +splittedNumb[i]

            sum += number

        }

        sum = sum / splittedNumb.length

        return sum

    }



    while (averageNum = findAverage(number) < 5) {


        sumOfAll = averageNum
        splittedNumb.push(`9`)

    }


    console.log(splittedNumb.join(``));

}


numberModification(5835)