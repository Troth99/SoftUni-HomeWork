function readingName(input) {

    let index = 0;
    while (true) {
        let currentElement = input[index]
        index++
        if(currentElement === 'Stop'){
            break;
        }
        console.log(currentElement);
    }
    


}
readingName(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
