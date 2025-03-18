import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { mainEl } from "../constants.js"


export default function showHomeView() {
    render(homeTemplate(), mainEl)
}

function homeTemplate() {
    return html`
       <section id="home">
          <h1>Learn more about your favorite fruits</h1>
          <img
            src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
            alt="home"
          />
        </section>

    `
}