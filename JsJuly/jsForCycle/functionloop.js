function forloop(input) {

    //При IF слагаме булев израз
    //При Swich () добаваме промеливата която проверяваме

    //1.Локална променлива .Булев израз в цикъла,  локалната променлива да се променя

    let start = Number(input[0]);
    let end = Number(input[1]);

    for (let a = start; a <= end; a += 2) {
        //  if (a%2 === 0)
        console.log(a)
    }

}

forloop(["8", "26"])