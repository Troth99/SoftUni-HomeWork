function serializedNums(arr){

    let stored = {}
    let arrAsString = arr[0]
 
   for (let i = 0; i < arrAsString.length; i++){
   
    let letter = arrAsString[i]

    if (!stored.hasOwnProperty(letter)){
      
        stored[letter] = []
    
    }
      
        stored[letter].push(i)

   }

let entries = Object.entries(stored)

for (let [key, values] of entries){
    
        values = values.join(`/`)
    
    console.log(`${key}:${values}`);
    
    
}

}

serializedNums(["avjavamsdmcalsdm"])
console.log(`---`);

serializedNums(["abababa"])