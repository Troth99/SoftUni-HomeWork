import page from "../../node_modules/page/page.mjs"
import { logOutUrl } from "../constants.js";
import { getToken } from "../utils.js";


export default async function logOut() {
    console.log(getToken())
    try {
        const response = await fetch(logOutUrl, {
            headers : {
                'X-Authorization': getToken()
            }
        })

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message);
        }
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('userId')
        page.redirect('/')

    } catch (error) {
        alert(error.message)
    }
}