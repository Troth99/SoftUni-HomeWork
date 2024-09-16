function face(input){
    let side1 = Number(input[0]);
    let side2 = Number(input[1]);
    let height = Number(input[2]);

    let b1 = side1;
    let b2 = side2;
    let h = height;



    let totalFace = (b1 + b2) * h / 2;

    console.log(totalFace.toFixed(2));

}
face(["8", "13", "7"])