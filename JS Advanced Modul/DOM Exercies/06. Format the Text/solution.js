function solve() {
  //getting the elements

  const textAreaEL = document.getElementById('input');
  const outputEl = document.getElementById('output');
  outputEl.textContent = '' //clear the output
  const text = textAreaEL.value;

  //split sentences by '.' filter in case they have empty slots and trim them map all elemnts with trim and add .
  const sentences = text.split('.').filter(el => el.trim() !== '').map(el => el.trim() + '.');

  //for loop to count every 3 sentences make a copy with slice and join it with empty string

  for (let i = 0; i < sentences.length; i += 3) {
    const paragraphSentences = sentences.slice(i, i + 3)
    const paragraphText = paragraphSentences.join(` `);

    // creater new div child with paragraph and append it with the text.Content

    const pEl = document.createElement('p');
    pEl.textContent = paragraphText;
    outputEl.appendChild(pEl)
  }


}



