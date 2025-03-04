const mainHeader = document.querySelector('body header')
const viewSectionEL = document.getElementById('view')
const mainEl = document.querySelector('body main')
const registerPostUrl = 'http://localhost:3030/users/register'
const logingUserUrl = 'http://localhost:3030/users/login'
const logoutUserUrl = 'http://localhost:3030/users/logout'
const baseCaches = 'http://localhost:3030/data/catches'

function loadNavBar() {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email')
    const navEL = document.querySelector('nav')
    console.log(localStorage)

    if (token) {
        navEL.innerHTML = `
        <a id="home" class="active">Home</a>
        <div id="user">
        <a id="logout" href="javascript:void(0)">Logout</a>
        </div>
        <p class="email">Welcome, <span>${email}</span></p>
        `
    } else {
        navEL.innerHTML = `
        <a id="home" class="active">Home</a>
        <div id="guest">
        <a id="login" href="#">Login</a>
        <a id="register" href="#">Register</a>
        </div>
        <p class="email">Welcome, <span>guest</span></p>
        `
    }
    const registerBtn = document.querySelector('#register');
    const logoutAEl = document.getElementById('logout')
    const logingAEl = document.getElementById('login');
    const homeEL = document.getElementById('home')

    registerBtn?.addEventListener('click', registration)
    logoutAEl?.addEventListener('click', logOut)
    logingAEl?.addEventListener('click', loadingPage)
    homeEL?.addEventListener('click', loadHomePage)
}
function loadingPage() {
    mainEl.innerHTML = ''
    const logingViewSection = document.createElement('section')
    logingViewSection.id = 'login-view'
    const h2Login = document.createElement('h2');
    h2Login.textContent = 'Login';

    const formLogin = document.createElement('form')
    formLogin.id = 'login'

    formLogin.innerHTML = `
          <label>Email: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <p class="notification"></p>
                <button>Login</button>
    `
    logingViewSection.appendChild(h2Login);
    logingViewSection.appendChild(formLogin)
    mainEl.appendChild(logingViewSection)

    formLogin.addEventListener('submit', handlerLogin)

    async function handlerLogin(e) {

        e.preventDefault();
        try {

            const formData = new FormData(e.currentTarget);
            const email = formData.get('email');
            const password = formData.get('password')

            const response = await fetch(logingUserUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            if (!response.ok) {
                throw new Error('Response is not ok!')
            }
            const data = await response.json()
            localStorage.setItem('token', data.accessToken)
            localStorage.setItem('userId', data._id)
            localStorage.setItem('email',data.email )
            loadNavBar()
            loadHomePage()
        } catch (error) {
            const notificationPEl = document.querySelector('.notification');
            notificationPEl.textContent = 'Error: Incorrect password'
        }
    }
}
function registration(e) {
    e.preventDefault()
    mainEl.innerHTML = ''
    const registerSection = document.createElement('section')
    registerSection.setAttribute('id', 'register-view')
    const registerBrn = document.createElement('button')
    registerBrn.textContent = 'Register'
    const h2EL = document.createElement('h2');
    h2EL.textContent = 'Register'
    const registerForm = document.createElement('form')
    registerForm.setAttribute('id', 'register')
    registerForm.innerHTML = `
                <label>Email: 
                <input type="text" name="email"></label>
                <label>Password: 
                <input type="password" name="password"></label>
                <label>Repeat:
                <input type="password" name="rePass"></label>
                <p class="notification"></p>
    `
    registerSection.appendChild(h2EL)
    registerForm.appendChild(registerBrn)
    registerSection.appendChild(registerForm)
    mainEl.appendChild(registerSection)

    registerBrn.addEventListener('click', (e) => registerConfirm(e))

    async function registerConfirm(e) {
        e.preventDefault()
        const notificationEl = document.querySelector('.notification')
        const formData = new FormData(registerForm);
        const email = formData.get('email');
        const password = formData.get('password');
        const retryPassowrd = formData.get('rePass')


        try {
            if (password !== retryPassowrd) {
                notificationEl.textContent = 'Passwords do not match!'
                return
            }
            if (!email.includes('@')) {
                notificationEl.textContent = 'Invalid email'
                return
            }
            const response = await fetch(registerPostUrl, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            if (!response.ok) {
                throw new Error('Invalid data')
            }
            const data = await response.json()



            localStorage.setItem('token', data.accessToken)
            localStorage.setItem('userId', data._id)
            localStorage.setItem('email', data.email)
            loadNavBar()
            loadHomePage()
        } catch (error) {

        }

    }


}

async function logOut() {
    const token = localStorage.getItem('token')

    try {
        await fetch(logoutUserUrl, {
            headers: {
                'X-Authorization': token
            }
        })
        localStorage.removeItem('token');
        localStorage.removeItem('userId')
        loadNavBar()
        loadHomePage()
    } catch (error) {
        console.log(error)
    }


}

function loadHomePage() {
    mainEl.innerHTML = ''
    const homeViewSection = document.createElement('section');
    homeViewSection.id = 'home-view'

    const token = localStorage.getItem('token')
    homeViewSection.innerHTML = `
     <fieldset id="main">
                <legend>Catches</legend>
                <div id="catches">
                  
                    </div>
                </div>
            </fieldset>
            <aside>
                <button class="load">Load</button>
                <form id="addForm">
                    <fieldset>
                        <legend>Add Catch</legend>
                        <label>Angler</label>
                        <input type="text" name="angler" class="angler" ${token ? '' : 'disabled'} />
                        <label>Weight</label>
                        <input type="number" name="weight" class="weight" ${token ? '' : 'disabled'} />
                        <label>Species</label>
                        <input type="text" name="species" class="species"  ${token ? '' : 'disabled'}/>
                        <label>Location</label>
                        <input type="text" name="location" class="location"  ${token ? '' : 'disabled'}/>
                        <label>Bait</label>
                        <input type="text" name="bait" class="bait"  ${token ? '' : 'disabled'}/>
                        <label>Capture Time</label>
                        <input type="number" name="captureTime" class="captureTime" ${token ? '' : 'disabled'} />
                        <button class="add" ${token ? '' : 'disabled'}>Add</button>
                    </fieldset>
                </form>
            </aside>
        </section>
    
    `
    mainEl.appendChild(homeViewSection)

    const addFormEl = document.getElementById('addForm')
    addFormEl.addEventListener('submit', createCatch)

    async function createCatch(e) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
       try {
         const response = await fetch(baseCaches, {
            method: 'POST',
            headers: {
                'X-Authorization': token,
                'Content-Type': "application/json",
            },
            body: JSON.stringify(data)
         })

         const dataCaches = await response.json()
         console.log(dataCaches)
       } catch (error) {
        
       }

    }
    const loadBtn = document.querySelector('.load');
    loadBtn.addEventListener('click', loadCatches)

    async function loadCatches(e) {

        try {
            const response = await fetch(`${baseCaches}`);
            const data = await response.json()
            const allCatches = document.getElementById('catches');
            allCatches.innerHTML = ''
            const userId = localStorage.getItem('userId')

            for (const singleCatch of data) {

                const isOwner = userId === singleCatch._ownerId
                const catchDiv = document.createElement('div');
                catchDiv.className = 'catch'

                catchDiv.innerHTML = `
             <label>Angler</label>
                    <input type="text" class="angler" value="${singleCatch.angler}" ${isOwner ? '' : 'disabled'}>
                     <label>Weight</label>
                    <input type="text" class="weight" value="${singleCatch.weight}" ${isOwner ? '' : 'disabled'}>
                     <label>Species</label>
                     <input type="text" class="species" value="${singleCatch.species}" ${isOwner ? '' : 'disabled'}>
                     <label>Location</label>
                      <input type="text" class="location" value="${singleCatch.location}" ${isOwner ? '' : 'disabled'}>
                      <label>Bait</label>
                      <input type="text" class="bait" value="${singleCatch.bait}" ${isOwner ? '' : 'disabled'}>
                      <label>Capture Time</label>
                      <input type="number" class="captureTime" value="${singleCatch.captureTime}" ${isOwner ? '' : 'disabled'}>
                      <button class="update" data-id=${singleCatch._id}" ${isOwner ? '' : 'disabled'}>Update</button >
                       <button class="delete" data-id="${singleCatch._id}" ${isOwner ? '' : 'disabled'}>Delete</button>
            `
                allCatches.appendChild(catchDiv)

                const updateBtn = catchDiv.querySelector('.update');
                const deleteBtn = catchDiv.querySelector('.delete')

                updateBtn.addEventListener('click', updateCatch);
                deleteBtn.addEventListener('click', deleteCatch);

                async function updateCatch(e) {

                    const token = localStorage.getItem('token')
                    const angler = catchDiv.querySelector('.angler').value
                    const weight = catchDiv.querySelector('.weight').value
                    const species = catchDiv.querySelector('.species').value
                    const location = catchDiv.querySelector('.location').value
                    const bait = catchDiv.querySelector('.bait').value
                    const captureTime = catchDiv.querySelector('.captureTime').value

                    try {
                        const response = await fetch(`${baseCaches}/${singleCatch._id}`, {
                            method: 'PUT',
                            headers: {
                                'X-Authorization': token,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
                        })
                        const data = await response.json()


                    } catch (error) {
                        console.log('error')
                    }


                }

                async function deleteCatch(e) {
                    const token = localStorage.getItem('token')
                    try {
                        await fetch(`${baseCaches}/${singleCatch._id}`, {
                            method: 'DELETE',
                            headers: {
                                'X-Authorization': token
                            }
                        })
                    } catch (error) {

                    }
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
}

loadNavBar()
loadHomePage()
