import { render, html } from "../lib/lib.js";
import { headerEl } from "../constants/constants.js";
import { getToken } from "../utils/utils.js";

export function showNavigation(ctx, next){
    const token = getToken()
    render(navigationTemplate(token), headerEl)
    next()
}

function loggedInUser(){
    return html `
        <li><a href="/create">Create Postcard</a></li>
        <li><a href="/logout">Logout</a></li>
    `
}

function guests(){
    return html `
       <li><a href="/login">Login</a></li>
       <li><a href="/register">Register</a></li>
    `
}
function navigationTemplate(token) {
    return html `
        <header>
        <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>

                ${token ? loggedInUser() : guests()}
            </ul>
        </nav>
    </header>
    `
}