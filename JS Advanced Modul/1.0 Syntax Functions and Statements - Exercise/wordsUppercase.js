function solve(input) {

        let words = input.match(/\w+/g);
        
        if (words) {
            let result = words.map(word => word.toUpperCase()).join(', ');
            console.log(result);
        }
    }




solve(`Hi, how are you?`)
solve('Functions in JS can be nested, i.e. hold other functions')