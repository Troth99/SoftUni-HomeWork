import { getToken } from "./utils.js"

import page from "../node_modules/page/page.mjs"
import createPageView from "./views/createPageView.js"
import homePageView from "./views/homePageView.js"
import showLoginView from "./views/loginPageView.js"
import showRegisterView from "./views/registerPageView.js"
import showDetailsPage from "./views/detailsPageView.js"
import showEditPage from "./views/editPageView.js"
import myFurnitureShowPage from "./views/myFurniturePageView.js"


page("/", homePageView)
page("/dashboard", homePageView)
page("/create", createPageView)
page("/login", showLoginView)
page("/register",showRegisterView)
page("/details/:id", showDetailsPage)
page("/edit/:id", showEditPage)
page("/my-furniture", myFurnitureShowPage)
page.start()

export function navigationBar() {
    const token = getToken()
    const guestEl = document.getElementById('guest');
    const userEl = document.getElementById('user');
    if (token) {
        userEl.style.display = 'block'
        guestEl.style.display = 'none'
    } else {
        userEl.style.display = 'none'
        guestEl.style.display = 'block'
    }

}

navigationBar()

const logoutButton = document.getElementById('logoutBtn');
logoutButton.addEventListener('click', logOut)

async function logOut() {

    try {
        await fetch('http://localhost:3030/users/logout', {
            headers: {
                'X-Authorization': getToken()
            }
        })

        localStorage.removeItem('token')
        localStorage.removeItem('userId');
        localStorage.removeItem('email')

        navigationBar()
        page.redirect('/')
    } catch (error) {
        throw new Error(error.message)
    }

}
