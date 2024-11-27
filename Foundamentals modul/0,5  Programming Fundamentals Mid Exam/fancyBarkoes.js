function barcodes(arr) {

    let pattern = /(@)(#{1,})(?<product>[A-Z][A-Za-z\d]{4,}[A-Z])\1(#{1,})/



    let countOfBarcordes = Number(arr.shift());


    let defaultProductGroup = `00`
    for (let i = 0; i < countOfBarcordes; i++) {

        let barcode = arr[i]
        let validCodes = pattern.exec(barcode)

        if (pattern.exec(barcode)) {

            let product = validCodes.groups.product
            let numbersFromTheProduct = product.match(/\d/g)

            if (numbersFromTheProduct !== null) {
                let productGroup = numbersFromTheProduct.reduce((a, c) => a + c,)
                console.log(`Product group: ${productGroup}`);

            } else {
                console.log(`Product group: ${defaultProductGroup}`);

            }


        } else {
            console.log(`Invalid barcode`);

        }



    }


}

/*barcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])*/


barcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
