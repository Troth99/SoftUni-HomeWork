function rightPlace (str1, replacement, str2){

let replace = str1.replace(`_`,replacement);

let ternayOperator = replace === str2? "Matched" : "Not Matched"  //Ternnay Operator

console.log(ternayOperator);


}

rightPlace('Str_ng', 'I', 'Strong')