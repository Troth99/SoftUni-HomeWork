import  { page } from '../src/lib/lib.js'
import { showNavigation } from './middleware/navigation.js'
import { logout } from './services/authentication.js'
import createView from './views/create.js'
import dashbaordView from './views/dashboard.js'
import detailsView from './views/details.js'
import editView from './views/edit.js'
import homeView from './views/home.js'
import loginView from './views/login.js'
import registerView from './views/register.js'

page(showNavigation)
page('/', homeView)
page('/register', registerView)
page('/login', loginView)
page('/dashboard', dashbaordView)
page('/logout', logout)
page('/details/:id', detailsView)
page('/create', createView)
page('/edit/:id', editView)
page.start()