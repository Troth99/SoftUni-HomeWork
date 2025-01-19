function extract(content) {

    let textEl = document.getElementById('content')

    const pattern = /\(([^\(\)]+)\)/gm
    const matches = textEl.textContent.matchAll(pattern)
    const matchedArr = Array.from(matches)
    const returnText = matchedArr.map(match => match[1]);
    return returnText.join('; ')



}