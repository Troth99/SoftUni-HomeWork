function triangleOfNumbers(n) {
   let str = ``
    for (let curNum = 1; curNum <= n; curNum++) {
        for (let numCount = 1; numCount <= curNum; numCount++) {
            str += `${curNum} `
           
           
    }
    console.log(str);
       str = ``
    }
  
}

triangleOfNumbers(3)