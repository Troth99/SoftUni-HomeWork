function lockedProfile() {

    const buttonEl = Array.from(document.querySelectorAll('.profile button'))

    //за всеки бутон слушател на клик на бутона
    buttonEl.forEach(button => {
        button.addEventListener('click', show)
    })


    function show(event) {
        let divChildren = Array.from(event.target.parentElement.children);

        let locked = divChildren[2].checked;

        //взимаме предишния сиблинг понеже бутона е след див
        if (locked === false) {
            let hiddenFields = event.target.previousElementSibling;

            //прави проверка за бутона
            if (event.target.textContent === 'Show more') {

                hiddenFields.style.display = 'block'
                event.target.textContent = 'Hide it'
            } else {
                hiddenFields.style.display = 'none'
                event.target.textContent = 'Show more'
            }
        }

    }

}