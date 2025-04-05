import { mainEl } from "../constants/constants.js";
import { render, html } from "../constants/lib.js";
import { registerHandler } from "../services/authentication.js";


export default function showRegisterView() {

    render(registerTemplate(), mainEl)
}

function registerTemplate() {
    return html`
      <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="register-form" @submit=${registerHandler}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>
    `
}