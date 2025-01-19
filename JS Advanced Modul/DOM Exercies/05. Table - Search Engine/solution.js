function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const searchEl = document.getElementById('searchField');
   const tableEL = document.querySelectorAll('tbody tr')
   const tableArr = Array.from(tableEL)

   function onClick() {
      const query = searchEl.value
      for (const person of tableArr) {
         person.classList.remove('select')
      }

      for (const person of tableArr) {
         if (person.textContent.includes(query) && query !== '') {
         person.classList.add('select')
          
         }
      }


   }
}