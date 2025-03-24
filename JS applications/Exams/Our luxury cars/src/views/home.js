import { mainEl } from "../constants/constants.js";
import { page, render, html } from "../constants/lib.js";


export default function showHomeView() {

    render(homeTemplate(), mainEl)

}


function homeTemplate() {
    return html`
           <section id="hero">
          <h1>
            Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
          </h1>
        </section>
    `
}