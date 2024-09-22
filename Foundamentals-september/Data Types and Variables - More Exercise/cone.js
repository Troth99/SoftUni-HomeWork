function solve(radiusOfTheBase, height){

let volume = Math.PI * radiusOfTheBase * radiusOfTheBase * height /3 
let s = Math.sqrt(radiusOfTheBase * radiusOfTheBase + height * height)
let totalSurfaceArea = Math.PI * radiusOfTheBase * (radiusOfTheBase + s)
console.log(`volume = ${volume.toFixed(4)} `);
console.log(`area = ${totalSurfaceArea.toFixed(4)}`);





}

solve(3,5)