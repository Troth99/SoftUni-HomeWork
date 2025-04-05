
import { page } from "../src/constants/lib.js"
import showNavigation from "./middleware/navigation.js"
import { logOutHandler } from "./services/authentication.js"
import showAddStampView from "./views/addStamp.js"
import showCollectionView from "./views/collection.js"
import showDetailsView from "./views/details.js"
import showEditView from "./views/edit.js"
import showHomeView from "./views/home.js"
import showLoginView from "./views/login.js"
import showRegisterView from "./views/register.js"



page(showNavigation)
page("/", showHomeView)
page('/login', showLoginView)
page('/register', showRegisterView)
page('/logout', logOutHandler)
page('/collection', showCollectionView)
page('/add', showAddStampView)
page('/details/:id', showDetailsView)
page('/edit/:id', showEditView)
page.start()