function addItem() {

    const ulEL = document.getElementById('items');
    const inputEl = document.getElementById('newItemText');

    const liEL = document.createElement('li');

    liEL.textContent = inputEl.value;


    //create delete button

    const deletbtn = document.createElement('a');
    deletbtn.href = '#';
    deletbtn.textContent = '[Delete]';



    //add event listener to the delete button

    deletbtn.addEventListener('click', (event) => {
        //delete by reference
        liEL.remove()
        //delete by parent
        //event.currentTarget.parentElement.remove()
    })


    //attack delete button to LI element
    liEL.appendChild(deletbtn)

    //append li to ul
    ulEL.appendChild(liEL)


    inputEl.value = ''
}