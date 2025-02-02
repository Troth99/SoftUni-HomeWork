function tickets(arr, sortingArg){

    const result = []
    for (const line of arr) {
        let [destination, price, status] = line.split('|');
        price = Number(price);

        class Ticket {
            constructor(destination, price, status){
                this.destination = destination,
                this.price = price, 
                this.status = status
            }
        }
        
        result.push(new Ticket(destination, price, status))
    }
 
    
    if (sortingArg === 'destination'){
        result.sort((a,b) => a.destination.localeCompare(b.destination))
    }else if (sortingArg === 'status'){
        result.sort((a, b) => a.status.localeCompare(b.status))
    }else if (sortingArg === 'price'){
        result.sort((a,b) => a.price - b.price)
    }
    
  
return result


}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
   'status'
   
   ))