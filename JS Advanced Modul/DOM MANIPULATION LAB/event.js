const loremElement = document.getElementById('Lorem');
//add event handlign with DOM property;
loremElement.onclick = function(event){

}
//evenet handlign with HTML atribut
function showLessHandler(event){
    const loremEl = document.getElementById('Lorem');
    loremEl.textContent = loremEl.textContent.substring(0, 20) + '...'
    
}

//add Dom event handles
const newMovieInput = document.getElementById('new-movie');
const addMovieButton = document.getElementById('add-movie');
const movieUlEl = document.getElementById('movie-list');

//attach event listening
addMovieButton.addEventListener('click', newMovieClickHandler)

function newMovieClickHandler(event) {
    const inputValue = newMovieInput.value;
    console.log(inputValue);
    
    const liEl = document.createElement('li')
    liEl.textContent = inputValue

    movieUlEl.prepend(liEl)
    newMovieInput.value = ''
}

//after 5 seconds remove event listener
setTimeout(() => {
    addMovieButton.removeEventListener('click', newMovieClickHandler)
    console.log(`has deleted`);
    
}, 5000);


//Using this
addMovieButton.addEventListener('click' , function (event) {
// console.log(event.currentTarget);
// console.log();


})
//print on every key stroke

newMovieInput.addEventListener('input', (event) =>{
    //console.log(event);
});

//print on change
newMovieInput.addEventListener('change', (event) =>{
    console.log(event.currentTarget.value);
    
});
