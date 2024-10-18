function manipulator(numbers, arr) {
    function rotateNumbers(numbers, roration) {

        for (let i = 1; i <= roration; i++) {
            let firstElement = numbers.shift()
            numbers.push(firstElement)
            
        }
        return numbers
    }

    for (let i = 0; i < arr.length; i++) {

        let cmdInfo = arr[i].split(` `)

        let command = cmdInfo[0]

        if (command === `add`) {

            let startIndex = +cmdInfo[1]
            let element = +cmdInfo[2]

            numbers.splice(startIndex, 0, element)

        } else if (command === `addMany`) {

            let index = +cmdInfo[1]

            let element = cmdInfo.slice(2).map(Number)

            for (let i = element.length - 1; i >= 0; i--) {

                let currentElement = element[i]

                numbers.splice(index, 0, currentElement)

            }


        } else if (command === `contains`) {

            let element = +cmdInfo[1]

          console.log(numbers.indexOf(element));
          
           
        } else if (command === `remove`) {

            let removeIndex = +cmdInfo[1]
            numbers.splice(removeIndex, 1)
        } else if (command === `shift`) {

            let roration = +cmdInfo[1]

            rotateNumbers(numbers, roration)
        } else if (command === `sumPairs`) {

            let newArr = []
           
            for (let i = 0; i < numbers.length; i+= 2) {

              let firstNum = numbers[i]
              let secondNum = 0

              if (i + 1< numbers.length){
                secondNum = numbers[i +1]
              }

                newArr.push(firstNum + secondNum)

            }
            
            if(numbers.length % 2 !== 0){
                newArr.push(numbers[numbers.length -1])
            }
           
            numbers = newArr

        } else if (command === `print`) {
            console.log(`[ ${numbers.join(`, `)} ]`);
            break;
        }


    }





}

manipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
)

manipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]

)