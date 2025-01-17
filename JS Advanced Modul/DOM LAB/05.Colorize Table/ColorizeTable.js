function colorize() {
    const tdElelements = document.querySelectorAll("table tr")
    let index = 0
      for (const element of tdElelements) {
        index++
        if (index % 2 === 0){
            element.style.background = 'Teal'
        }
      }
            
}