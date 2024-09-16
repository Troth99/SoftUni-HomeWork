function housePainting(userData){

    let x = Number(userData[0]);
    let y = Number(userData[1]);
    let h = Number(userData[2]);

    windowsSize = 1.5;
    doorSize = 1.2*2;

    greenPaint = 3.4;
    redPaint = 4.3;
 
    let sideWall = x * y;
    let window =  windowsSize * windowsSize;

    let = bothSides = 2 * sideWall - 2* window;
    let = backSide = x*x ;
    let = fronstSide = doorSize;

    let totalBackAndFront = 2* backSide - doorSize;
    let totalPlaceSize = bothSides + totalBackAndFront;

    greenPainting = totalPlaceSize / greenPaint;

    let roof = 2 * (x*y);
    let roofTriangle = 2 * (x*h/2);

    let totalPlace = roof + roofTriangle;

    let redPainting = totalPlace / redPaint;

    

    console.log(greenPainting.toFixed(2));
    console.log(redPainting.toFixed(2));








}

housePainting(["6" , "10" , "5.2"])