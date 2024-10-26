function solve (bandName, AlbumName, song){


let timeToRotate = (bandName.length * AlbumName.length) * song.length / 2

let rotate = Math.ceil(timeToRotate / 2.5)
console.log(`The plate was rotated ${rotate} times.`);


}


solve('Black Sabbath', 'Paranoid', 'War Pigs')