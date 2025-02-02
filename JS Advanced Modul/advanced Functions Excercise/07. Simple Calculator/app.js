
function calculator() {
    let num1Input, num2Input, resultSelector

    return {
        init(selector1, selector2, resultSelectorSelect) {
            num1Input = document.querySelector(selector1)
            num2Input = document.querySelector(selector2)

            resultSelector = document.querySelector(resultSelectorSelect)

        },
        add() {
            let num1 = Number(num1Input.value);
            let num2 = Number(num2Input.value);
            let result = num1 + num2
            resultSelector.value = result
        },
        subtract() {
            let num1 = Number(num1Input.value);
            let num2 = Number(num2Input.value);
            let result = num1 - num2;
            resultSelector.value = result
        }
    }

}
const calculate = calculator()
calculate.init("#num1", "#num2", "#result");


