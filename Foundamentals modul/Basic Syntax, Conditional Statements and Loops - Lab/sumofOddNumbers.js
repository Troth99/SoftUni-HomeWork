function solve(N){

let sum = 0
for (let i = 1; i<= 100; i++){
    if (i % 2 !==0){
        while(N >= 1){
            console.log(i);
            sum += i
            N--
            break;
        }
    }
}
console.log(`Sum: ${sum}`);

}



solve(10)