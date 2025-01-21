const movieList = document.querySelector('#movie-list');

//create our movie element
const fistmovieElement = document.createElement('li');
fistmovieElement.textContent = 'X-men';

console.log(fistmovieElement);

//append to movie-list
movieList.appendChild(fistmovieElement);

//create anchor element
const matrixAnchorElement = document.createElement('a')

//create movie element with link
matrixAnchorElement.href = "https://bg.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0%D1%82%D0%B0";
matrixAnchorElement.textContent = 'The Matrix';

matrixAnchorElement.target = '_balnk';
const matrixListElement = document.createElement('li');
matrixListElement.appendChild(matrixAnchorElement);

movieList.appendChild(matrixListElement)

//console.log(matrixAnchorElement);

//create shallow copy of elemnt
const matrixShallowCopy = matrixListElement.cloneNode();
//console.log(matrixAnchorElement);

//create deep copy of element

//const matrixListDeepCopy = matrixAnchorElemens

const matrixListDeepCopy = matrixListElement.cloneNode(true);


//delete element
//istmovieElement.parentElement.removeChild(fistmovieElement);

matrixListElement.remove()

