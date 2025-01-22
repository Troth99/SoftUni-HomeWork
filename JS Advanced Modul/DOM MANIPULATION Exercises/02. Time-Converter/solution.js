function attachEventsListeners() {
    //function to check the value of the input and the tokenType where we changed to get the first element
    //of the token etc..
    function convert(value, tokenType) {
        let days
        if (tokenType === 'days') {
            days = value;
        } else if (tokenType === `hours`) {
            days = value / 24;
        } else if (tokenType === 'minutes') {
            days = value / 1440;
        } else if (tokenType === 'seconds') {
            days = value / 86400
        }
        //returns object with the data where we make number absolute and multiply it 
        //by days with paratemets
        return {
            days: days,
            hours: Math.abs(days * 24),
            minutes: Math.abs(days * 1440),
            seconds: Math.abs(days * 86400)
        }
    }

    //get all input text areas
    const input = document.querySelectorAll('input[type=text]')
    //get all buttons by the type
    const buttonEl = document.querySelectorAll('input[type=button]');

    buttonEl.forEach(button => {
        button.addEventListener('click', () => {
            debugger
            //get the first element of the button with the split

            const tokenType = button.id.split('Btn')[0];
            //get the value of the unit text area
            const inputValue = Number(document.getElementById(tokenType).value)

            if (isNaN(inputValue)) return;

            const totalValue = convert(inputValue, tokenType);
            //forEach for every input to return the calucated value from the function
            input.forEach(input => {
                input.value = totalValue[input.id]
            })

        })
    })
}