function solve(n) {
    let startChar = 'a'.charCodeAt(0);  
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
          let first = String.fromCharCode(startChar + i);  
          let second = String.fromCharCode(startChar + j); 
          let third = String.fromCharCode(startChar + k);  
          console.log(`${first}${second}${third}`);        
        }
      }
    }
  }
solve (`3`)