import page from "../../node_modules/page/page.mjs"
import { loginUrl, registerUrl } from "../constants/index.js"
import { getToken } from "../utis.js"




async function login(formInputs) {

    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formInputs)
        })

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()


        localStorage.setItem('token', data.accessToken)
        localStorage.setItem('email', data.email);
        localStorage.setItem('userId', data._id)
        page.redirect("/products")
    } catch (error) {
        alert(error.message)
    }
}

async function register(body) {
    try {
        const response = await fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()


        localStorage.setItem('token', data.accessToken)
        localStorage.setItem('email', data.email);
        localStorage.setItem('userId', data._id)
        page.redirect("/products")
    } catch (error) {
        alert(error.message)
    }
}
export async function handleRegister(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formInputs = Object.fromEntries(formData)

    const email = formData.get('email').trim()
    const password = formData.get('password').trim();
    const rePassword = formData.get('re-password').trim();

    if (!email || !rePassword) {
        alert('All fields are required!')
        return
    }
    if (password !== rePassword) {
        alert("Both passwords are different!")
        return
    }
    const body = {
        email,
        password
    }

    await register(body)
}

export async function loginHandler(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (!email || !password) {
        alert('All fields are required!');
        return;
    }
    await login({ email, password })

}