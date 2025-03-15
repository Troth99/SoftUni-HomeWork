import page from "../node_modules/page/page.mjs"
import { getBuyCount, getProduct, getProducts, isBoughtUser } from "./services/products.js";
import createView from "./views/create.js";
import editVeiw from "./views/edit.js";
import homeView from "./views/home.js";
import loginView from "./views/login.js";
import logoutView from "./views/logout.js";
import { navBarViews } from "./views/navbar.js";
import detailsView from "./views/productDetails.js";
import productView from "./views/products.js";
import registerView from "./views/register.js";


page(navBarViews)
page("/", homeView)
page("/login", loginView)
page("/register", registerView)
page("/logout", logoutView)
page("/products", getProducts, productView)
page('/create', getProducts , createView)
page('/products/:id', getProduct , getBuyCount, isBoughtUser, detailsView)
page('/edit/:id', getProduct, editVeiw)


page.start();