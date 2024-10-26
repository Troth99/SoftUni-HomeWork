function passwordValidation(pw) {

    function checkLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }

    }

    function checkAlphanumeric(pass) {
        let pattern = /^[A-Za-z0-9]+$/;

        if (pattern.test(pass)) {
            return true
        } else {
            console.log(`Password must consist only of letters and digits`);
            return false
        }

    }
    function checkMin2Digits(pass) {
        let pattern = /[0-9]{2,}/

        if (pattern.test(pass)) {
            return true
        } else {
            console.log(`Password must have at least 2 digits`);
            return false
        }
    }

    let isValidLength = checkLength(pw)
    let isAlhapnumeric = checkAlphanumeric(pw)
    let checkDigits = checkMin2Digits(pw)

    if (isValidLength && isAlhapnumeric && checkDigits) {
        console.log(`Password is valid`);

    }

}


passwordValidation(`MyPass123`)