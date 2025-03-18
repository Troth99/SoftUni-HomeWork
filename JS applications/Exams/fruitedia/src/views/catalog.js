import { html, render } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { mainEl } from "../constants.js"


export default function showDashBoardView(ctx) {
    const fruits = ctx.fruits
    render(dashboardTemplate(fruits), mainEl)
}


function singleFruitTempalte(fruit) {
    const fruitId = fruit._id
    return html`
  
    <div class="fruit">
            <img src="${fruit.imageUrl}" alt="example1" />
            <h3 class="title">${fruit.name}</h3>
            <p>${fruit.description}</p>
            <a class="details-btn" href=${`/details/${fruitId}`}>More Info</a>
          </div>
    `
}
function dashboardTemplate(fruits) {

    return html`
     <h2>Fruits</h2>
      <section id="dashboard">
          ${fruits.length > 0 ? fruits.map(el => singleFruitTempalte(el)) : html` <h2>No fruit info yet.</h2>`}
    </section>
    `
}
