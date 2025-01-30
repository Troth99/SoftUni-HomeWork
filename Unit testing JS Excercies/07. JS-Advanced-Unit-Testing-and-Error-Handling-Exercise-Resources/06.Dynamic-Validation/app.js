
function validate() {
    const emailPatternt = /^[a-z]+@[a-z]+\.[a-z]+$/g
    const input = document.getElementById('email')


    input.addEventListener('change', (e) => {
      
        if (emailPatternt.test(e.target.value)){
           e.target.classList.remove('error')
           
        }else {
            e.target.classList.add('error')
        }
    })
  

}