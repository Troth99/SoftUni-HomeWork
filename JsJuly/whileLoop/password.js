function pass(input){

    let username = input[0];
    let pass = input[1]

    let index = 2;

    let currentIndex = input[index]

    while(currentIndex !== pass){
        index++
        currentIndex = input[index]
    }

    console.log(`Welcome ${username}!`);
    



}
pass(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
    

    asddddddddddddddddd