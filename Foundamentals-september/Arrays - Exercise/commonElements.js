function commonElements(arr1, arr2){


let currentElementArr1 = []
let currentElementArr2 = []
for (let i = 0; i <arr1.length; i++){

    currentElementArr1 = arr1[i]

    for (let j = 0; j <arr2.length; j++){
        
        currentElementArr2 = arr2[j]

        if (currentElementArr1 === currentElementArr2){
            console.log(arr1[i]);
            
        }
    
    }
    


}



}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
    )