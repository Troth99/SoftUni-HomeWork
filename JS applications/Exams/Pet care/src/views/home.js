import { mainEL } from '../constants/constants.js';
import { render, html } from '../lib/lib.js';

export default function homeView() {
    render(homeTemplate(), mainEL)
}

function homeTemplate() {
    return html`
    
    <section class="welcome-content">
            <article class="welcome-content-text">
                <h1>We Care</h1>
                <h1 class="bold-welcome">Your Pets</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </article>
            <article class="welcome-content-image">
                <img src="./images/header-dog.png" alt="dog">
            </article>
        </section>
    `
}