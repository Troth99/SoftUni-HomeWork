import { render, html } from "../libs/lit-html.js";
import { mainEl } from "../libs/constants.js";


export default function showHomeVeiw() {
    render(homeTemplate(), mainEl)
}

function homeTemplate() {
    return html`
           <section id="home">
          <h1>
            Welcome to <span>Samurider</span> moto market, your premier destination for Japanese motorcycles.</h1>
          <img
            src="./images/motorcycle.png"
            alt="home"
          />
        </section>
    
    `
}