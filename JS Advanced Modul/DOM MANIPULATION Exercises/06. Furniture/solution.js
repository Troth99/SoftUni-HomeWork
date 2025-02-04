function solve() {

  const textArea = document.querySelector('#exercise > textarea');
  const generateBtn = document.querySelectorAll('button')[0]

  generateBtn.addEventListener('click', addItem);



  function addItem() {
    const input = textArea.value.trim()

    const items = JSON.parse(input)


    items.forEach(item => {

      const itemsObj = {
        image: item.img,
        name: item.name,
        price:item.price,
        decFac: item.decFactor,

      }

      //create TR element in DOM
      const tableEl = document.querySelector('tbody')
      //append TR element to the tbody
      let trEl = document.createElement('tr')
      const trApend = tableEl.appendChild(trEl)
      //create tables for each item
      
      Object.values(itemsObj).forEach((value, index) => {
        const tdCr = document.createElement('td');
        if (index === 0) {
          const imgEl = document.createElement('img')
          imgEl.src = value
          tdCr.appendChild(imgEl);
          
        }else {
          const pEl = document.createElement('p');
          pEl.textContent = value;
          tdCr.appendChild(pEl)
        }

        trApend.appendChild(tdCr)
      })
   
      //createCheckbox
      const tdCheck = document.createElement('td');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      tdCheck.appendChild(checkBox);
      trEl.appendChild(tdCheck)

    });
  }
const btnBuy = document.querySelectorAll('button')[1]

btnBuy.addEventListener('click', buying);

function buying(){
  const checkBoxes = document.querySelectorAll('input[type=checkbox]')
  let totalPrice = 0
  let boughtFurniture = []
  let totalDecFac = 0
  let checked = 0
  checkBoxes.forEach(check => {
   if (check.checked){
    const row = check.closest('tr');
    const nameItem = row.children[1].textContent
    boughtFurniture.push(nameItem)
    const price = Number(row.children[2].textContent)
    const decFac = Number(row.children[3].textContent)
    totalDecFac += decFac
    totalPrice += price
    checked ++
   }
  })
  let avgDecFac= totalDecFac / checked
  const textAreaOutput = document.querySelectorAll('textarea')[1];
  textAreaOutput.value += `Bought furniture: ${boughtFurniture.join(', ')}\n`
  textAreaOutput.value += `Total price: ${totalPrice.toFixed(2)}\n`
  textAreaOutput.value += `Average decoration factor: ${avgDecFac}`

}

}

//[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]