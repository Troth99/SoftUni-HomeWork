import {html, render} from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { navigationBar } from "../app.js"
const baseUrl = 'http://localhost:3030/users'
const mainEl = document.querySelector('main')

export default function showLoginView() {
    render(loginTemplate(), mainEl)
}
async function loginUser(e) { 
    e.preventDefault()
 
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email');
    const password = formData.get('password')
   
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if(!response.ok){
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()

        localStorage.setItem('token', data.accessToken)
        localStorage.setItem('userId', data._id)
        localStorage.setItem('email', data.email)
        navigationBar()
        page.redirect('/')
       
       
    } catch (error) {
        throw new Error(error.message)
    }

}


function loginTemplate() {
    return html`
    <div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${loginUser}">
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
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>
</div>
    `
}