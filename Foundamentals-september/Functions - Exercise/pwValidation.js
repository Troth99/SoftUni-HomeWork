function passwordValidation(password){

    let isValid = true

    let counter = 0

    let digits = 0
    let isOnlyLetters = true
    for (let i = 0; i< password.length; i++){

    
    counter++
    let currentIndex = password[i]

    let charcode = currentIndex.charCodeAt()

    if (charcode >= 48 && charcode <= 57){
        digits ++

    }else if (!((charcode >= 65 &&charcode <= 90) || (charcode>=97 && charcode <= 122))){
        isOnlyLetters = false
    }
 
       

}
    if (counter < 6 || counter >= 10){
        console.log("Password must be between 6 and 10 characters");
        isValid = false
    }

    if (isOnlyLetters === false){
        console.log(`Password must consist only of letters and digits`);
        isValid = false
    }
    if (digits < 2){
        console.log(`Password must have at least 2 digits`);
        isValid = false
        
    }
    if (isValid){
        console.log(`Password is valid`);
        
    }

 }


passwordValidation('Pa$s$s');
//passwordValidation('MyPass123')
//passwordValidation('logIn')