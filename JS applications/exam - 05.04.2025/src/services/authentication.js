
import { post, get } from "../api/requester.js";
import { loginUrl, logoutUrl, registerUrl } from "../constants/constants.js";
import { page } from "../constants/lib.js";
import { deleteUserData, setUserData } from "../utils/utils.js";


export async function logInHandler(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        return alert('Please fill all fields!')
    }
    const body = {
        email,
        password,
    }

    const login = await post(loginUrl, body)
    setUserData(login)
    page.redirect('/')
}

export async function registerHandler(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('re-password')

    if (!email || !password || !rePassword) {
        return alert('Please fill all fields!')
    }

    if (password !== rePassword) {
        return alert('Passwords does not match!')
    }
    const body = {
        email,
        password,
    }
    const register = await post(registerUrl, body)
    setUserData(register)
    page.redirect('/')
}

export async function logOutHandler(){
 
    const result = await get(logoutUrl)

    console.log(result)
    deleteUserData()
    page.redirect('/')
}
