import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { getToken } from "../utils.js"

const headerEl = document.querySelector('header')

export default function showNavBar(ctx, next) {
    let token = getToken()
    render(navBarTemplate(token), headerEl)
    next()
}

function guest() {

    return html`
        <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            
          </div>
    `
}

function loggedInUser() {
    {
        return html`
       <div class="user">
            <a href="/addFruit">Add Fruit</a>
            <a href="/logout">Logout</a>
          </div>
    `
    }
}

function navBarTemplate(token) {
    return html`
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/dashboard">Fruits</a>
            <a href="/search">Search</a>
          </div>

         ${token ? loggedInUser() : guest()}

        </nav>
    `
}