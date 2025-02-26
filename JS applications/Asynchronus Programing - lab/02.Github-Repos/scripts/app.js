function loadRepos() {
	const reposUL = document.getElementById('repos');
	const username = document.getElementById('username').value
	const url = `https://api.github.com/users/${username}/repos`

	fetch(url).then(function(response){
		return response.json()
	}).then(function(data){
		reposUL.innerHTML =''

		data.forEach(repo => {
			const anchroEl = document.createElement('a')
			anchroEl.href = repo.html_url
			anchroEl.textContent = repo.full_name

			const liEL = document.createElement('li')
			liEL.appendChild(anchroEl)
			reposUL.appendChild(liEL)
		});
		console.log(data)
	}).catch((err) => {
		console.log(err)
	})
}