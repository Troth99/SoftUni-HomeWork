function arrayModifier(arr) {

    let initialArrayValue = arr.shift().split(` `)


    function actionInArray(array) {


        for (let i = 0; i < array.length; i++) {

            let currentElement = array[i]
            let splitFromCurrentElement = currentElement.split(` `)

            if (splitFromCurrentElement[0] === `end`) {
                break;

            }
            if (splitFromCurrentElement[0] === `swap`) {

                let indexOne = +splitFromCurrentElement[1];
                let indexTwo = +splitFromCurrentElement[2]

                let temp = initialArrayValue[indexOne]

                initialArrayValue[indexOne] = initialArrayValue[indexTwo]
                initialArrayValue[indexTwo] = temp
            }
            if (splitFromCurrentElement[0] === `multiply`) {

                let indexOne = +splitFromCurrentElement[1];
                let indexTwo = +splitFromCurrentElement[2]

                let temp = initialArrayValue[indexOne]
                let temp2 = initialArrayValue[indexTwo]
                let sum = +temp * +temp2
                initialArrayValue[indexOne] = sum.toString()
            }

            if (splitFromCurrentElement[0] === `decrease`) {

                let newArr = []

                for (let i = 0; i < initialArrayValue.length; i++) {
                    let currentElement = +initialArrayValue[i]
                    let decrease = currentElement - 1

                    newArr.push(decrease)


                }
                initialArrayValue = newArr
            }

        }

        return initialArrayValue
    }

    let result = actionInArray(arr)

    console.log(result.join(`, `));



}


arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]

)