function solve() {

    const input = document.getElementById('input');

    const menuEl = document.getElementById('selectMenuTo')
    const binaryEl = document.createElement('option');
    binaryEl.value = 'binary'
    binaryEl.textContent = 'Binary';
    menuEl.appendChild(binaryEl)

    const hexaDecimalEl = document.createElement('option');
    hexaDecimalEl.value = 'hexadecimal';
    hexaDecimalEl.textContent = 'Hexadecimal'
    menuEl.appendChild(hexaDecimalEl)

    const buttonEl = document.querySelector('button');

    buttonEl.addEventListener('click', converting);

    const result = document.getElementById('result');

    
    function converting(){
        const options = document.getElementById('selectMenuTo').options

        const number = Number(input.value);
        
        if(options[options.selectedIndex].value === 'binary'){
            const binary = number.toString(2);
            result.value = binary
           
            
        }else if (options[options.selectedIndex].value === 'hexadecimal'){
           const hexadecimal = number.toString(16).toUpperCase()
           result.value = hexadecimal
            
        }
        
    }
}