function getInfo() {
    const stopId = document.getElementById('stopId').value
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
    const name = document.getElementById('stopName');
    const busesDiv = document.getElementById('buses')

    fetch(url)
    .then(function(response){
        return response.json()
    }).then(function(busesInfo){
        busesDiv.innerHTML = ''
        name.textContent = busesInfo.name
        const busesOjb = busesInfo.buses
        let busesEntries = Object.entries(busesOjb)
        console.log(busesEntries)

        busesEntries.forEach((buss) => {
            const liEL = document.createElement('li')
            liEL.textContent = `Bus ${buss[0]} arrives in ${buss[1]} minutes`
            busesDiv.appendChild(liEL)
        })
    }).catch((err) => {
        busesDiv.innerHTML = ''
        name.textContent = 'Error'
    })
}