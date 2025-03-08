import { html, render } from "../node_modules/lit-html/lit-html.js"
import { towns } from "./towns.js"

const mainDIv = document.getElementById('towns');
const searchBtn = document.querySelector('button');
const searchText = document.getElementById('searchText');
const result = document.getElementById('result');


searchBtn.addEventListener('click', search)

function search() {
   let matches = 0;
   let searchValue = searchText.value
  
   const getAllLI = document.querySelectorAll('li')

   if (searchValue === '') {
      for (const liEl of getAllLI) {
         liEl.classList.remove('active')
      }
      return
   }

   for (const liEL of getAllLI) {
      if (liEL.textContent.includes(searchValue)) {
         liEL.classList.add('active')
         matches++
      } else {
         liEL.classList.remove('active')
      }
   }
   result.textContent = `${matches} matches found`
}


render(createTemplate(towns), mainDIv)

function createTemplate(towns) {

   return html`
   <ul>
   ${towns.map(town => html`<li>${town}</li>`)}
   </ul>
   `
}




