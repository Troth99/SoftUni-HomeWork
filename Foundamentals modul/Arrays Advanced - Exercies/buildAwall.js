function trackingConstruction(arr) {
    let newArray = [];
    let cubicYard = 1900; 
    let totalPesto = 0; 
   
    arr = arr.map(n => Number(n));

  
    let incompleteSections = arr.length; 

    while (incompleteSections > 0) {
        let workingCrews = 0;

       
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                arr[i] += 1; 
                workingCrews++;
            }
        }

      
        let dailyCubicYards = workingCrews * 195;
        newArray.push(dailyCubicYards);
        totalPesto += dailyCubicYards * cubicYard; 

      
        incompleteSections = arr.filter(height => height < 30).length;
    }

  
    console.log(newArray.join(', '));
    console.log(`${totalPesto} pesos`);
}





trackingConstruction([21, 25, 28])