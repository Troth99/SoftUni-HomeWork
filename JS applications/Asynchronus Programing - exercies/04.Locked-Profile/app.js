function lockedProfile() {

    const getUrl = 'http://localhost:3030/jsonstore/advanced/profiles'

    const mainEl = document.getElementById('main');
    mainEl.innerHTML = ''
    fetch(getUrl)
        .then((response) => {
            return response.json()
        }).then((result) => {
            const entries = Object.entries(result)

            entries.forEach((user) => {
                const name = user[1].username
                const email = user[1].email;
                const age = user[1].age
                const createDivEl = document.createElement('div')
                createDivEl.setAttribute('class', 'profile')
                createDivEl.innerHTML = `
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${name}" disabled readonly />
				<div class="user1Username">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${email}" disabled readonly />
					<label>Age:</label>
					<input type="number" name="user1Age" value="${age}" disabled readonly />
				</div>
				<button>Show more</button>
            `
                mainEl.appendChild(createDivEl)
            })

            const user1UsernameEL = document.querySelectorAll('.user1Username');
   
            user1UsernameEL.forEach((userInfo) => {
                userInfo.style.display = 'none'
            })


            const showMoreBtn = document.querySelectorAll('#main .profile button')

            for (const button of showMoreBtn) {
                button.addEventListener('click', (e) => showMore(e))
            }

            function showMore(e) {
        
                const button = e.currentTarget;
                const profile = button.parentElement;
               
                const userDetails = profile.querySelector('.user1Username');
                const isLocked = profile.querySelector('input[value="lock"]')

                if(isLocked.checked){
                   console.log('Try again');
                   return
             }else {
                 userDetails.style.display = userDetails.style.display === 'none' ? 'block': 'none'
                 button.textContent = button.textContent === 'Show more' ? 'Hide it': 'Show more'
             }
            }

        }).catch((err) => [
            console.log('Error')
        ])


}