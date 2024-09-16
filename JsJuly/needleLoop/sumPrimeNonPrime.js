function PrimeNonPrime (data){

    let index = 0
    let currentIndex = data[index++]

        let isPrime = 0
        let nonPrime = 0

    while (currentIndex !== `stop`){
        let currentDigit = Number(currentIndex)

            if (currentDigit < 0){
                console.log(`Number is negative.`);
                currentIndex = data[index++]
                continue;
            }
        let IsNonPrime = false

        for (let i = 2; i < currentDigit; i++){

            if (currentDigit % i === 0){
                IsNonPrime = true
                break;
            }
            
        }
        if (IsNonPrime){
            nonPrime += currentDigit
        }else {
            isPrime += currentDigit
        }

       currentIndex = data[index++]
    }
console.log(`Sum of all prime numbers is: ${isPrime}`);
console.log(`Sum of all non prime numbers is: ${nonPrime}`);




}

PrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])
    
    