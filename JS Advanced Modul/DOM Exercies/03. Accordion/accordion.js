function toggle() {
    const nameEl = document.getElementsByClassName('button')[0];
    const textEl = document.getElementById('extra');


    if (textEl.style.display === '' || textEl.style.display === 'none') {
        textEl.style.display = 'block'
        nameEl.textContent = 'Less'
    } else if (textEl.style.display === 'block') {
        nameEl.textContent = 'More'
        textEl.style.display = 'none';
    }

}