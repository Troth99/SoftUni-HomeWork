import { page } from "./constants/lib.js"
import navigation from "./middleware/navigation.js"
import showCreateView from "./views/create.js"
import dashaboardView from "./views/dashboard.js"
import showDetailsView from "./views/details.js"
import showEditView from "./views/edit.js"
import showHomeView from "./views/home.js"
import showLoginView from "./views/login.js"
import { logout } from "./views/logout.js"
import showReigsterView from "./views/register.js"
import showSearchView from "./views/search.js"


page(navigation)
page('/', showHomeView)
page('/login', showLoginView)
page('/logout', logout)
page('/register', showReigsterView)
page('/dashboard', dashaboardView)
page('/create', showCreateView)
page('/details/:id', showDetailsView)
page('/edit/:id', showEditView)
page('/search', showSearchView)
page.start()