function solution(){

let intStr = '';

const append = function(string){
    intStr += string

    return append
}

const removeStart = function(number){
intStr = intStr.slice(number)

    return removeStart
}
const removeEnd = function(number){

    intStr = intStr.slice(0, intStr.length - number)
}
const print = function(){
    console.log(intStr)
}

return {
    append,
    removeStart,
    removeEnd,
    print
}

}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
