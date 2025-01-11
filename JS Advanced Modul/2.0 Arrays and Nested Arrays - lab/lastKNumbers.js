function sequence(n,k) {
    n = Number(n);
    k = Number(k);

    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = i - 1; j >= 0 && j >= i - k; j--) {
            sum += result[j];
        }
        result.push(sum);
    }


    return result

}

console.log(sequence(6, 3))

