import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { baseUrl, getToken } from "../utils.js";

const mainEl = document.querySelector("main");

export default async function showEditPage(ctx) {
    const tattooId = ctx.params.id;
    const tattoo = await getDetails(tattooId);
    console.log("Tattoo data:", tattoo);

    if (tattoo) {
        render(editPageTemplate(tattoo, tattooId), mainEl);
    }
}

async function getDetails(tattooId) {
    try {
        const response = await fetch(`${baseUrl}/data/tattoos/${tattooId}`);

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }
        return await response.json();
    } catch (error) {
        alert(error.message);
        return null;
    }
}

async function editInfo(e, tattooId) {
    e.preventDefault();
    const formEditData = new FormData(e.currentTarget);
    const tattooData = Object.fromEntries(formEditData);
    
    console.log("Form data before sending:", tattooData);

    const areEmptyValues = Object.values(tattooData).some(val => val.trim() === "");
    if (areEmptyValues) {
        alert("Invalid data!");
        return;
    }

    try {
        const response = await fetch(`${baseUrl}/data/tattoos/${tattooId}`, {
            method: "PUT",
            headers: {
                "X-Authorization": getToken(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tattooData)
        });

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        console.log("Data successfully updated!");

        page.redirect(`/details/${tattooId}`);
    } catch (error) {
        alert(error.message);
    }
}

function editPageTemplate(tattoo, tattooId) {
    return html`
        <section id="edit">
            <div class="form">
                <h2>Edit Tattoo</h2>
                <form class="edit-form" @submit="${(e) => editInfo(e, tattooId)}">
                    <input
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Tattoo Type"
                        value="${tattoo.type}" 
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="image-url"
                        placeholder="Image URL"
                        value="${tattoo.imageUrl}"
                    />
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        rows="2"
                        cols="10"
                    >${tattoo.description}</textarea>
                    <select id="user-type" name="userType">
                        <option value="" disabled>Select your role</option>
                        <option value="Tattoo Artist" ?selected=${tattoo.userType === "Tattoo Artist"}>Tattoo Artist</option>
                        <option value="Tattoo Enthusiast" ?selected=${tattoo.userType === "Tattoo Enthusiast"}>Tattoo Enthusiast</option>
                        <option value="First Time in Tattoo" ?selected=${tattoo.userType === "First Time in Tattoo"}>First Time in Tattoo</option>
                        <option value="Tattoo Collector" ?selected=${tattoo.userType === "Tattoo Collector"}>Tattoo Collector</option>
                    </select>
                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    `;
}
