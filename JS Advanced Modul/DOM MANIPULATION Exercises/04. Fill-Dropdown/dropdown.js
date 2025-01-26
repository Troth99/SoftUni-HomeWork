function addItem() {
    
    //get the Elements with the ids
    const textEL = document.querySelector('#newItemText');
    const valueEL = document.querySelector('#newItemValue');

    //get the menu element with the id
    const divEl = document.querySelector('#menu')

    //create element option
    const optionEl = document.createElement('option');
    
    //set the textCotent 
    optionEl.textContent = textEL.value

    //set the value
    optionEl.value = valueEL.value
    
    
    //append it as a child to the div
    divEl.appendChild(optionEl)

    //clear the input
    textEL.value = ''
    valueEL.value = ''
    
    
    
}