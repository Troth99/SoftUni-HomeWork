function extractText() {
    const liElements = document.querySelectorAll("#items > li");
    console.log(liElements)
    const items = Array.from(liElements).map((li) => {
        return li.textContent
    })

    const resultTextArea= document.getElementById("result")
    resultTextArea.value = items.join('\n')
}