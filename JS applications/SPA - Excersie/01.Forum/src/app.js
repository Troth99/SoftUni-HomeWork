import { onCancel, createPost, showHomePage} from "./homePage.js"
import { creatingComments } from "./details.js"
const homeButton = document.querySelector('a')
homeButton.addEventListener('click', showHomePage)

let homeA = document.querySelector('a');
homeA.addEventListener('click', showHomePage);
let allButtons = document.querySelectorAll('button');
let cancelBtn = allButtons[0];
cancelBtn.addEventListener('click', onCancel);
let createBtn = allButtons[1];
createBtn.addEventListener('click', createPost);
let commentBtn = allButtons[2];
commentBtn.addEventListener('click', creatingComments);
showHomePage()