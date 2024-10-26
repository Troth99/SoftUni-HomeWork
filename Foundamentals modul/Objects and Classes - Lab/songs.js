function songs (arr){

let numberOfSongs = arr.shift()
let songs = []

let typeSong = arr.pop()
class Song {
    constructor (type, name, time){
        this.typeList = type
        this.name = name
        this.time = time
    }


}

for (let k = 0; k < numberOfSongs; k++){
    let currentIndex = arr[k]
    let command = currentIndex.split(`_`)
    let type = command[0]
    let name = command[1]
    let time = command[2]
    let song = new Song (type, name, time)
    songs.push(song)
    
}

if (typeSong === `all`){
    songs.forEach((i) => console.log(i.name))
}else {
    let filter = songs.filter((k) => k.typeList === typeSong)
    filter.forEach((k) => console.log(k.name)
    )
}

}



songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )