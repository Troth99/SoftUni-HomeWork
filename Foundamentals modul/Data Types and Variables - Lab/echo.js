function echo (type){

let typeIs = typeof(type)

if ( typeIs === `string` || typeIs === `number`){
    console.log(typeIs);
    console.log(type);
    
    
}else {
    console.log(typeIs);
    
    console.log('Parameter is not suitable for printing');
    
}




}

echo(null)