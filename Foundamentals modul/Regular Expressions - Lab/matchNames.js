function matchNames(text){


let matchedNames = /\b[A-Z][a-z]+ [A-Z][a-z]+/g

let matched = text.match(matchedNames)

console.log(matched.join(` `));



}

matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")