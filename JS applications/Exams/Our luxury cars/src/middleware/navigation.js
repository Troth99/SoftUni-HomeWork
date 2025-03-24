
import { header } from "../constants/constants.js";
import { page , render, html} from "../constants/lib.js";
import { getToken } from "../utils/utils.js";


export default function navigation(ctx, next){
const token = getToken()
render(navigationTempalte(token), header)

next()

}

function loggedInUser(){
    return html `
       <div class="user">
            <a href="/create">Add Your Car</a>
            <a href="/logout">Logout</a>
          </div>
    `
}

function guests(){
    return html `
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
    `
}

function navigationTempalte(token){
    return html`
          <!-- Navigation -->
          <a id="logo" href="/"><img id="logo-car" src="./images/car-logo.png" alt="img"/></a>
        <nav>
          <div>
            <a href="/dashboard">Our Cars</a>
            <a href="/search">Search</a>
          </div>

          ${token ? loggedInUser() : guests()}
        
        </nav>

    `
}
