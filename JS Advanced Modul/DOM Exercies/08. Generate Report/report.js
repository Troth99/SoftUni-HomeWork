function generateReport() {
    let input = Array.from(document.getElementsByTagName('input'));

    const result = [];
    let rows = Array.from(document.getElementsByTagName('tr'));
    const checkedCols = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const obj = {};

        for (let y = 0; y < row.children.length; y++) {
            const element = row.children[y];
            if (i == 0) {
                if (element.children[0].checked) {
                    checkedCols.push(y);
                }
                continue;
            }

            if (checkedCols.includes(y)) {
                let propertyName = input[y].name;
                obj[propertyName] = element.textContent;
            }
        }
        if (i !== 0) {
            result.push(obj);
        }
    }

    document.getElementById('output').value = JSON.stringify(result);
}

