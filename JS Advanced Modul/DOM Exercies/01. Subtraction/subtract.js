function subtract() {
    const num1 = document.getElementById('firstNumber').value;
    const num2 = document.getElementById('secondNumber').value
    const resultEl = document.getElementById('result');
    const result = Number(num1) - Number(num2);
    resultEl.textContent = result
    
}