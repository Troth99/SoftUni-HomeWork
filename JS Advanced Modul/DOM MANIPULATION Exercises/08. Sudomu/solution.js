function solve() {

    const quickCheckBtn = document.querySelectorAll('button')[0];
    const clearBtn = document.querySelectorAll('button')[1];


    quickCheckBtn.addEventListener('click', quickCheck);

    function quickCheck() {
        const table = document.querySelectorAll('tbody tr td input');
        let grid = [[], [], []];


        for (let i = 0; i < table.length; i++) {
            let value = Number(table[i].value);
            let row = Math.floor(i / 3);
            grid[row].push(value);
        }


        if (isValidSudoku(grid)) {
            document.querySelector("table").style.border = "2px solid green";
            const checkParagraph = document.querySelector("#check p");
            checkParagraph.textContent = "You solve it! Congratulations!";
            checkParagraph.style.color = "green";
        } else {
            document.querySelector("table").style.border = "2px solid red";
            const checkParagraph = document.querySelector("#check p");
            checkParagraph.textContent = "NOP! You are not done yet...";
            checkParagraph.style.color = "red";
        }
    }


    function isValidSudoku(grid) {
        for (let i = 0; i < 3; i++) {
            let rowNum = [];
            let colNum = [];

            for (let j = 0; j < 3; j++) {
                let rowValue = grid[i][j];
                let colValue = grid[j][i];


                if (rowValue !== 0) {
                    if (rowNum.indexOf(rowValue) !== -1) return false;
                    rowNum.push(rowValue);
                }

                if (colValue !== 0) {
                    if (colNum.indexOf(colValue) !== -1) return false;
                    colNum.push(colValue);
                }
            }
        }
        return true;
    }


    clearBtn.addEventListener('click', clear);

    function clear() {
        const table = document.querySelectorAll('tbody tr td input');
        for (const el of table) {
            el.value = '';
        }
        document.querySelector("table").style.border = 'none';
        const checkParagraph = document.querySelector("#check p");
        checkParagraph.textContent = '';
        checkParagraph.style.color = '';
    }
}
