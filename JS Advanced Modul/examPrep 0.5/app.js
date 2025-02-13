window.addEventListener('load', solution);

function solution() {

  //get the inputs

  const employeeEl = document.getElementById('employee')
  const categoryEl = document.getElementById('category');
  const urgancyEl = document.getElementById('urgency');
  const teamEL = document.getElementById('team');
  const descriptionEl = document.getElementById('description');

  const previewEL = document.querySelector('.preview-list')

  const pendingEl = document.querySelector('.pending-list')

  const resolvedEL = document.querySelector('.resolved-list')

  //get the buttons
  const addBtn = document.getElementById('add-btn')

  addBtn.addEventListener('click', addingFunction)

  function addingFunction(e) {
    e.preventDefault()

    const inputs = [
      employeeEl.value,
      categoryEl.value,
      urgancyEl.value,
      teamEL.value,
      descriptionEl.value
    ]

    if (inputs.some(emptyInput => emptyInput === '')) {
      return
    }

    //creating paragrahps

    const fromParagrahp = document.createElement('p');
    fromParagrahp.textContent = `From: ${employeeEl.value}`
    const categoryParagrahp = document.createElement('p')
    categoryParagrahp.textContent = `Category: ${categoryEl.value}`
    const urgencyParagrahp = document.createElement('p');
    urgencyParagrahp.textContent = `Urgency: ${urgancyEl.value}`
    const teamParagrahp = document.createElement('p');
    teamParagrahp.textContent = `Assigned to: ${teamEL.value}`;
    const descriptionParagrahp = document.createElement('p');
    descriptionParagrahp.textContent = `Description: ${descriptionEl.value}`

    //create article and append to childs
    const articlePreview = document.createElement('article');
    articlePreview.appendChild(fromParagrahp);
    articlePreview.appendChild(categoryParagrahp);
    articlePreview.appendChild(urgencyParagrahp);
    articlePreview.appendChild(teamParagrahp);
    articlePreview.appendChild(descriptionParagrahp);

    //create buttons

    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    const continueBtn = document.createElement('button');
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.textContent = 'Continue'

    //create li with class and append

    const liPreview = document.createElement('li');
    liPreview.setAttribute('class', 'problem-content')

    liPreview.appendChild(articlePreview)
    liPreview.appendChild(editBtn)
    liPreview.appendChild(continueBtn)

    previewEL.appendChild(liPreview)
    addBtn.disabled = true

//store information from the input

    let employee = employeeEl.value;
    let category = categoryEl.value
    let urgency = urgancyEl.value
    let team = teamEL.value
    let description = descriptionEl.value

    //clear the input
    employeeEl.value = ''
    categoryEl.value =''
    urgancyEl.value =''
    teamEL.value =''
    descriptionEl.value =''


    editBtn.addEventListener('click', editing)

    //store information from the input
   
    function editing(e) {

      employeeEl.value = employee
      categoryEl.value = category
      urgancyEl.value = urgency
      teamEL.value = team
      descriptionEl.value = description

      addBtn.disabled = false

      liPreview.remove()

    }

    continueBtn.addEventListener('click', continieFunction)

    function continieFunction(e){

        let continiueArticle = document.createElement('article')
        continiueArticle = articlePreview.cloneNode(true)

        const resolveBtn = document.createElement('button')
        resolveBtn.setAttribute('class', 'resolve-btn')
        resolveBtn.textContent = 'Resolved'

        const problemLi = document.createElement('li');
        problemLi.setAttribute('class', 'problem-content')

        problemLi.appendChild(continiueArticle)
        problemLi.appendChild(resolveBtn)

        pendingEl.appendChild(problemLi)
        liPreview.remove()


        resolveBtn.addEventListener('click', resolving)

        addBtn.disabled = false

        function resolving(e){

          let resolvedArticle = document.createElement('article')
          resolvedArticle = continiueArticle.cloneNode(true);

          const resolvedLi = document.createElement('li')
          resolvedLi.setAttribute('class', 'problem-content')

          const clearBtn = document.createElement('button');
          clearBtn.setAttribute('class', 'clear-btn');
          clearBtn.textContent = 'Clear'

          resolvedLi.appendChild(resolvedArticle);
          resolvedLi.appendChild(clearBtn);

          resolvedEL.appendChild(resolvedLi)
          problemLi.remove()

          clearBtn.addEventListener('click', clearing)

          function clearing(e){
            resolvedEL.remove()
          }

        }

    }
  }

}




