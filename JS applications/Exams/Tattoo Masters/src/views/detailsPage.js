import {html, render} from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { baseUrl, getToken, getUserId } from "../utils.js"
const mainEl = document.querySelector('main')

export default async function showDetailsPage(ctx){
    const tatooId = ctx.params.id
   
    const tatooData = await getDetails(tatooId)
    const userId = getUserId()
    const isOwner = userId === tatooData._ownerId
  
    render(detailsTemplate(tatooData, isOwner), mainEl)
}

async function getDetails(tatooId){

       try {
   
           const response = await fetch(`${baseUrl}/data/tattoos/${tatooId}`)
   
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

function detailsTemplate(tatooData, isOwner){
    return html `
  <section id="details">
    <div id="details-wrapper">
      <img
        id="details-img"
        src="${tatooData['image-url']}"
        alt="example1"
      />
      <div>
        <div id="info-wrapper">
          <p id="details-type">${tatooData.type}</p>
          <div id="details-description">
            <p id="user-type">${tatooData["user-type"]}</p>
            <p id="description">
             ${tatooData.description}
            </p>
          </div>
          <h3>Like tattoo:<span id="like">0</span></h3>
          <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${isOwner ? html `
                <a href="/edit/${tatooData._id}" id="edit-btn">Edit</a>
                <a  id="${tatooData._id}" @click="${deleteItem}">Delete</a>
            ` : ''}
           
            <!--Bonus - Only for logged-in users ( not authors )-->
            <a href="#" id="like-btn">Like</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    `
}

async function deleteItem(e){
   const itemId = e.target.id
     
     const confirmed = confirm("Are you sure you want to delete this item?");
     if (!confirmed) {
         return; 
     }
     try {
         const response = await fetch(`${baseUrl}/data/tattoos/${itemId}`, {
             method: 'DELETE',
             headers: {
                 'X-Authorization': getToken()
             }
         });
 
         if (!response.ok) {
             const error = await response.json();
             throw new Error(error.message);
         }
 
         page.redirect('/collection');
     } catch (error) {
         alert(error.message);
     }
   
}

