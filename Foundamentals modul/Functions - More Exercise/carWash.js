function carWash(arr) {
    function washPercentage(arr) {
        let carWash = 0
        for (let i = 0; i < arr.length; i++) {

            let currentIndex = arr[i]

            switch (currentIndex) {
                case `soap`: carWash += 10; break;
                case `water`: carWash += carWash * 0.2; break;
                case `vacuum cleaner`: carWash += carWash * 0.25; break;
                case `mud`: carWash -= carWash * 0.10; break;
            }

        }
        return carWash

    }


    let result = washPercentage(arr)

    console.log(`The car is ${result.toFixed(2)}% clean.`);




}



carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])