import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { mainEl } from "../constants.js";
import { searchFruits } from "./services/fruits.js";

export function searchView() {
    render(searchTemplate(onSearch), mainEl);

    async function onSearch(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const query = formData.get("search").trim();

        if (!query) {
            return alert("Please enter a search term!");
        }

        const fruits = await searchFruits(query);
        render(searchTemplate(onSearch, fruits), mainEl);
    }
}

function searchTemplate(onSearch, fruits = []) {
    return html`
    <section id="search">
      <div class="form">
        <h2>Search</h2>
        <form @submit=${onSearch} class="search-form">
          <input type="text" name="search" id="search-input" />
          <button class="button-list">Search</button>
        </form>
      </div>

      <h4>Results:</h4>
      <div class="search-result">
        ${fruits.length > 0
            ? fruits.map(fruitCardTemplate)
            : html`<p class="no-result">No result.</p>`}
      </div>
    </section>
    `;
}

function fruitCardTemplate(fruit) {
    return html`
    <div class="fruit">
      <img src=${fruit.imageUrl} alt=${fruit.name} />
      <h3 class="title">${fruit.name}</h3>
      <p class="description">${fruit.description}</p>
      <a class="details-btn" href="/details/${fruit._id}">More Info</a>
    </div>
    `;
}
