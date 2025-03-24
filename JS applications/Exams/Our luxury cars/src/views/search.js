
import { mainEl } from "../constants/constants.js";
import { page, render, html } from "../constants/lib.js";
import { searchCar } from "../services/carServices.js";


export default function showSearchView() {

    render(searchTemplate(onSearch), mainEl)

    async function onSearch(e){
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const query = formData.get('search').trim()
    
      if(!query){
        return alert ('Please enter a search term!')
      }
    
      const cars = await searchCar(query)
      render(searchTemplate(onSearch, cars), mainEl)
    }
   
  }
  

function searchTemplate(onSearch, cars = []) {
    return html`
       <section id="search">
          <div class="form">
            <h4>Search</h4>
            <form class="search-form" @submit=${onSearch}>
              <input type="text" name="search" id="search-input" />
              <button class="button-list">Search</button>
            </form>
          </div>
          <div class="search-result">

          ${cars.length > 0
            ? cars.map(c =>singleCarTemplate(c))
            :html `<h2 class="no-avaliable">No result.</h2>`
          }
          </div>
        </section>
    `
}

function singleCarTemplate(car){
  return html `
         <div class="car">
              <img src="${car.imageUrl}" alt="example1"/>
              <h3 class="model">${car.model}</h3>
              <a class="details-btn" href="/details/${car._id}">More Info</a>
            </div>

  `
}