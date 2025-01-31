function add(num) {
    function internalSum(newNum) {
        internalSum.sum += newNum;
        return internalSum;
    }


    internalSum.sum = num;


    internalSum.toString = function () {
        return internalSum.sum.toString();
    };

    return internalSum;
}


console.log(add(4)(3).toString())