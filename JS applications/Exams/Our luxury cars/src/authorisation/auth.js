import { post } from "../api/requester.js";
import { loginUrl, registerUrl } from "../constants/constants.js";
import { page } from "../constants/lib.js";
import { setUserData } from "../utils/utils.js";

export async function logHandler(event) {
    event.preventDefault()
    const loginForm = new FormData(event.currentTarget)

    const email = loginForm.get('email').trim();
    const password = loginForm.get('password').trim()

    if (!email) {
        return alert("Please fill email field!")
    }

    if (!password) {
        return alert('Please fill password field!')
    }

    const body = {
        email,
        password
    }
    await logIn(body)
}

async function logIn(body) {
    const data = await post(loginUrl, body)
    setUserData(data)
    page.redirect('/')
}

export async function registerHandler(event){
    event.preventDefault()
    const registerForm = new FormData(event.currentTarget)

    const email = registerForm.get('email').trim();
    const password = registerForm.get('password').trim()
    const rePassword = registerForm.get('re-password').trim()

    if (!email || !rePassword || !password) {
        return alert("Please fill all fields!")
    }

    if(password !== rePassword){
        return alert('Passwords does not match')
    }

    const body = {
        email,
        password
    }
    await register(body)
}

async function register(body){
    const data = await post(registerUrl, body)
    setUserData(data)
    page.redirect('/')
}