import { loginUrl, registerUrl } from "../../constants.js";
import page from "../../../node_modules/page/page.mjs"

export function submitHandler(e) {
    e.preventDefault()
    const userForm = new FormData(e.currentTarget)

    const email = userForm.get('email').trim();
    const password = userForm.get('password').trim();

    if (!email || !password) {
        alert('All fields must not be empty!')
        return;
    }
    const body = {
        email,
        password
    }
    logInRequester(body)
}


async function logInRequester(body) {
    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message);
        }

        const data = await response.json()
      

        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('email', data.email);
        localStorage.setItem('userId', data._id)
        page.redirect('/')

    } catch (error) {
        alert(error.message)
    }
}

export function registerHandler(e){
    e.preventDefault()
    const userForm = new FormData(e.currentTarget)

    const email = userForm.get('email').trim();
    const password = userForm.get('password').trim();
    const rePass = userForm.get('re-password').trim();


    if (!email || !password || !rePass) {
        alert('Please fill all fields!')
        return;
    }

    if(password !== rePass){
        alert('Passwords does not match!')
        return;
    }
    const body = {
        email,
        password
    }
    registerRequest(body)
}

async function registerRequest(body) {
    try {
        const response = await fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message);
        }

        const data = await response.json()
      

        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('email', data.email);
        localStorage.setItem('userId', data._id)
        page.redirect('/')

    } catch (error) {
        alert(error.message)
    }
}