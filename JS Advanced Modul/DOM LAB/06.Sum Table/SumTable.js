function sumTable() {
    const sumEl = document.getElementById('sum')
    const productElements = document.querySelectorAll('table tr td:nth-of-type(2):not(#sum)')
    let totalSum = 0
    for (const element of productElements) {
       totalSum += Number(element.textContent)
    }
    sumEl.textContent = totalSum;
}