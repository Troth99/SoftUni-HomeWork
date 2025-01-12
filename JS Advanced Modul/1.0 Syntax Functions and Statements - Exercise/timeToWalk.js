function timeToWalk(steps, footprint, speed) {

    let distance = steps * footprint;


    let speedInMetersPerHour = speed * 1000;


    let timeInHours = distance / speedInMetersPerHour;


    let timeInSeconds = timeInHours * 3600;


    let breaks = Math.floor(distance / 500);
    timeInSeconds += breaks * 60;


    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = Math.round(timeInSeconds % 60);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');


    console.log(`${hours}:${minutes}:${seconds}`);
}



timeToWalk(4000, 0.60, 5)
















//paddstart



