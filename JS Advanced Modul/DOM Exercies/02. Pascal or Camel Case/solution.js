function solve() {
  const namingEl = document.getElementById('naming-convention').value
  const textEl = document.getElementById('text').value.toLowerCase()
  const result = document.getElementById(`result`);

  const resultInArray = [];

  if (namingEl === `Camel Case`){
    const spllitedElement = textEl.split(` `);
    for (const word of spllitedElement) {
      if (resultInArray.length < 1 ){
        resultInArray.push(word)
        continue
      }
      let camelCase = word[0].toUpperCase()+ word.substring(1).toLowerCase()
      resultInArray.push(camelCase)
    }
    
  }else if (namingEl === `Pascal Case`){
    const spllitedElement = textEl.split(` `);
    for (const word of spllitedElement) {
      let pascalCase = word[0].toUpperCase() + word.substring(1).toLowerCase()
      resultInArray.push(pascalCase)
    }
  }else {

    result.textContent = 'Error!'
    return
  }

  result.textContent = resultInArray.join(``)
  
}