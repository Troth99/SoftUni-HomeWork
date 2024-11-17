function adAstra(arr){

    let patternt = /([#|])(?<name>[A-Za-z\s]+)\1(?<expdate>(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{2}))\1(?<calories>\d+)\1/g
    let string = arr.toString()
    let totalCalories = 0
    let kcalDay = 2000
 
    let matches = Array.from(string.matchAll(patternt))

  if (matches){

    for (let match of matches){

        let {name, expdate, day, month, year, calories} = match.groups
        calories = Number(calories)
        totalCalories += calories
        
        
    }
   let daysFood = totalCalories / kcalDay

   console.log(`You have food to last you for: ${Math.floor(daysFood)} days!`);

    for (let print of matches){

        let {name, expdate, day, month, year, calories} = print.groups

        console.log(`Item: ${name}, Best before: ${expdate}, Nutrition: ${calories}`);
        
        
    }
   
  }
    

   
    



}

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]
    )