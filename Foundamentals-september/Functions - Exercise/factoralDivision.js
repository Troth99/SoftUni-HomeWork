function facDiv(num1, num2) {

    function resultOne(n1) {

        let resFirst = 1
        for (let i = n1; i > 0; i--) {

            resFirst *= i

        }

        return resFirst
    }

    function resultTwo(n2) {


        let resSecond = 1

        for (let i = n2; i > 0; i--) {

            resSecond *= i

        }

        return resSecond
    }




    let resultAsOne = resultOne(num1)
    let resultAsTwo = resultTwo(num2)

    let division = resultAsOne / resultAsTwo;

    console.log(division.toFixed(2));


}


facDiv(6, 2)