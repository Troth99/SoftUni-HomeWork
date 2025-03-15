import page from "../node_modules/page/page.mjs"
import { getToken, baseUrl } from "./utils.js";


import showCollectionPage from "./views/collection.js";
import showCreatePage from "./views/createPage.js";
import showDetailsPage from "./views/detailsPage.js";
import showEditPage from "./views/editPage.js";
import showHomePage from "./views/homePage.js";
import showLoginPage from "./views/loginPage.js"
import showRegisterPage from "./views/registerPage.js"

page('/', showHomePage)
page("/login", showLoginPage)
page("/register", showRegisterPage);
page("/create", showCreatePage)
page("/collection", showCollectionPage)
page("/edit/:id", showEditPage);
page("/details/:id", showDetailsPage)
page.start()



export function navigatorBar() {
    const token = getToken()
    const userEl = document.querySelector('.user');
    const guestEL = document.querySelector('.guest')

    if(token){
        userEl.style.display = 'block'
        guestEL.style.display= 'none'
    }else {
        userEl.style.display = 'none'
        guestEL.style.display= 'block'
    }
}

navigatorBar()
const logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', logout)
async function logout(e) {
    e?.preventDefault()
    
    try {
        await fetch(`${baseUrl}/users/logout`, {
            headers: {
                'X-Authorization': getToken()
            }
        })


        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('email')

        navigatorBar()
        page.redirect('/')

    } catch (error) {
        throw new Error(error.message)
    }
}