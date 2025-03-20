import { page } from "./libs/lit-html.js";
import showNavigation from "./middleWare/navigation.js";
import { logOutHandler } from "./services/authUsers.js";
import showCreateView from "./views/create.js";
import dashboardView from "./views/dashboard.js";
import showDetailsView from "./views/details.js";
import showEditView from "./views/edit.js";
import showHomeVeiw from "./views/home.js";
import showLoginView from "./views/login.js";
import registerView from "./views/register.js";
import showSearchView from "./views/search.js";

page(showNavigation)
page('/login', showLoginView)
page('/', showHomeVeiw)
page('/logout', logOutHandler)
page('/register', registerView)
page('/dashboard', dashboardView)
page('/create', showCreateView)
page('/details/:id', showDetailsView)
page('/edit/:id', showEditView)
page('/search', showSearchView)
page.start()