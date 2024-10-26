function solve(n, m){

let str = ``
let sum = 0
for (let i = n; i<= m; i++){
    str += `${i} `
    sum += i;
    
}
console.log(str);
console.log(`Sum: ${sum}`);

}
solve(50, 60)