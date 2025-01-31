
function attachEventsListeners() {
    const button = document.getElementById('convert');
    button.addEventListener('click', converting)
    const inputText = document.getElementById('inputDistance')

    function calculate(inputVal, selectedOption, selectedOutputOption) {
        let calcMeter = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254,

        }
        let metters = inputVal * calcMeter[selectedOption];
        let result = metters / calcMeter[selectedOutputOption]


        return result
    }
    function converting() {
        const input = document.querySelectorAll('#inputUnits');
        const output = document.querySelectorAll('#outputUnits');
        const selectedOption = input[0].value
        const selectedOutputOption = output[0].value;
        let inputVal = inputText.value
        const calculatedDistance = calculate(inputVal, selectedOption, selectedOutputOption)

        const outPutText = document.getElementById('outputDistance')
        outPutText.value = calculatedDistance


    }
}