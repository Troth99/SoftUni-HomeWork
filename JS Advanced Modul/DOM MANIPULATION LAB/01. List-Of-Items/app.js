function addItem() {
    //read related Elements from DOM;
   const textEl = document.getElementById('newItemText')
   const ulEl = document.getElementById('items')

   //create list element;
   const liEl = document.createElement('li');
   liEl.textContent = textEl.value;
   //apped bottom to UL;
   ulEl.append(liEl)

   //clear input after submit;
   textEl.value = '';  
   textEl.focus()
}