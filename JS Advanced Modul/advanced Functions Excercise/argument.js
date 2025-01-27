function arg(...input){

let typeCount  = {};
input.forEach(arg => {
    const type = typeof arg;
    console.log(`${type}: ${arg}`);
    

    if (!typeCount[type]){
        typeCount[type] = 0;
    }
    typeCount[type]++
})
const sortedTypes  = Object.entries(typeCount).sort((a, b) => b[1] - a[1]);
for (const element of sortedTypes) {
   console.log(`${element[0]} = ${element[1]}`);
   
    
}

}


arg('cat', 42, function () { console.log('Hello world!'); })







