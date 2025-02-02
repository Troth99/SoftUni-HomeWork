function solution(num){

    const add = function(number){
        let result = Number(number) + Number(num)
        return result
    }

    return add
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
