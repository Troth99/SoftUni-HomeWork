import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { handleBuy, onDelete } from "../services/products.js"
import { getToken, getUserId } from "../utis.js"



const mainEl = document.querySelector('main')

export default function detailsView(ctx){
    const userId = getUserId()
    const ownerId = ctx.product._ownerId
    const isOwner = userId === ctx.product._ownerId


    render(detailsTempalte(ctx.product, isOwner, userId, ownerId, ctx.getBuyCount, ctx.isBoughtUser), mainEl)
}


function detailsTempalte(product, isOwner, userId, ownerId, boughtCount, isAlreadyBought){
    console.log(isAlreadyBought)
    return html `
         <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src="${product.imageUrl}"
              alt="example1"
            />
            <p id="details-title">${product.name}</p>
            <p id="details-category">
              Category: <span id="categories">${product.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${product.price}</span>$
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">${boughtCount}</span> times.</h4>
                <span
                  >${product.description}</span
                >
              </div>
            </div>
            <div id="action-buttons">
                  ${isOwner ? html `
              <a href=${`/edit/${product._id}`} id="edit-btn">Edit</a>
              <a href="" id="delete-btn" @click=${(e) => onDelete(e, product._id)}>Delete</a>
              `: ``}

              ${userId && userId !== ownerId && !isAlreadyBought ? html ` <a href="" id="buy-btn" @click=${(e) => handleBuy(e, product._id)}>Buy</a>` : '' }
              <!--Bonus - Only for logged-in users ( not authors )-->
              
        
            </div>
          </div>
        </section>
    `
}

