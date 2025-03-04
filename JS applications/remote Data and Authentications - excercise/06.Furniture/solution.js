function solve() {
  const baseFurnitureUrl = 'http://localhost:3030/data/furniture';

  async function notLoggedIn() {
    const divWrapperEl = document.querySelector('.wrapper')
    console.log(divWrapperEl)
    console.log('test')
    divWrapperEl.innerHTML = ''
    const response = await fetch(baseFurnitureUrl)
    const data = await response.json()
    
    console.log(data)
    localStorage.setItem('clearWrapper', 'true');
    if (localStorage.getItem('clearWrapper') === 'true') {
      divWrapperEl.innerHTML = ''; // Изчистваме съдържанието
    }
    localStorage.removeItem('clearWrapper'); // Премахваме стойността
    window.location.href = 'home.html'
  }


  notLoggedIn()
}