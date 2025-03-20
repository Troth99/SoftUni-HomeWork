import { mainEl } from "../libs/constants.js";
import { render, html, page } from "../libs/lit-html.js";
import { loginHandler } from "../services/authUsers.js";
import { searchBikes } from "../services/motorCyles.js";

export default function showSearchView() {

    render(searchTemplate(onSearch), mainEl)

    async function onSearch(e){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const query = formData.get('search').trim()

        
        if (!query) {
            return alert("Please enter a search term!");
        }

        const bikes = await searchBikes(query)
        render(searchTemplate(onSearch, bikes), mainEl)
    }
}

function searchTemplate(onSearch, bikes = null) {
    return html`
        <section id="search">
            <div class="form">
                <h4>Search</h4>
                <form class="search-form" @submit=${onSearch}>
                    <input type="text" name="search" id="search-input" />
                    <button class="button-list">Search</button>
                </form>
            </div>
            <h4 id="result-heading">Results:</h4>
            <div class="search-result">
                ${bikes === null 
                    ? html``  // Празно в началото
                    : bikes.length > 0 
                        ? bikes.map(b => singleBikeTemplate(b))
                        : html`<h2 class="no-avaliable">No result.</h2>`}
            </div>
        </section>
    `;
}

function singleBikeTemplate(bike){
    console.log(bike)
return html `
<div class="motorcycle">
  <img src="${bike.imageUrl}" alt="example1" />
  <h3 class="model">${bike.model}</h3>
    <a class="details-btn" href=${`/details/${bike._id}`}>More Info</a>
</div>
  </div>
`
}