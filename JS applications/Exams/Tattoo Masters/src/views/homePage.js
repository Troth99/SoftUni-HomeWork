import { html, render } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"

const mainEl = document.querySelector('main')

export default function showHomePage() {
    render(homePageTemplate(), mainEl)
}

function homePageTemplate() {
    return html`
   
<section id="home">
    <div id="home-wrapper">
      <p id="home-intro">
        Whether you're a seasoned artist, a collector of ink, or someone
        looking for inspiration for their first tattoo,
        <span>Tattoo Masters</span> is your community. Share your
        masterpieces, discover incredible designs, and connect with
        artists and aficionados from around the world.
      </p>
      <a href="/register" id='join-us'>Join Us!</a>
    </div>
  </section>
    `
}