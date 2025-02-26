function attachEvents() {


    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const textArea = document.getElementById('messages');

    const inputNameEl = document.querySelector('input[name="author"]');
    const contentEl = document.querySelector('input[name="content"]');

    sendBtn.addEventListener('click', handleHandMsg)

    const url = 'http://localhost:3030/jsonstore/messenger'

    function handleHandMsg(e) {

        const author = inputNameEl.value;
        const content = contentEl.value;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, content })
        })
            .then(function (response) {
                return response.json()

            })
            .then(function (data) {
                console.log(data)
            }).catch((err) => [
                console.log(`Error: ${err}`)
            ])

    }


    refreshBtn.addEventListener('click', refreshing)

    function refreshing(e) {

        fetch(url)
        .then((response) => {
            return response.json()
        }).then((data) => {
            const messages = Object.values(data)
            let msgStrings = [];

            for (const element of messages) {
               let auhtor = element.author
               let content = element.content
               msgStrings.push(`${auhtor}: ${content}`)
                
            }

textArea.textContent = msgStrings.join('\n')
        }).catch((err) => {
            console.log(err)
        })

    }

}

attachEvents();