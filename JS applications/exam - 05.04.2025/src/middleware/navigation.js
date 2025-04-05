import { headerEl } from "../constants/constants.js";
import { render, html } from "../constants/lib.js";
import { getToken } from "../utils/utils.js";




export default function showNavigation(ctx, next) {

    const token = getToken()
    render(navigationTemplate(token), headerEl)
    next()
}

function loggedInUser() {
    return html`
     <div class="user">
          <a href="/add">Add Stamp</a>
          <a href="/logout">Logout</a>
        </div>
    `
}
function guest() {
    return html`
        <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    `
}

function navigationTemplate(token) {
    return html`
          <!-- Navigation -->
          <a id="logo" href="/"><img id="logo-img" src="./images/logo.webp" alt="logo" />
      </a>
      <nav>
        <div>
          <a href="/collection">Collection</a>
        </div>

        ${token ? loggedInUser() : guest()}
        <!-- Logged-in users -->
        <!-- Guest users -->
    
      </nav>
    `
}