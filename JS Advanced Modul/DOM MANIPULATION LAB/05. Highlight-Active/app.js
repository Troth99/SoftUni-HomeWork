function focused() {
 
 const inputEl = document.querySelectorAll('input');

 inputEl.forEach(input => {
    input.addEventListener('focus', (e) => {
        e.target.closest('div').classList.add('focused')
    })

    input.addEventListener('blur', (e) => {
        e.target.closest('div').classList.remove('focused')
    })
 })
    
    
}