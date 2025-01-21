function validate() {
    const emailInputEl = document.getElementById('email');

    emailInputEl.addEventListener("change", (event) => {
        const emailText = event.currentTarget.value
        const patternt = /^[a-z]+@[a-z]+\.[a-z]+$/
        if (patternt.test(emailText)) {
            event.currentTarget.classList.remove('error')
        } else {
            event.currentTarget.classList.add('error')
        }
    })
}