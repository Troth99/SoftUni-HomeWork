function trainingLab(input){
    let length = Number(input[0]*100);
    let width = Number(input[1]*100);

    
    /*От конзолата се четат 2 числа, по едно на ред: w (дължина в метри) и h (широчина в метри).
    Ограничения: 3 ≤ h ≤ w ≤ 100. */


    let colums = Math.floor ((width - 100) / 70);
    let rows = Math.floor (length / 120);
    let totalSum = colums * rows - 3;


     
console.log(totalSum)

}

trainingLab(["15","8.9"])
trainingLab(["8.4","5.2"])