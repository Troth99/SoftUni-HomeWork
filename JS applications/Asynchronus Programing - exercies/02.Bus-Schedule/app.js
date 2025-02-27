function solve() {
    const departBtn = document.getElementById('depart');
    const ariveBnt = document.getElementById('arrive')
    const showEl = document.querySelector('#info span')
    const url = `http://localhost:3030/jsonstore/bus/schedule/`

    const stopId = {
        name: '',
        next: 'depot'
    }
    function depart() {
        fetch(url + stopId.next)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                stopId.name = result.name
                stopId.next = result.next
                showEl.textContent = `Next stop ${stopId.name}`
                departBtn.disabled = true
                ariveBnt.disabled = false

            }).catch((err) => {
                showEl.textContent = 'Error'
                departBtn.disabled = true;
                ariveBnt.disabled = true
            })
    }
    function arrive() {
        ariveBnt.disabled = true;
        showEl.textContent = `Arriving at ${stopId.name}`
        departBtn.disabled = false
    }

    return {
        depart,
        arrive
    };
}

let result = solve();