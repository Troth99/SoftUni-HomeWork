function clock(){

for (let hours = 0; hours <= 23; hours ++){
    for (let min = 0; min <= 59; min ++){
        for (let sec = 0; sec <= 59; sec++){
            console.log(`${hours} : ${min} : ${sec}`);
        }

    }
}


}

clock()