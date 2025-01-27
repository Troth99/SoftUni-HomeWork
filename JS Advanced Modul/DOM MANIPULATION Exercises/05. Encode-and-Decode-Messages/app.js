function encodeAndDecodeMessages() {

    const encodeButton = document.querySelectorAll('button')[0];

    const textInputs = document.querySelectorAll("#main textarea")
    const decodeBtn = document.querySelectorAll('button')[1]

    //listener for encode function button
    encodeButton.addEventListener('click', encodeFunction);
    //listener for decode function button
    decodeBtn.addEventListener('click', decoding);


    function encodeFunction() {
        //turn it into array
        const input = Array.from(textInputs[0].value)
        //encoded msg
        let encodeMsg = ''
        if(!textInputs[0].value.trim()) return
        //foreach for every word in the array to get tis code
        for (const word of input) {
            let char = word.charCodeAt()
            let encodedWord = String.fromCharCode(char + 1)
            encodeMsg += encodedWord; 
           
        }
        //clear the text Area
        textInputs[0].value = ''
        textInputs[1].value = encodeMsg

    }

    function decoding() {
        //decoded msg input
        let input = Array.from(textInputs[1].value)
        if(!textInputs[1].value.trim()) return
        let decodedMsg = ''

        for (const word of input) {
            let currentChar  = word.charCodeAt();
            let decodedChar  = String.fromCharCode(currentChar - 1);
            decodedMsg += decodedChar
            
         
        }
      
  
        textInputs[1].value = decodedMsg
    }

}