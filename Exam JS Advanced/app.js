window.addEventListener('load', solve);

function solve() {


    //getting the value inputs
    const scentEl = document.getElementById('scent-type');
    const budgetEl = document.getElementById('budget');
    const occasionEl = document.getElementById('occasion');
    const brandPreferencesEL = document.getElementById('brand');
    const skinTypeEl = document.getElementById('skin-type')

    const nextBtn = document.getElementById('next-btn')

    const preferenceEl = document.querySelector('.preference-list');
    const thanksEl = document.getElementById('thanks-text');

    const confirmEL = document.querySelector('.confirm-list')

    nextBtn.addEventListener('click', nextFunction)

    function nextFunction(e) {
        e.preventDefault()
        thanksEl.textContent = '';

        const inputs = [
            scentEl.value,
            budgetEl.value,
            occasionEl.value,
            brandPreferencesEL.value,
            skinTypeEl.value
        ]

        if (inputs.some(input => input === '')) {
            return
        }
        if(Number(budgetEl.value < 0)){
            return
        }


        //creating paragrahps
        const scentParagraph = document.createElement('p');
        scentParagraph.textContent = `Scent Type: ${scentEl.value}`;
        const budgetParagraph = document.createElement('p');
        budgetParagraph.textContent = `Budget: ${budgetEl.value} $`;
        const occasionParagrahp = document.createElement('p');
        occasionParagrahp.textContent = `Occasion: ${occasionEl.value}`;
        const brandParagrahp = document.createElement('p');
        brandParagrahp.textContent = `Brand: ${brandPreferencesEL.value}`;
        const skinTypeParagrahp = document.createElement('p');
        skinTypeParagrahp.textContent = `Skin Type: ${skinTypeEl.value}`;

        //create article and append all childs;

        const articlePreferenceList = document.createElement('article');
        articlePreferenceList.appendChild(scentParagraph)
        articlePreferenceList.appendChild(budgetParagraph)
        articlePreferenceList.appendChild(occasionParagrahp)
        articlePreferenceList.appendChild(brandParagrahp)
        articlePreferenceList.appendChild(skinTypeParagrahp)

        //creating the buttons

        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit'

        const continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue'

        //create the list and append all the childs

        const preferencesLi = document.createElement('li');
        preferencesLi.setAttribute('class', 'content');

        preferencesLi.appendChild(articlePreferenceList)
        preferencesLi.appendChild(editBtn)
        preferencesLi.appendChild(continueBtn)

        preferenceEl.appendChild(preferencesLi)

        //save the input

        let scentData = scentEl.value;
        let budgetData = budgetEl.value;
        let occasionData = occasionEl.value;
        let brandData = brandPreferencesEL.value;
        let skinData = skinTypeEl.value

        //clear the input

        scentEl.value = ''
        budgetEl.value = ''
        occasionEl.value = ''
        brandPreferencesEL.value = ''
        skinTypeEl.value = ''

        nextBtn.disabled = true

        editBtn.addEventListener('click', editing)
        
        function editing(e){
            //returning the data from the input back to the input
            scentEl.value = scentData
            budgetEl.value = budgetData
            occasionEl.value = occasionData
            brandPreferencesEL.value = brandData
            skinTypeEl.value = skinData

            preferencesLi.remove()

            nextBtn.disabled = false
        }

        continueBtn.addEventListener('click', continiue)

        function continiue(e){

            //save the article

            let confirmArticle = articlePreferenceList.cloneNode(true)

            const confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm'

            const cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel'

            const liContiniue = document.createElement('li');
            liContiniue.setAttribute('class', 'content');

            liContiniue.appendChild(confirmArticle)
            liContiniue.appendChild(confirmBtn)
            liContiniue.appendChild(cancelBtn)

            confirmEL.appendChild(liContiniue)
            preferencesLi.remove()

            confirmBtn.addEventListener('click', finish)

            function finish(e){
                liContiniue.remove()
                nextBtn.disabled = false;

                thanksEl.textContent = 'Thank you for sharing your preferences!'
            }

            cancelBtn.addEventListener('click', canceling)

            function canceling(e){
                nextBtn.disabled = false;
                liContiniue.remove()
            }
        }
    }


}



