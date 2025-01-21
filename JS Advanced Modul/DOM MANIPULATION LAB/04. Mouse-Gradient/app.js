function attachGradientEvents() {

    const resultEl = document.getElementById('result');
    const gradientEl = document.getElementById('gradient')

    gradientEl.addEventListener('mousemove', (event) => {
        const currentMousePosition = event.offsetX

        const elementWidth = event.currentTarget.clientWidth;

        const persentage = Math.floor((currentMousePosition / elementWidth) * 100)

        resultEl.textContent = `${persentage}%`

    })



}