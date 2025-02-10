window.addEventListener('load', solve);

function solve() {
    //get the input elements info;

    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const dateElement = document.getElementById('from-date');
    const toDateElement = document.getElementById('to-date');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const statusEL = document.getElementById('status');

    //get the button

    const nextBtn = document.getElementById('next-btn')


    //event lsitener for next
    nextBtn.addEventListener('click', nextFunction);

    function nextFunction(e) {
        e.preventDefault()
        const inputs = [
            firstNameElement.value,
            lastNameElement.value,
            dateElement.value,
            toDateElement.value
        ]

        if (inputs.some((value) => value === '')) {
            return
        }
      
        const startDate = new Date(dateElement.value);
        const endDate = new Date(toDateElement.value)

        if (startDate >= endDate) {
            return
        }


        //create the Unordered list
        const headerName = document.createElement('h3');
        headerName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`

        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `From date: ${dateElement.value}`

        const toDateParagrahp = document.createElement('p');
        toDateParagrahp.textContent = `To date: ${toDateElement.value}`


        // MAYBE ADD FLEX CLASS TO IT

        const articleElement = document.createElement('article');
        articleElement.appendChild(headerName);
        articleElement.appendChild(dateParagraph);
        articleElement.appendChild(toDateParagrahp);

        const liVacantion = document.createElement('li')
        liVacantion.classList.add('vacation-content')

        //create buttons


        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue'

        //appending to the div

        liVacantion.appendChild(articleElement);
        liVacantion.appendChild(editBtn);
        liVacantion.appendChild(continueBtn);

        //apend to the main

        infoList.appendChild(liVacantion)
        nextBtn.disabled = true


        let firstNameInfo = firstNameElement.value
        let secondNameInfo = lastNameElement.value
        let startDateInfo =dateElement.value
        let endDateInfo =toDateElement.value

        firstNameElement.value =''
        lastNameElement.value =''
        dateElement.value = ''
        toDateElement.value = ''

        editBtn.addEventListener('click', edit)
       
        function edit(e){

            firstNameElement.value = firstNameInfo;
            lastNameElement.value = secondNameInfo;
            dateElement.value = startDateInfo
            toDateElement.value = endDateInfo

            liVacantion.remove()
            nextBtn.disabled = false

        }

        continueBtn.addEventListener('click', continueFunction);

        function continueFunction(e){

            let confirmArticle = document.createElement('article')
            confirmArticle = articleElement.cloneNode(true)

            const confirmButton = document.createElement('button');
            confirmButton.classList.add('confirm-btn');
            confirmButton.textContent = 'Confirm';

            const cancelBrn = document.createElement('button');
            cancelBrn.classList.add('cancel-btn');
            cancelBrn.textContent = 'Cancel'

            const confirmListContent = document.createElement('li');
            confirmListContent.classList.add('vacation-content');

            //append to confrimList 
            confirmListContent.appendChild(confirmArticle);
            confirmListContent.appendChild(confirmButton);
            confirmListContent.appendChild(cancelBrn);

            confirmList.appendChild(confirmListContent)

            liVacantion.remove()


            confirmButton.addEventListener('click', verification)
            cancelBrn.addEventListener('click',canceled)
            function verification(e){
                confirmList.remove();
                nextBtn.disabled = false

                statusEL.classList.add('vacation-confirmed');
                statusEL.textContent = 'Vacation Requested'

            }
            function canceled(e){
                confirmList.remove();
                nextBtn.disabled = false

                statusEL.classList.add('vacation-cancelled');
                statusEL.textContent = 'Cancelled Vacation'

            }

            statusEL.addEventListener('click', () => {
                location.reload()
            })
        }
    }

}




