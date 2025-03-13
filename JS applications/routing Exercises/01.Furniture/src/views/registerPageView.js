import {html, render} from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { navigationBar } from "../app.js"

const mainEl = document.querySelector('main')
const baseUrl = 'http://localhost:3030/users'
export default function showRegisterView() {
    render(createRegisterTemplate(), mainEl)
}

async function registerUser(e) {
    e.preventDefault()

    const dataRegisterForm = new FormData(e.currentTarget)
    const registerObj = Object.fromEntries(dataRegisterForm)

    if (registerObj.password !== registerObj.rePass) {
        alert('Passwords does not match!')
    }
    if (!registerObj.email.includes('@')) {
        alert('Email must be valid')
    }


    try {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(registerObj)
        });

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        console.log(data)

        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('userId', data._id);
        localStorage.setItem('email', data.email)
        navigationBar()
        page.redirect('/')

    } catch (error) {
        alert(error.message)
    }
}

function createRegisterTemplate() {
    return html`
  <div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${registerUser}">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class="form-control" id="password" type="password" name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class="form-control" id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
</div>
    `
}