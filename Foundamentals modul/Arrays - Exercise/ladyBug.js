function ladyBug(arr) {
 
    let size = arr.shift();
   
    let allLadyBugs = arr.shift();
    
    let tokens = arr;
    let allyBugsSplit = allLadyBugs.split(' ');
    
 
    let field = new Array(size).fill(0);
    

    for (let i = 0; i < allyBugsSplit.length; i++) {
        let bugsOnIndex = Number(allyBugsSplit[i]);
        if (bugsOnIndex >= 0 && bugsOnIndex < size) {
            field[bugsOnIndex] = 1;
        }
    }


    for (let i = 0; i < tokens.length; i++) {
        let currentElement = tokens[i];
        let parts = currentElement.split(' ');
        let ladyBugIndex = Number(parts[0]);
        let direction = parts[1];
        let flyLength = Number(parts[2]);

       
        if (ladyBugIndex < 0 || ladyBugIndex >= size || field[ladyBugIndex] !== 1) {
            continue;
        }

      
        field[ladyBugIndex] = 0;
        let newIndex = ladyBugIndex;

       
        while (true) {
            if (direction === 'right') {
                newIndex += flyLength;
            } else if (direction === 'left') {
                newIndex -= flyLength;
            }

           
            if (newIndex < 0 || newIndex >= size) {
                break;
            }

          
            if (field[newIndex] === 0) {
                field[newIndex] = 1;
                break;
            }
        
        }
    }

   
    console.log(field.join(' '));
}






ladyBug([ 3, '0 1',
    '0 right 1',
    '2 right 1' ]
)    