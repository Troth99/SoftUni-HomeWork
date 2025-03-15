import { html, render } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"

const mainEl = document.querySelector('main')

export default async function productView(ctx) {
  const products = ctx.products


  render(productTemplate(products), mainEl)
}

function singleProductTemplate(product) {

  return html`
  <div class="product">
            <img src="${product.imageUrl}" alt="example1" />
            <p class="title">${product.name}</p>
            <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
            <a class="details-btn" href=${`/products/${product._id}`}>Details</a>
          </div>
`
}

function productTemplate(products) {

  return html`
      <h2>Products</h2>
      <section id="dashboard">
          ${products.length > 0
      ? products.map(p => singleProductTemplate(p))
      : html`<h2>No products yet.</h2>`}
      </section>
  `;
}