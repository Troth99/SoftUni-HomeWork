function rectangle(width, height, color){

let upperLetter = color[0].toUpperCase() + color.substring(1)
const rectangle = {
    width: Number(width),
    height: Number(height),
    color: upperLetter,
    calcArea : () =>{
       return Number(width) * Number(height)
    } 
    }
    return rectangle
}




let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
