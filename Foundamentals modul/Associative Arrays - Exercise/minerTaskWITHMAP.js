function minerTask(arr){

let resources = new Map()


for (let i = 0; i < arr.length; i+=2){


let resource = arr[i]
let quantity = Number(arr[i + 1])
   
    
   if (resources.has(resource)){
    let value = resources.get(resource)
    let newValue = value + quantity
    resources.set(resource, newValue)
   }else {
    resources.set(resource, quantity)
   }
  

   
    
}

for (let print of resources){

    console.log(`${print[0]} -> ${print[1]}`);
    
}

}


minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    )