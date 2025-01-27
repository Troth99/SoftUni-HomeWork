function getFibonator() {
    let a = 1;
    let b = 1;

    return function () {
        let next = a;
        [a, b] = [b, a + b];
        return next
    }

}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
