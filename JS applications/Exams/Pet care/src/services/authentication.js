import { get, post } from "../api/requester.js"
import { endpoints } from "../constants/constants.js"
import { page } from "../lib/lib.js"
import { clearStoredData, inputValidation, setUserData } from "../utils/utils.js"


export async function loginHandler(e) {
    e.preventDefault()
    const data = inputValidation(e)
    if(!data.email || !data.password){
        return alert('Please fill all fields')
    }
    await logIn(data)
}

async function logIn(data) {
    const loginResult = await post(endpoints.loginUrl, data)
    setUserData(loginResult)
    page.redirect('/')
}

export async function registerHandler(e) {
    e.preventDefault()
    const data = inputValidation(e)
    if(!data.email || !data.password || !data.repeatPassword){
        return alert('Please fill all fields')
    }
    if(data.password !== data.repeatPassword){
        return alert('Passwords must match!')
    }
    register(data)
}

async function register(data) {
    const registerResult = await post(endpoints.registerUrl, data)
    setUserData(registerResult)
    page.redirect('/')
}

export async function logout(){
    await get(endpoints.logoutUrl);
    clearStoredData()
    page.redirect('/')
}