function calorie(input) {

    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        let element = input[i];
        let value = Number(input[i + 1])
        obj[element] = value
    }


    console.log(obj);

}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])