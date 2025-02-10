window.addEventListener("load", solve);

function solve() {

  //capture the elements
  const snowManElementName = document.getElementById('snowman-name');
  const snowManHeightElement = document.getElementById('snowman-height');
  const locationElement = document.getElementById('location');
  const creatorElement = document.getElementById('creator-name');
  const specialElement = document.getElementById('special-attribute');

  const snowmanPreviewElement = document.querySelector('.snowman-preview');
  const snowListElement = document.querySelector('.snow-list');
  const imageElement = document.getElementById('back-img');
  

  const addBtn = document.querySelector('.add-btn');

  addBtn.addEventListener('click', addingElements)

  function addingElements(e) {
    e.preventDefault()

    const inputs = [
      snowManElementName.value,
      snowManHeightElement.value,
      locationElement.value,
      creatorElement.value,
      specialElement.value
    ]
    //check if all inputs are not empty
    if (inputs.some(input => input.trim() === '')) {
      return
    }

    //save the info from the input
    let snowManeName = snowManElementName.value;
    let snowManHeight = snowManHeightElement.value;
    let location = locationElement.value;
    let creator = creatorElement.value;
    let special = specialElement.value

    //create the Paragraphs

    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = `Name: ${snowManElementName.value}`;
    const heightParagraph = document.createElement('p');
    heightParagraph.textContent = `Height: ${snowManHeightElement.value}`;
    const locationParagraph = document.createElement('p');
    locationParagraph.textContent = `Location: ${locationElement.value}`;
    const creatorParagraph = document.createElement('p');
    creatorParagraph.textContent = `Creator: ${creatorElement.value}`
    const atributeParagraph = document.createElement('p');
    atributeParagraph.textContent = `Atribute: ${specialElement.value}`

    //create Article and append all childrens;
    const articleELementAdd = document.createElement('article');
    articleELementAdd.appendChild(nameParagraph);
    articleELementAdd.appendChild(heightParagraph);
    articleELementAdd.appendChild(locationParagraph);
    articleELementAdd.appendChild(creatorParagraph);
    articleELementAdd.appendChild(atributeParagraph);

    //create divClass for buttons;
    const divElement = document.createElement('div');
    divElement.classList.add('btn-container');

    //creating the buttons
    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    const nextBtn = document.createElement('button');
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = 'Next'

    divElement.appendChild(editBtn);
    divElement.appendChild(nextBtn);
    //create unordered list and append the childs

    const liElementForAdd = document.createElement('li');
    liElementForAdd.classList.add('snowman-info')

    liElementForAdd.appendChild(articleELementAdd);
    liElementForAdd.appendChild(divElement);

    //apend it to the main
    snowmanPreviewElement.appendChild(liElementForAdd)

    //clear the input
    snowManElementName.value = ''
    snowManHeightElement.value = ''
    locationElement.value = ''
    creatorElement.value = ''
    specialElement.value = ''
    //disable the button
    addBtn.disabled = true


    //creating the edit button
    editBtn.addEventListener('click', edit)

    function edit(e) {
      snowManElementName.value = snowManeName
      snowManHeightElement.value = snowManHeight
      locationElement.value = location
      creatorElement.value = creator
      specialElement.value = special

      addBtn.disabled = false

      divElement.remove();
      liElementForAdd.remove()
    }

    //creating next button

    nextBtn.addEventListener('click', next)

    function next(e) {

      //clone article

      let articleNext = articleELementAdd.cloneNode(true);

      const sendBtn = document.createElement('button');
      sendBtn.classList.add('send-btn')
      sendBtn.textContent = 'Send';

      articleNext.appendChild(sendBtn)

      //create LI snowmanContent

      const nextLi = document.createElement('li')
      nextLi.classList.add('snowman-content')

      nextLi.appendChild(articleNext)

      snowListElement.appendChild(nextLi)

      liElementForAdd.remove()

      sendBtn.addEventListener('click', send)

      function send(e) {
        nextLi.remove()

        const backBtn = document.createElement('button');
        backBtn.classList.add('back-btn');
        backBtn.textContent = 'Back'

        document.body.appendChild(backBtn)
        imageElement.hidden = false

        backBtn.addEventListener('click', () => {
          window.location.reload()
        })
      }
    }
  }



}
