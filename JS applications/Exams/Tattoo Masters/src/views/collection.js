import { html, render } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { baseUrl } from "../utils.js"
const mainEl = document.querySelector('main')

export default async function showCollectionPage() {
    const allTattoos = await getTattoos()
    let isEmpty = allTattoos.length === 0

    render(collectionTemplate(allTattoos, isEmpty), mainEl)
}

async function getTattoos() {
    try {

        const response = await fetch(`${baseUrl}/data/tattoos?sortBy=_createdOn%20desc`)

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        alert(error.message)
    }
}

function createSingleTatto(item) {

    return html`
   <div class="tattoo">
    <img src="${item["image-url"]}" alt="example1" />
    <div class="tattoo-info">
      <h3 class="type">${item.type}y</h3>
      <span>Uploaded by </span>
      <p class="user-type">${item.userType}</p>
      <a class="details-btn" href="/details/${item._id}">Learn More</a>
    </div>
  </div>
    `
}
function collectionTemplate(allTattoos, isEmpty) {
  
    return html`
        <h2>Collection</h2>
        <section id="tattoos">
            <!-- Display a div with information about every post (if any) -->
          
                ${allTattoos.map(item => createSingleTatto(item))}
          
        </section>
        <!-- Display an h2 if there are no posts -->
        ${isEmpty ? html`<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>` : ""}
    `;
}
