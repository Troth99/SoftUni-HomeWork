const rootDiv = document.getElementById('root')

function homePage(){
    // !XSS Warn, dmeo only
    rootDiv.innerHTML = `
    <h1>Home Page</h1>
    `
}

function aboutPage(){
    rootDiv.innerHTML = `
    <h1>About page</h1>
    `
}

function contactPage(){
    rootDiv.innerHTML = `
    <h1>Contacts Page</h1>
    `
}

const routes = {
    '#home': homePage,
    "#about": aboutPage,
    '#contacts': contactPage,
}

function initNavigation(){
window.addEventListener('hashchange', () => {
    routes[location.hash]()
})

const keys = Object.keys(routes);
if (keys.includes(localStorage.hash)){
    routes[locationg.hash]

}else {
    routes['#home']()
}
}


initNavigation()