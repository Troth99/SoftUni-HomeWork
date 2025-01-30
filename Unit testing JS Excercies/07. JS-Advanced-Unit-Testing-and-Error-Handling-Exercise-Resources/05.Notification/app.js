function notify(message) {


  const notificationEL = document.getElementById('notification');

  notificationEL.style.display = 'block';
  notificationEL.textContent = message
  if (!notificationEL.hasAttribute('data-click-bound')) {
    notificationEL.addEventListener('click', (e) => {
      notificationEL.style.display = 'none'
    })
  }
  notificationEL.setAttribute('data-click-bound', 'true')
}