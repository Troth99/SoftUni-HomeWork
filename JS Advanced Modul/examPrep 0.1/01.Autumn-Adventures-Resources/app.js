window.addEventListener('load', solve);
function solve() {
    const addBtn = document.getElementById('add-btn');
    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const placeInput = document.getElementById('place');
    const eventInput = document.getElementById('event-name');
    const emailInput = document.getElementById('email');
    const lastCheck = document.getElementById('check-list')
    const upcomingLi = document.getElementById('upcoming-list')
    const finishedList = document.getElementById('finished-list')
    const clearBtn = document.getElementById('clear')

    addBtn.addEventListener('click', addElement);

    function addElement(e) {
        const inputEL = [
            timeInput,
            dateInput,
            placeInput,
            eventInput,
            emailInput,
        ]

        if (inputEL.some(val => val.value === '')) {
            return
        }
        const previewElement = createElements(timeInput.value,
            dateInput.value,
            placeInput.value,
            eventInput.value,
            emailInput.value
        )


        lastCheck.appendChild(previewElement);
        //disable the button
        addBtn.setAttribute('disabled', 'disabled');

        //clear input
        inputEL.forEach(element => element.value = '')




    }
    function createElements(hours, date, place, event, contact) {

        const dateAndTime = document.createElement('p');
        dateAndTime.textContent = `Begins: ${date} at: ${hours}`;

        const placeP = document.createElement('p');
        placeP.textContent = `In: ${place}`;

        const eventP = document.createElement('p');
        eventP.textContent = `Event: ${event}`

        const contactP = document.createElement('p');
        contactP.textContent = `Contact: ${contact}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(dateAndTime);
        articleElement.appendChild(placeP);
        articleElement.appendChild(eventP);
        articleElement.appendChild(contactP);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue'

        const liElement = document.createElement('li');
        liElement.classList.add('event-content');

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn)

        //add event listeners
        editBtn.addEventListener('click', (e) => {
            //load information to inputfields;
            timeInput.value = hours
            dateInput.value = date
            placeInput.value = place
            eventInput.value = event
            emailInput.value = contact

            e.currentTarget.parentElement.remove()
            addBtn.removeAttribute('disabled')
            //remove it from the second field;

        })

        continueBtn.addEventListener('click', (e) => {
            //createElements for colelctions
            const updateDate = document.createElement('p');
            updateDate.textContent = `Begins: ${date} at: ${hours}`;

            const updatePlace = document.createElement('p');
            updatePlace.textContent = `In: ${place}`;

            const updateEvent = document.createElement('p');
            updateEvent.textContent = `Event: ${event}`

            const updateContact = document.createElement('p');
            updateContact.textContent = `Contact: ${contact}`;

            const updateArticle = document.createElement('article');
            updateArticle.appendChild(updateDate);
            updateArticle.appendChild(updatePlace);
            updateArticle.appendChild(updateEvent);
            updateArticle.appendChild(updateContact);

            const finishedBtn = document.createElement('button');
            finishedBtn.classList.add('finished-btn');
            finishedBtn.textContent = 'Move to Finished'

            const updatedLi = document.createElement('li');
            updatedLi.classList.add('event-content');

            updatedLi.appendChild(updateArticle);
            updatedLi.appendChild(finishedBtn)
            //remove preview from preview list

            upcomingLi.appendChild(updatedLi)
            e.currentTarget.parentElement.remove()
            addBtn.removeAttribute('disabled')

            finishedBtn.addEventListener('click', (e) => {
                const finishDate = document.createElement('p');
                finishDate.textContent = `Begins: ${date} at: ${hours}`;

                const finalPlace = document.createElement('p');
                finalPlace.textContent = `In: ${place}`;

                const finalEvent = document.createElement('p');
                finalEvent.textContent = `Event: ${event}`

                const finalContact = document.createElement('p');
                finalContact.textContent = `Contact: ${contact}`;

                const finalArticle = document.createElement('article');
                finalArticle.appendChild(finishDate);
                finalArticle.appendChild(finalPlace);
                finalArticle.appendChild(finalEvent);
                finalArticle.appendChild(finalContact);
                const finalLi = document.createElement('li');
                finalLi.classList.add('event-content')

                finalLi.appendChild(finalArticle)
                finishedList.appendChild(finalLi)
                e.currentTarget.parentElement.remove()
                

            })
        })
        return liElement
    }

    clearBtn.addEventListener('click', () => {
        while (finishedList.firstChild) {
            finishedList.removeChild(finishedList.firstChild)
        }
    })

}




