function create(words) {
   const idEL = document.getElementById('content');

   words.forEach(word => {
      const divEl = document.createElement('div')
      const pEL = document.createElement('p');

      pEL.textContent = word
     
      pEL.style.display = 'none'
      divEl.appendChild(pEL)
      divEl.addEventListener('click', () => {
         pEL.style.display = 'block'
        
      })

      idEL.append(divEl)
   });
   

}