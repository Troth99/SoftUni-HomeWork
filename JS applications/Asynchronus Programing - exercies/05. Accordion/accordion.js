function solution() {
  const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
  const detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details';
  const sectionEL = document.getElementById('main');

  async function request() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      for (const element of data) {
        const createdDivEl = document.createElement('div');
        createdDivEl.classList.add('accordion');

        createdDivEl.innerHTML = `
          <div class="head">
            <span>${element.title}</span>
            <button class="button" id="${element._id}">More</button>
          </div>
          <div class="extra" style="display: none;"></div>
        `;

        sectionEL.appendChild(createdDivEl);
      }

      const showMore = document.querySelectorAll('.button');
      for (const element of showMore) {
        element.addEventListener('click', extraDetails);
      }

    } catch (error) {
      console.error('Error');
    }
  }

  async function extraDetails(e) {
    try {
      const button = e.currentTarget;
      let currentId = button.id;
      const extra = button.parentElement.parentElement.querySelector('.extra');

      const responseDetails = await fetch(`${detailsUrl}/${currentId}`);
      const dataDetails = await responseDetails.json();
      const content = dataDetails.content;

      if (button.textContent.toLowerCase() === 'more') {
        extra.innerHTML = `<p>${content}</p>`;
        extra.style.display = 'block';
        button.textContent = 'less';
      } else {
        extra.style.display = 'none';
        button.textContent = 'more';
      }

    } catch (error) {
      console.error('Error');
    }
  }

  request();
}

solution();
