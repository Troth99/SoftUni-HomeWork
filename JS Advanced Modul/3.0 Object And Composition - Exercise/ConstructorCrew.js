function constuctorCrew(workers) {

    let waterIntake = 0.1 * workers.weight * workers.experience;
    if (workers.dizziness === true) {
        workers.levelOfHydrated += waterIntake
        workers.dizziness = false
    }



    return workers

}


console.log(constuctorCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
))  