function attachEvents() {

  const url = 'http://localhost:3030/jsonstore/phonebook'
  const loadBtn = document.getElementById('btnLoad');
  const phoneBookEl = document.getElementById('phonebook')
  const createBtn = document.getElementById('btnCreate')
  const personName = document.getElementById("person");
  const phoneEl = document.getElementById('phone');
  loadBtn.addEventListener('click', loadingData)

  async function loadingData(e) {

    try {
      phoneBookEl.innerHTML = ''
      const response = await fetch(url);
      const data = await response.json()
      const personEntries = Object.values(data)
    

      personEntries.forEach(person => {
        const liEL = document.createElement('li')
        liEL.textContent = `${person.person}: ${person.phone}`
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        liEL.appendChild(deleteBtn)
        phoneBookEl.appendChild(liEL)
        const id = person._id
        deleteBtn.addEventListener('click', (e) => deleteFunc(e, id))

      });
      async function deleteFunc(e, id) {
        await fetch(`${url}/${id}`, {
          method: 'DELETE'
        })

      }
    } catch (err) {
      console.log('Error')
    };

  }

  createBtn.addEventListener('click', createinContac)

  async function createinContac(e) {
    try {
      const person = personName.value
      const phone = phoneEl.value
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ person, phone})
      })
      const data = await response.json()
      personName.value = ''
      phoneEl.value = ''
      loadingData()
    } catch (error) {
      console.log('Error')
    }

  }


}

attachEvents();