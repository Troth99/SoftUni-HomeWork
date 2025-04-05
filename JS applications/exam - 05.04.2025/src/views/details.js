import { post } from "../api/requester.js";
import { mainEl } from "../constants/constants.js";
import { render, html, page } from "../constants/lib.js";
import { deleteStamp, getStampById } from "../services/collectionData.js";
import { getAllStampLikes, getLieksByUser, onLike } from "../services/likes.js";
import { getToken, getUserId } from "../utils/utils.js";

export default async function showDetailsView(ctx) {
    const stampId = ctx.params.id
    const userId = getUserId()
    const token = getToken()
    const stamp = await getStampById(stampId)

    const totalLikes = await getAllStampLikes(stampId)
    const userHasLiked = await getLieksByUser(stampId, userId)
    const isOwner = userId === stamp._ownerId


    render(detailsTemplate(stamp, isOwner, userId, token, totalLikes, userHasLiked), mainEl)


}

function detailsTemplate(stamp, isOwner, userId, token, totalLikes, userHasLiked) {
    console.log(userHasLiked)
    return html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${stamp.imageUrl}" alt="Stamp Image" />
            <div>
                <p id="details-name">${stamp.name}</p>
                <div id="info-wrapper">
                    <div id="details-year-description">
                        <p id="year-description">
                            Year of oldest stamps - <span id="year">${stamp.year}</span> 
                        </p>
                        <p id="more-info">
                            ${stamp.learnMore}
                        </p>
                    </div>
                </div>
                <h3>Stamp total likes: <span id="likes">${totalLikes}</span></h3>

                <div id="action-buttons">
                    ${userId
            ? isOwner
                ? html`
                                <a href="/edit/${stamp._id}" id="edit-btn">Edit</a>
                                <a  id="delete-btn" @click=${(e) => deleteStamp(e, stamp._id)}>Delete</a>
                              `
                : !userHasLiked ?
                    html`<a @click=${(e) => handleLike(stamp._id)}>Like</a>` : ''

            : ''
        }
                </div>
            </div>
        </div>
    </section>`;
}

async function handleLike(stampId){
    await onLike(stampId)
    page.redirect(`/details/${stampId}`)
}

