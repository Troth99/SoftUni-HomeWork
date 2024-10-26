function solve(n) {


    console.log(`<div class="chessboard">`)
    let counter = 0


    for (let firstRow = 1; firstRow <= n; firstRow++) {
        
        console.log(`  ` +`<div>`);

        if (firstRow % 2 !== 0){

        for (let secondRow = 1; secondRow <= n; secondRow++){
            counter++
            
        if (secondRow % 2 === 0) {
            console.log(`    `  +`<span class="white"></span>`);
            continue
        }
        console.log(`    `+`<span class="black"></span>`);
        {
        
        
        }
    }
    }else if ( firstRow % 2 === 0){
        for (let thirdRow = 1; thirdRow <= n; thirdRow++){

            if (thirdRow % 2 === 0) {
                
                console.log(`    `+`<span class="black"></span>`);
                continue
            }
            console.log(`    `  +`<span class="white"></span>`);

    }
    }
        console.log(`  `+`</div>`);

    }
    
    console.log(`</div>`);

}


solve(3)