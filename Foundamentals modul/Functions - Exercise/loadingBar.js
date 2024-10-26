function loadingBar(number) {

    let loadingG = []

    function getTheLoading(n) {

        let index = 0

        for (let i = 0; i < 10 * n / 100; i++) {

            loadingG += `%`
            index++
        }

        for (let j = 10; j > index; j--) {
            loadingG += `.`
        }

        return loadingG
    }



    let loading = getTheLoading(number)

    let percentForLoading = (number * 100) / 100


    if (percentForLoading !== 100) {
        console.log(`${percentForLoading}% [${loading}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`${percentForLoading}% Complete!`);
        console.log(`[${loading}]`);

    }


}


loadingBar(100)