import { mainEl } from "../libs/constants.js";
import { render, html, page } from "../libs/lit-html.js";
import { registerHandler } from "../services/authUsers.js";

export default function registerView() {
    render(registerTemplate(), mainEl)
}


function registerTemplate() {
    return html`
       <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${registerHandler}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
    `
}