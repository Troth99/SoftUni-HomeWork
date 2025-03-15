import { logoutUrl } from "../constants/index.js";
import { getToken } from "../utis.js";
import { navBarViews } from "./navbar.js";
import page from "../../node_modules/page/page.mjs"


export default async function logoutView(){
   try {
          await fetch(logoutUrl, {
              headers: {
                  'X-Authorization': getToken()
              }
          })
  
          localStorage.removeItem('token')
          localStorage.removeItem('userId');
          localStorage.removeItem('email')
  
          navBarViews()
         page.redirect("/products")
      } catch (error) {
         
      }
}