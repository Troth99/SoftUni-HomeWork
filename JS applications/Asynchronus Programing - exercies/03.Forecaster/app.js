function attachEvents() {

    const weatherUrl = 'http://localhost:3030/jsonstore/forecaster/locations'
    const currentConditionUrl = 'http://localhost:3030/jsonstore/forecaster/today/'
    const for3DaysCondition = 'http://localhost:3030/jsonstore/forecaster/upcoming/'


    const weatherBtn = document.getElementById('submit');
    const inputEl = document.getElementById('location');

    const divEl = document.getElementById('forecast');

    weatherBtn.addEventListener('click', weatherFunc)


    const weatherHTML = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    async function weatherFunc(e) {
        const currentWeatherDiv = document.getElementById('current');
        const upcommingWeatherDiv = document.getElementById('upcoming');
        const input = inputEl.value;
        let currentCode = ''
        try {
            const response = await fetch(weatherUrl);
            const weatherData = await response.json()

            let foundWeather = weatherData.filter(weather => weather.name === input)
            if(!foundWeather){
                return
            }
            currentCode = foundWeather[0].code

            const currentConditionResponse = await fetch(currentConditionUrl + currentCode);
            const currentConditionData = await currentConditionResponse.json()

            const for3DaysResponse = await fetch(for3DaysCondition + currentCode);
            const for3DaysData = await for3DaysResponse.json()

            divEl.style.display = 'block'

            const currentConditionEntries = Object.entries(currentConditionData)
            const currentCondtion = currentConditionEntries[0][1].condition
            const weatherCode = weatherHTML[currentCondtion];

            const ThreedaysConditionEntries = Object.entries(for3DaysData)
            const firstCode = weatherHTML[ThreedaysConditionEntries[0][1][0].condition]
            const secondCode = weatherHTML[ThreedaysConditionEntries[0][1][1].condition]
            const thirdCode = weatherHTML[ThreedaysConditionEntries[0][1][2].condition]
            console.log(ThreedaysConditionEntries)
            console.log(ThreedaysConditionEntries[0][1][0].condition)

            currentWeatherDiv.innerHTML = `
                <div class="label">Current conditions</div>
                <div class = "forecasts">
                <span class = "condition symbol">${weatherCode}</span>
                <span class = "condition">
                    <span class = "forecast-data">${currentConditionEntries[1][1]}</span>
                    <span class = "forecast-data">${currentConditionEntries[0][1].low}${weatherHTML.Degrees}/${currentConditionEntries[0][1].high}${weatherHTML.Degrees}</span>
                    <span class = "forecast-data">${currentConditionEntries[0][1].condition}</span>
                </span>
                </div>
            `

            upcommingWeatherDiv.innerHTML = `
             <div class="label">Three-day forecast</div>
                <div class = "forecast-info">
                <span class= "upcoming">
                    <span class = "symbol">${firstCode}</span>
                    <span class = "forecast-data">${ThreedaysConditionEntries[0][1][0].low}${weatherHTML.Degrees}/${ThreedaysConditionEntries[0][1][0].high}${weatherHTML.Degrees}</span>
                    <span class = "forecast-data">${ThreedaysConditionEntries[0][1][0].condition}</span>
                </span>
                <span class= "upcoming">
                    <span class = "symbol">${secondCode}</span>
                    <span class = "forecast-data">${ThreedaysConditionEntries[0][1][1].low}${weatherHTML.Degrees}/${ThreedaysConditionEntries[0][1][1].high}${weatherHTML.Degrees}</span>
                    <span class = "forecast-data">${ThreedaysConditionEntries[0][1][1].condition}</span>
                </span>
                 <span class= "upcoming">
                    <span class = "symbol">${thirdCode}</span>
                     <span class = "forecast-data">${ThreedaysConditionEntries[0][1][2].low}${weatherHTML.Degrees}/${ThreedaysConditionEntries[0][1][2].high}${weatherHTML.Degrees}</span>
                    <span class = "forecast-data">${ThreedaysConditionEntries[0][1][2].condition}</span>
                </span>
            </div>
            `
        } catch (error) {
            console.log('Error')
        }

    }
}

attachEvents();