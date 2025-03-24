import { get } from "../api/requester.js";
import { logoutUrl } from "../constants/constants.js";
import { page } from "../constants/lib.js";
import { clearLoggedInData, getToken } from "../utils/utils.js";

const token = getToken()

export async function logout(){
    get(logoutUrl)
    clearLoggedInData()
    page.redirect('/')
}