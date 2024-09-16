function kozunak(input) {
    let index = 0;
    let broiKozunaci = Number(input[index++]);

    let obshtoZahar = 0;
    let obshtoBrashno = 0;

    let maxZahar = Number.MIN_SAFE_INTEGER;
    let maxBrashno = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < broiKozunaci; i++) {
        let zahar = Number(input[index++]);
        let brashno = Number(input[index++]);

        obshtoZahar += zahar;
        obshtoBrashno += brashno;

        if (zahar > maxZahar) {
            maxZahar = zahar;
        }

        if (brashno > maxBrashno) {
            maxBrashno = brashno;
        }
    }

    let paketiZahar = Math.ceil(obshtoZahar / 950);
    let paketiBrashno = Math.ceil(obshtoBrashno / 750);

    console.log(`Sugar: ${paketiZahar}`);
    console.log(`Flour: ${paketiBrashno}`);
    console.log(`Max used flour is ${maxBrashno} grams, max used sugar is ${maxZahar} grams.`);
}
kozunak([`3`,`400`,`350`,`250`,`300`,`450`,`380`])
    
    