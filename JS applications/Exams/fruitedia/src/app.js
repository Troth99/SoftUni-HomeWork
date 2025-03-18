import page from "../node_modules/page/page.mjs"
import showDashBoardView from "./views/catalog.js"
import showCreateVeiw from "./views/createFruit.js"
import showDetailsView from "./views/details.js"
import showEditView from "./views/edit.js"
import showHomeView from "./views/home.js"
import showLoginView from "./views/login.js"
import logOut from "./views/logout.js"
import showNavBar from "./views/navbar.js"
import showRegisterView from "./views/register.js"
import { searchView } from "./views/search.js"
import { getAllFruits, getSingleFruit } from "./views/services/fruits.js"


page(showNavBar)
page('/', showHomeView)
page("/login", showLoginView)
page('/register', showRegisterView)
page('/logout', logOut)
page('/catalog',  getAllFruits ,showDashBoardView)
page('/addFruit', showCreateVeiw)
page('/details/:id', getSingleFruit, showDetailsView)
page('/edit/:id',  getSingleFruit ,showEditView)
page('/search', searchView)

page.start()