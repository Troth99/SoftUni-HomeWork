function sorting(input){
let sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b))

sorted.forEach(name => {
    console.log(name);
    
});
}

sorting(['test', 
    'Deny', 
    'omen', 
    'Default']
    )