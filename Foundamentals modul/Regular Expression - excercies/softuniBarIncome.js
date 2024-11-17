function softUniBarIncome(arr){

 let command = arr.shift()
let pattern = /%(?<customer_name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/

let totalIncome = 0
 while (command !== `end of shift`){

   let isValid = command.match(pattern)

   if (isValid){

    let {customer_name, product, count, price} = isValid.groups
    price = Number(price)
    count = Number(count)

    let totalPrice = price * count
    totalIncome += totalPrice

    console.log(`${customer_name}: ${product} - ${totalPrice.toFixed(2)}`);

   }
    
    
    command = arr.shift()
    
 }
console.log(`Total income: ${totalIncome.toFixed(2)}`);


}


softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
    
    )