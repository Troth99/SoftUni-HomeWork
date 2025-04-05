import { mainEl } from "../constants/constants.js";
import { render, html } from "../constants/lib.js";
import { getAllCollectionData } from "../services/collectionData.js";



export default async function showCollectionView() {

    const stamps = await getAllCollectionData()
    render(collectionTemplate(stamps), mainEl)
}


function singleTemplate(stamp) {
    return html`
       <section id="collection">
        <!-- Display a div with information about every post (if any)-->
        <div class="stamp">
          <img src="${stamp.imageUrl}" alt="example1" />
          <div class="stamp-info">
            <h3 class="name">${stamp.name}</h3>
            <p class="year-description">
              Year of oldest stamps - <span class="year">${stamp.year}</span> 
            </p>
            <a class="learn-more-btn" href="/details/${stamp._id}">Learn More</a>
          </div>
        </div>
    `
}
function collectionTemplate(stamps) {
    return html`
  <h2>Collection</h2>
      <section id="collection">
        <!-- Display a div with information about every post (if any)-->
    
        ${stamps.length > 0 ? stamps.map(stamp => singleTemplate(stamp)) : html`<h2 id="no-stamp">No Stamps Added.</h2>`}
         <!-- Display an h2 if there are no posts -->
      
      </section>
     
    `
}