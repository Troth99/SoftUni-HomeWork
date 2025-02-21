function loadRepos() {
  const url = "https://api.github.com/users/testnakov/repos"

  const request = new XMLHttpRequest();
   const id = document.getElementById('res')
  request.addEventListener('readystatechange', () => {
   if(request.readyState === 4 && request.status === 200){
      id.textContent =request.responseText
   }
  })

request.open('GET', url)
request.send('GET', url)

}