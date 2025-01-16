function calc() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');

    const number1 = Number(num1.value);
    const number2 = Number(num2.value);

    const sum = number1 + number2;
    document.getElementById('sum').value = sum
}
