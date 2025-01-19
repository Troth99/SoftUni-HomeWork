function search() {
   const townsEL = document.querySelectorAll(`ul li`)
   const textEl = document.getElementById('searchText');
   const resultEL = document.getElementById('result');
   
   const listsArr = Array.from(townsEL)
   const searchText = textEl.value

   let matches = 0;
   for (const town of listsArr) {
      if(town.textContent.includes(searchText)){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++
      }else {
         town.style.fontWeight = `normal`;
         town.style.textDecoration = `none`
      }
   }
   
   return resultEL.textContent = `${matches} matches found`
   
   

   
}
